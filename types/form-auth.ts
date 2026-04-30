import z from "zod";

const PASS_ERROR_PREFIX = "Password should contain";

export const AuthSignInSchema = z.object({
	email: z
		.email("Please enter a valid email address.")
		.nonempty("Email address is required."),
	password: z.string().trim().nonempty("Password is required."),
});

export const AuthSignUpSchema = z.object({
	email: z
		.email("Please enter a valid email address.")
		.nonempty("Email address is required."),
	password: z
		.string()
		.trim()
		.nonempty("Password is required.")
		.min(8, `${PASS_ERROR_PREFIX} 8 - 64 characters.`)
		.max(64, `${PASS_ERROR_PREFIX} 8 - 64 characters.`)
		.regex(
			/^[a-z]+$/,
			`${PASS_ERROR_PREFIX} at least one uppercase letter.`,
		)
		.regex(
			/^[A-Z]+$/,
			`${PASS_ERROR_PREFIX} at least one lowercase letter.`,
		)
		.regex(/^[0-9]+$/, `${PASS_ERROR_PREFIX} at least one number.`)
		.regex(
			/^[!@#$%^&*]+$/,
			`${PASS_ERROR_PREFIX} at least one special character (e.g., ! @ # $ % ^ & *).`,
		),
	tos: z.boolean(),
});

export type AuthSignIn = z.infer<typeof AuthSignInSchema>;
export type AuthSignUp = z.infer<typeof AuthSignUpSchema>;
