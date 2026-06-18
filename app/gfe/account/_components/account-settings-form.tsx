"use client";

import { StyledLabel } from "@/components/form/styled-label";
import { Button } from "@/components/ui/button";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldGroup,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Account, AccountSchema } from "@/types/account";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

export function AccountSettingsForm() {
	const form = useForm<Account>({
		resolver: zodResolver(AccountSchema),
		defaultValues: {
			username: "",
			email: "",
			firstName: "",
			lastName: "",
		},
		mode: "onTouched",
	});

	function onSubmit(data: Account) {
		console.log(data);
	}

	return (
		<form id="account-rhf" onSubmit={form.handleSubmit(onSubmit)}>
			<FieldGroup className="mb-8 gap-8 sm:gap-6">
				<FieldGroup
					className="flex-row gap-8 xl:gap-4"
					data-slot="name-group"
				>
					<Controller
						control={form.control}
						name="firstName"
						render={({ field, fieldState }) => (
							<Field>
								<StyledLabel htmlFor="account-rhf-name">
									First name
								</StyledLabel>
								<Input
									{...field}
									id="account-rhf-fname"
									placeholder="John"
									aria-invalid={fieldState.invalid}
								/>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					></Controller>
					<Controller
						control={form.control}
						name="lastName"
						render={({ field, fieldState }) => (
							<Field>
								<StyledLabel htmlFor="account-rhf-lname">
									Last name
								</StyledLabel>
								<Input
									{...field}
									id="account-rhf-lname"
									placeholder="Appleseed"
									aria-invalid={fieldState.invalid}
								/>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					></Controller>
				</FieldGroup>

				<Controller
					control={form.control}
					name="email"
					render={({ field, fieldState }) => (
						<Field>
							<StyledLabel htmlFor="account-rhf-email">
								Email
							</StyledLabel>
							<Input
								{...field}
								id="account-rhf-email"
								placeholder="user@example.com"
								aria-invalid={fieldState.invalid}
							/>
							{fieldState.invalid && (
								<FieldError errors={[fieldState.error]} />
							)}
						</Field>
					)}
				></Controller>
				<Controller
					control={form.control}
					name="username"
					render={({ field, fieldState }) => (
						<Field>
							<StyledLabel htmlFor="account-rhf-username">
								Username
							</StyledLabel>
							<div>
								<Input
									{...field}
									id="account-rhf-username"
									placeholder="johnappleseed"
									aria-invalid={fieldState.invalid}
								/>
								{/* TODO add unique check for username */}
							</div>

							{fieldState.invalid && (
								<FieldError errors={[fieldState.error]} />
							)}
							<FieldDescription className="text-sm text-neutral-500">
								Allows others to find and interact with you
								easily.
							</FieldDescription>
						</Field>
					)}
				></Controller>
			</FieldGroup>
			<Field orientation="horizontal">
				<Button
					disabled={
						!form.formState.isDirty || !form.formState.isValid
							? true
							: false
					}
					type="submit"
					className="text-background ml-auto w-44 cursor-pointer rounded bg-indigo-700 px-3 py-5 font-medium hover:bg-indigo-800 focus:bg-indigo-800 disabled:bg-neutral-100 disabled:text-neutral-400"
				>
					Save changes
				</Button>
			</Field>
		</form>
	);
}
