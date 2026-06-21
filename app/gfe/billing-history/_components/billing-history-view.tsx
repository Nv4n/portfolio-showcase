import { InvoiceDownloadBtn } from '@/app/gfe/billing-history/_components/invoice-download-btn';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { Invoice } from '@/types/invoice';

const payments: Invoice[] = [
	{
		createdAt: new Date('2024-03-01'),
		status: 'Pending',
		amount: 12,
		plan: 'Professional plan',
	},
	{
		createdAt: new Date('2024-02-01'),
		status: 'Paid',
		amount: 6,
		plan: 'Basic plan',
	},
	{
		createdAt: new Date('2024-01-01'),
		status: 'Paid',
		amount: 6,
		plan: 'Basic plan',
	},
	{
		createdAt: new Date('2023-12-01'),
		status: 'Paid',
		amount: 0,
		plan: 'Starter plan',
	},
];

export function BillingHistoryView() {
	return (
		<>
			<Table className="hidden sm:block w-full border rounded">
				<TableHeader>
					<TableRow className="*:px-6 *:py-3">
						<TableHead>Invoice</TableHead>
						<TableHead>Status</TableHead>
						<TableHead>Amount</TableHead>
						<TableHead>Plan</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{payments.map((payment, ind) => (
						<TableRow
							className="*:px-6 *:py-4"
							key={`${ind}-${payment.createdAt.toDateString()}`}
						>
							<TableCell>
								{payment.createdAt.toDateString()}
							</TableCell>
							<TableCell>{payment.status}</TableCell>
							<TableCell>${payment.amount}</TableCell>
							<TableCell>{payment.plan}</TableCell>
							<TableCell className="w-full">
								<InvoiceDownloadBtn invoiceId={ind} />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>

			<ul className=" sm:hidden flex flex-col gap-4">
				{payments.map((payment, ind) => (
					<li
						className="border rounded flex flex-col *:px-4 *:py-3 divide-y"
						key={`${ind}-${payment.createdAt.toDateString()}`}
					>
						<dl className="flex justify-between ">
							<dt>Invoice</dt>
							<dd>{payment.createdAt.toDateString()}</dd>
						</dl>
						<dl className="flex justify-between">
							<dt>Status</dt>
							<dd>{payment.status}</dd>
						</dl>
						<dl className="flex justify-between ">
							<dt>Amount</dt>
							<dd>${payment.amount}</dd>
						</dl>
						<dl className="flex justify-between">
							<dt>Plan</dt>
							<dd>{payment.plan}</dd>
						</dl>
						<InvoiceDownloadBtn invoiceId={ind} />
					</li>
				))}
			</ul>
		</>
	);
}
