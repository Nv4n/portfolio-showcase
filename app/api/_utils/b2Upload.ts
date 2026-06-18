import { getB2Client } from '@/lib/b2';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import fs from 'fs';

interface UploadFileProps {
	bucketName: string;
	filename: string;
	file: fs.ReadStream;
}

export async function b2UploadFile({
	bucketName,
	filename,
	file,
}: UploadFileProps) {
	console.log(`Uploading: ${filename}`);
	const b2 = getB2Client();
	try {
		const response = await b2.send(
			new PutObjectCommand({
				Bucket: bucketName,
				Key: filename,
				Body: file,
			}),
		);
		console.log(
			`Success! Response is: ${JSON.stringify(response, null, 2)}`,
		);
		return response.VersionId;
	} catch (err) {
		console.error('Error uploading file:', err);
		throw err;
	}
}
