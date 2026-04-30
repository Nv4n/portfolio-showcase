import { PASSWORD_ZOD } from "@/types/password";
import z from "zod";

// 8 - 64 characters
// At least one uppercase letter
// At least one lowercase letter
// At least one number
// At least one special character (e.g., ! @ # $ % ^ & *)

export const ResetPassSchema = z
	.object({
		currentPassword: z
			.string()
			.trim()
			.nonempty("Current password is required."),
		newPassword: PASSWORD_ZOD,
		confirmPassword: z
			.string()
			.trim()
			.nonempty("Confirm password is required."),
	})
	.refine((data) => data.newPassword === data.confirmPassword, {
		message: "Passwords don't match",
		path: ["confirmPassword"],
	});

export type ResetPass = z.infer<typeof ResetPassSchema>;
