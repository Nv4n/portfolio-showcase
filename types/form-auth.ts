import { PASSWORD_ZOD } from "@/types/password";
import z from "zod";

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
	password: PASSWORD_ZOD,
	tos: z
		.boolean()
		.refine((val) => val, "You must accept the terms and conditions."),
});

export type AuthSignIn = z.infer<typeof AuthSignInSchema>;
export type AuthSignUp = z.infer<typeof AuthSignUpSchema>;
