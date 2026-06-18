import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface InvoiceDownloadProps {
	invoiceId: number;
}

export function InvoiceDownloadBtn({ invoiceId }: InvoiceDownloadProps) {
	return (
		<Link
			href={`/api/invoice/pdf/${invoiceId}`}
			target="_blank"
			rel="noopener noreferrer"
			className={cn(
				buttonVariants({
					variant: 'link',
				}),
				'ml-auto block w-fit h-fit text-indigo-700 hover:text-indigo-800',
			)}
		>
			Download
		</Link>
	);
}
