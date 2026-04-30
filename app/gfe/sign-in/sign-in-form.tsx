import { PasswordField } from "@/components/password-field";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
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
	const password = form.watch("password");

	function onSubmit(data: AuthSignIn) {
		// const fetch
		console.log(data);
	}

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
						</Field>
					)}
				></Controller>
				<PasswordField
					rhfForm={form}
					name="password"
					labelText="Password"
				></PasswordField>
			</FieldGroup>
		</form>
	);
}
