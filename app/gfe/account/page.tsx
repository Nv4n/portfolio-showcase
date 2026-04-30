import { AccountSettingsForm } from "@/app/gfe/account/account-settings-form";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";

export default function Account() {
	return (
		<Card className="mx-8 my-16 w-full max-w-4xl gap-8">
			<CardHeader>
				<CardTitle className="text-xl font-semibold">
					Manage Your Account
				</CardTitle>
				<CardDescription>
					Update your account details below for a tailored experience
					on our platform.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<AccountSettingsForm />
			</CardContent>
		</Card>
	);
}
