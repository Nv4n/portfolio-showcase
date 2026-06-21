"use client";

import { PasswordField } from "@/components/form/password-field";
import { RequirementList } from "@/components/form/requirements-list";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup } from "@/components/ui/field";
import { ResetPass, ResetPassSchema } from "@/types/reset-password";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";

export function PasswordResetForm() {
	const form = useForm<ResetPass>({
		resolver: zodResolver(ResetPassSchema),
		defaultValues: {
			currentPassword: "",
			newPassword: "",
			confirmPassword: "",
		},
		mode: "onTouched",
	});
	const passwordValue = useWatch({
		control: form.control,
		name: "newPassword",
	});

	function onSubmit(data: ResetPass) {
		console.log(data);
	}

	return (
		<form id="account-rhf" onSubmit={form.handleSubmit(onSubmit)}>
			<FieldGroup className="mb-8 gap-8 sm:gap-6">
				<PasswordField
					rhfForm={form}
					name={"currentPassword"}
					labelText={"Current password"}
					placeholder="Enter your current password"
				></PasswordField>
				<PasswordField
					rhfForm={form}
					name={"newPassword"}
					labelText={"New password"}
					placeholder="Enter your new password"
				></PasswordField>
				<RequirementList password={passwordValue} />
				<PasswordField
					rhfForm={form}
					name={"confirmPassword"}
					labelText={"Confirm new password"}
					placeholder="Repeat your new password"
				></PasswordField>
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
