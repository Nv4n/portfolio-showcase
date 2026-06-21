// app/not-found.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Ensure your path alias matches your setup

export default function NotFound() {
	return (
		<div className="flex min-h-dvh flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-md text-center">
				<div className="mx-auto h-12 w-12 text-muted-foreground animate-bounce" />

				<h1 className="mt-4 text-6xl font-bold tracking-tight text-foreground sm:text-7xl">
					404
				</h1>
				<p className="mt-4 text-base text-muted-foreground">
					Sorry, we couldn&apos;t find the page you&apos;re looking
					for. It might have been moved or deleted.
				</p>

				<div className="mt-6">
					{/* Shadcn Button styling used as a Link */}
					<Button asChild>
						<Link href="/">Go back home</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
