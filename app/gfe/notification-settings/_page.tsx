import { NotificationSettingsForm } from "@/app/gfe/notification-settings/_components/notification-settings-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Home() {
	return (
		<Card className="w-full">
			<CardHeader></CardHeader>
			<CardContent>
				<NotificationSettingsForm />
			</CardContent>
		</Card>
	);
}
