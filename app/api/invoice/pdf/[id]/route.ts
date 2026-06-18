import { b2UploadFile } from '@/app/api/_utils/b2Upload';
import fs from 'fs';
import { NextResponse } from 'next/server';

export async function GET(
	req: Request,
	{ params }: { params: Promise<{ id: string }> },
) {
	if (!process.env.B2_BUCKET_NAME) {
		console.error('No bucket name');
		NextResponse.json({ error: 'Internal server error' }, { status: 500 });
		throw new Error('No bucket name');
	}

	const { id } = await params;
	

	const file = fs.createReadStream('./app/api/_utils/GFE-0004.pdf');
	const result = await b2UploadFile({
		bucketName: process.env.B2_BUCKET_NAME,
		filename: `invoice-${id || 'no-id'}`,
		file: file,
	});
	console.log(result);
	return Response.json({ url: 'localhost:3000' });
}
