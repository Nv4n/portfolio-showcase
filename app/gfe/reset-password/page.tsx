import { PasswordResetForm } from "@/app/gfe/reset-password/_components/password-reset-form";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";

export default function ResetPassword() {
	return (
		<Card className="w-full max-w-4xl gap-8">
			<CardHeader>
				<CardTitle className="text-xl font-semibold">
					Manage Security
				</CardTitle>
				<CardDescription>
					Protect your data and ensure secure interactions.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<PasswordResetForm />
			</CardContent>
		</Card>
	);
}
