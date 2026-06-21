import { gfeToast } from "@/components/toast-notification";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

interface InvoiceDownloadProps {
	invoiceId: number;
}

export function InvoiceDownloadBtn({ invoiceId }: InvoiceDownloadProps) {
	const { data, isPending, isFetching, isError, refetch } = useQuery({
		queryKey: ["invoice", invoiceId],
		queryFn: async () => {
			const res = await fetch(`/api/invoice/pdf/${invoiceId}`);
			if (!res.ok) {
				throw new Error("Network response was not ok");
			}
			const json = await res.json();
			return json.url;
		},
		retry: false,
	});

	if (isError) {
		gfeToast({
			variant: "error",
			description: "Error downloading invoice",
		});
		return (
			<Button
				className={cn(
					buttonVariants({
						variant: "link",
					}),
					"ml-auto block w-fit h-fit text-indigo-700 hover:text-indigo-800",
				)}
				onClick={() => refetch()}
				disabled={isFetching}
			>
				Try again
			</Button>
		);
	}
	if (isPending || isFetching) {
		return (
			<p
				className={cn(
					buttonVariants({
						variant: "link",
					}),
					"ml-auto block w-fit h-fit text-indigo-700 hover:text-indigo-800",
				)}
			>
				Loading ...
			</p>
		);
	}

	return (
		<Link
			href={data}
			target="_blank"
			rel="noopener noreferrer"
			className={cn(
				buttonVariants({
					variant: "link",
				}),
				"ml-auto block w-fit h-fit text-indigo-700 hover:text-indigo-800",
			)}
		>
			Download
		</Link>
	);
}
