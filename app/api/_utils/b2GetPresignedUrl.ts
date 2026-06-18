import { getB2Client } from '@/lib/b2';
import { GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

interface DownloadFileProps {
	fileKey: string;
}

export async function b2GetFile({ fileKey }: DownloadFileProps) {
	console.log(`Downloading: ${fileKey}`);
	const b2 = getB2Client();
	try {
		const getCommand = new GetObjectCommand({
			Bucket: process.env.B2_BUCKET_NAME,
			Key: fileKey,
		});

		const signedUrl = await getSignedUrl(b2, getCommand, {
			expiresIn: 3600,
		});

		return signedUrl;
	} catch (err) {
		console.error('Error uploading file:', err);
		throw err;
	}
}
