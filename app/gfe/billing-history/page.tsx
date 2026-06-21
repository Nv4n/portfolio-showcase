"use client";

import { BillingHistoryView } from "@/app/gfe/billing-history/_components/billing-history-view";
import { EmptyBillingView } from "@/app/gfe/billing-history/_components/empty-billing-view";
import { Button, buttonVariants } from "@/components/ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
	const [isEmptyState, setEmptyState] = useState(false);

	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>Payment History</CardTitle>

				<CardDescription className="row-start-2 ">
					Please reach out to our friendly team via team@codepulse.com
					if you have questions.
				</CardDescription>
				<CardAction className="col-start-1 row-start-3 sm:row-start-1 sm:col-start-2 w-full">
					<Button
						variant="outline"
						onClick={() => setEmptyState(!isEmptyState)}
					>
						{isEmptyState
							? "Show billing history"
							: "Show empty state"}
					</Button>
				</CardAction>
			</CardHeader>

			<CardContent>
				{isEmptyState ? <EmptyBillingView /> : <BillingHistoryView />}
			</CardContent>
		</Card>
	);
}
