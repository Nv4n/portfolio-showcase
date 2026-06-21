// import { BASE_URL, client } from '@/lib/workflow';

// export async function GET(req: Request) {
// 	try {
// 		const { workflowRunId } = await client.trigger({
// 			url: `${BASE_URL}/api/workflow`,
// 			retries: 3,
// 		});
// 		return Response.json({ success: true, workflowRunId }, { status: 200 });
// 	} catch (error) {
// 		console.error('Failed to trigger workflow:', error);
// 		return Response.json(
// 			{ success: false, error: 'Trigger failed' },
// 			{ status: 500 },
// 		);
// 	}
// }
