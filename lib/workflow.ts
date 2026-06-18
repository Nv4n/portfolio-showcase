import { Client } from '@upstash/workflow';

export const client = new Client({
	baseUrl: process.env.QSTASH_URL!,
	token: process.env.QSTASH_TOKEN!,
});

export const BASE_URL = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: `http://localhost:3000`;
