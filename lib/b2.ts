import { S3Client } from '@aws-sdk/client-s3';

let b2ClientInstance: S3Client | null = null;

export function getB2Client() {
	if (!b2ClientInstance) {
		if (!process.env.B2_KEY_ID || !process.env.B2_APPLICATION_KEY) {
			throw new Error('Missing Backblaze credentials in process.env');
		}

		
		b2ClientInstance = new S3Client({
			endpoint: process.env.B2_ENDPOINT_URL,
			region: process.env.B2_REGION,
			credentials: {
				accessKeyId: process.env.B2_KEY_ID,
				secretAccessKey: process.env.B2_APPLICATION_KEY,
			},
		});
	}

	return b2ClientInstance;
}
