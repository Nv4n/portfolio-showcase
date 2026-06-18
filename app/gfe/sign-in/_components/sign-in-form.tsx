import { PasswordField } from "@/components/form/password-field";
import { Button } from "@/components/ui/button";
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { AuthSignInSchema, type AuthSignIn } from "@/types/form-auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

export function SignInForm() {
	const form = useForm<AuthSignIn>({
		resolver: zodResolver(AuthSignInSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	function onSubmit(data: AuthSignIn) {
		// const fetch
		console.log(data);
	}

	return (
		<form onSubmit={form.handleSubmit(onSubmit)}>
			<FieldGroup className="mb-6 gap-6">
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
			</FieldGroup>
			<Field>
				<Button
					disabled={
						!form.formState.isDirty || !form.formState.isValid
							? true
							: false
					}
					type="submit"
					className="text-background ml-auto w-44 cursor-pointer rounded bg-indigo-700 px-3 py-5 font-medium hover:bg-indigo-800 focus:bg-indigo-800 disabled:bg-neutral-100 disabled:text-neutral-400"
				>
					Submit
				</Button>
			</Field>
		</form>
	);
}
