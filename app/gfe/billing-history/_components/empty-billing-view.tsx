import {
	Empty,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from '@/components/ui/empty';
import { SquareDashedText } from 'lucide-react';


export function EmptyBillingView() {
	return (
		<div className="flex flex-col justify-center items-center gap-8 self-stretch grow">
			<Empty>
				<EmptyHeader>
					<EmptyMedia
						className="rounded-full p-3 bg-white shadow text-indigo-700"
						variant="icon"
					>
						<SquareDashedText className="size-5" />
					</EmptyMedia>
					<EmptyTitle>No payment history available</EmptyTitle>
					<EmptyDescription>
						Once you start making transactions, your payment details
						will appear here.
					</EmptyDescription>
				</EmptyHeader>
			</Empty>
		</div>
	);
}
