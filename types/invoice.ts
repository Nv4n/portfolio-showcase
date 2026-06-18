import {
	ColumnType,
	GeneratedAlways,
	Insertable,
	Selectable,
	Updateable,
} from 'kysely';
import z from 'zod';

export const InvoiceSchema = z.object({
	status: z.enum(['Paid', 'Pending', 'Canceled']),
	amount: z.number(),
	plan: z.string(),
	createdAt: z.date(),
});

export interface InvoiceTable {
	id: GeneratedAlways<string>;
	status: string;
	amount: number;
	plan: string;
	created_at: ColumnType<Date, string | undefined, never>;
}

// export interface InvoicePdfTable{

// }

export type Invoice = z.infer<typeof InvoiceSchema>;
export type InvoiceSelect = Selectable<InvoiceTable>;
export type NewInvoice = Insertable<InvoiceTable>;
export type InvoiceUpdate = Updateable<InvoiceTable>;
