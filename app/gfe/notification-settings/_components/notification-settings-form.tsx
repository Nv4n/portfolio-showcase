// import { Button } from "@/components/ui/button";
// import { Field, FieldContent, FieldError } from "@/components/ui/field";
// import { Label } from "@/components/ui/label";
// import { Switch } from "@/components/ui/switch";
// import {
// 	Table,
// 	TableBody,
// 	TableCell,
// 	TableHead,
// 	TableHeader,
// 	TableRow,
// } from "@/components/ui/table";
// import {
// 	NotificationForm,
// 	NotificationFormSchema,
// } from "@/types/notifications";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Controller, useFieldArray, useForm } from "react-hook-form";

// const defaultValues: NotificationForm = {
// 	channels: [
// 		{
// 			id: "marketing",
// 			label: "Marketing & promotional content",
// 			push: false,
// 			email: false,
// 			sms: false,
// 		},
// 		{
// 			id: "feature-updates",
// 			label: "Feature updates",
// 			email: false,
// 			sms: false,
// 			push: false,
// 		},
// 		{
// 			id: "comments",
// 			label: "Comments",
// 			email: true,
// 			sms: false,
// 			push: true,
// 		},
// 		{
// 			id: "friend-updates",
// 			label: "Updates from friends",
// 			email: false,
// 			sms: false,
// 			push: true,
// 		},
// 		{
// 			id: "friend-requests",
// 			label: "Friends requests",
// 			email: false,
// 			sms: false,
// 			push: true,
// 		},
// 	],
// };

// export function NotificationSettingsForm() {
// 	const form = useForm<NotificationForm>({
// 		resolver: zodResolver(NotificationFormSchema),
// 		defaultValues,
// 		mode: "onTouched",
// 	});

// 	const { fields } = useFieldArray({
// 		control: form.control,
// 		name: "channels",
// 	});

// 	function onSubmit(data: NotificationForm) {
// 		console.log("Submitted Data:", data);
// 	}

// 	return (
// 		<form onSubmit={form.handleSubmit(onSubmit)}>
// 			<Table className="-mx-6 sm:-mx-20 border-spacing-x-6 sm:border-spacing-x-20 border-separate ">
// 				<TableHeader className="relative after:absolute after:bottom-0 after:w-full after:border-b after:border-border after:content-[' ']">
// 					<TableRow>
// 						<TableHead />
// 						<TableHead>Push</TableHead>
// 						<TableHead>Email</TableHead>
// 						<TableHead>SMS</TableHead>
// 					</TableRow>
// 				</TableHeader>

// 				<TableBody>
// 					{fields.map((field, index) => (
// 						<>
// 							<TableRow key={`notification-${option}`}>
// 								<TableCell>{option}</TableCell>
// 								<TableCell>
// 									<Switch className="data-[state=checked]:bg-indigo-700" />
// 									<Label className="sr-only">
// 										Push notification
// 									</Label>
// 								</TableCell>
// 								<TableCell>
// 									<Switch className="data-[state=checked]:bg-indigo-700" />
// 									<Label className="sr-only">
// 										Email notification
// 									</Label>
// 								</TableCell>
// 								<TableCell>
// 									<Switch className="data-[state=checked]:bg-indigo-700" />
// 									<Label className="sr-only">
// 										SMS notification
// 									</Label>
// 								</TableCell>
// 							</TableRow>

// 							<Controller
// 								key={`notification-${field.id}`}
// 								name={`channels.${index}.push`}
// 								control={form.control}
// 								render={({
// 									field: controllerField,
// 									fieldState,
// 								}) => (
// 									<Field
// 										orientation={"horizontal"}
// 										data-invalid={fieldState.invalid}
// 									>
// 										<FieldContent>
// 											<Switch
// 												id={`form-rhf-array-channel-${index}-push`}
// 												aria-invalid={
// 													fieldState.invalid
// 												}
// 												checked={
// 													controllerField.value ||
// 													false
// 												}
// 												onCheckedChange={
// 													controllerField.onChange
// 												}
// 												name={controllerField.name}
// 											/>
// 											{fieldState.invalid && (
// 												<FieldError
// 													errors={[fieldState.error]}
// 												/>
// 											)}
// 										</FieldContent>
// 									</Field>
// 								)}
// 							/>
// 						</>
// 					))}
// 				</TableBody>
// 			</Table>
// 			<Field orientation={"horizontal"} className="py-4">
// 				<Button
// 					disabled={
// 						!form.formState.isDirty || !form.formState.isValid
// 							? true
// 							: false
// 					}
// 					type="submit"
// 					className="text-start text-background ml-auto w-44 cursor-pointer rounded bg-indigo-700 px-3 py-5 font-medium hover:bg-indigo-800 focus:bg-indigo-800 disabled:bg-neutral-100 disabled:text-neutral-400"
// 				>
// 					{"Save changes"}
// 				</Button>
// 			</Field>
// 		</form>
// 	);
// }
