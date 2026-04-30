import z from "zod";

const ALPHANUMERIC = /^[a-zA-Z][a-zA-Z'-]*$/;

export const AccountSchema = z.object({
	firstName: z
		.string("First name is required")
		.regex(ALPHANUMERIC, "Must be alphanumeric"),
	lastName: z
		.string("Last name is required")
		.regex(ALPHANUMERIC, "Must be alphanumeric"),
	email: z
		.email(
			"Email format matches the standard email format (e.g., user@example.com)",
		)
		.nonoptional("Email is required"),
	username: z.string("Username is required").regex(/^\w+$/),
});

export type Account = z.infer<typeof AccountSchema>;
