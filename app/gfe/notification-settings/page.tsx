import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const NOTIFICATION_OPTIONS = [
	"Marketing & promotional content",
	"Feature updates",
	"Comments",
	"Updates from friends",
	"Friends requests",
];

export default function Home() {
	return (
		<>
			<Card>
				<CardHeader></CardHeader>
				<CardContent>
					<form>
						<Table className="-mx-6 sm:-mx-20 border-spacing-x-6 sm:border-spacing-x-20 border-separate ">
							<TableHeader className="relative after:absolute after:bottom-0 after:w-full after:border-b after:border-border after:content-[' ']">
								<TableRow>
									<TableHead />
									<TableHead>Push</TableHead>
									<TableHead>Email</TableHead>
									<TableHead>SMS</TableHead>
								</TableRow>
							</TableHeader>

							<TableBody>
								{NOTIFICATION_OPTIONS.map((option) => (
									<TableRow key={`notification-${option}`}>
										<TableCell>{option}</TableCell>
										<TableCell>
											<Switch className="data-[state=checked]:bg-indigo-700" />
											<Label className="sr-only">
												Push notification
											</Label>
										</TableCell>
										<TableCell>
											<Switch className="data-[state=checked]:bg-indigo-700" />
											<Label className="sr-only">
												Email notification
											</Label>
										</TableCell>
										<TableCell>
											<Switch className="data-[state=checked]:bg-indigo-700" />
											<Label className="sr-only">
												SMS notification
											</Label>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
						<Button>Save changes</Button>
					</form>
				</CardContent>
			</Card>
		</>
	);
}
