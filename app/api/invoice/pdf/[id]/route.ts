import { b2UploadFile } from "@/app/api/_utils/b2Upload";
import { getB2Client } from "@/lib/b2";
import { GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import fs from "fs";
import { get } from "http";
import { NextResponse } from "next/server";

export async function GET(
	req: Request,
	{ params }: { params: Promise<{ id: string }> },
) {
	if (!process.env.B2_BUCKET_NAME) {
		console.error("No bucket name");
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 },
		);
	}
	const { id } = await params;
	const b2 = getB2Client();
	const command = new GetObjectCommand({
		Bucket: process.env.B2_BUCKET_NAME!,
		Key: "invoice-0",
		ResponseContentType: "application/pdf",
		ResponseContentDisposition: 'inline; filename="my-invoice.pdf"', 
	});

	const url = await getSignedUrl(b2, command, {
		expiresIn: 3600,
	});

	console.log(url);
	return Response.json({ url }, { status: 200 });
}
