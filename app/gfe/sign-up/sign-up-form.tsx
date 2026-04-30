"use client";

import { PasswordField } from "@/components/password-field";
import { RequirementList } from "@/components/requirements-list";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
	AuthSignUp,
	AuthSignUpSchema,
	type AuthSignIn,
} from "@/types/form-auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

export function SignUpForm() {
	const form = useForm<AuthSignUp>({
		resolver: zodResolver(AuthSignUpSchema),
		defaultValues: {
			email: "",
			password: "",
			tos: false,
		},
	});

	function onSubmit(data: AuthSignIn) {
		// const fetch
		console.log(data);
	}

	const passwordValue = form.watch("password");

	return (
		<form onSubmit={form.handleSubmit(onSubmit)}>
			<FieldGroup>
				<Controller
					name="email"
					control={form.control}
					render={({ field, fieldState }) => (
						<Field>
							<FieldLabel htmlFor="email">Email</FieldLabel>
							<Input
								{...field}
								id="email"
								aria-invalid={fieldState.invalid}
								placeholder="john@example.com"
								autoComplete="email"
							></Input>
							{fieldState.invalid && (
								<FieldError errors={[fieldState.error]} />
							)}
						</Field>
					)}
				></Controller>
				<PasswordField
					rhfForm={form}
					name="password"
					labelText="Password"
					placeholder="**********"
				></PasswordField>
				<RequirementList password={passwordValue} />
				<Controller
					name="tos"
					control={form.control}
					render={({ field, fieldState }) => (
						<FieldGroup data-slot="checkbox-group">
							<Field orientation="horizontal">
								{/* //TODO CHANGE Checkbox fill color  */}
								<Checkbox
									className="accent-indigo-700"
									id="form-rhf-checkbox-responses"
									name={field.name}
									checked={field.value}
									onCheckedChange={field.onChange}
									aria-invalid={fieldState.invalid}
								/>
								<FieldLabel
									htmlFor="form-rhf-checkbox-responses"
									className="font-normal"
								>
									I agree with CodePulse{" "}
									<span className="text-indigo-700">
										Terms of Service
									</span>
								</FieldLabel>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						</FieldGroup>
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
					Create account
				</Button>
			</Field>
		</form>
	);
}
