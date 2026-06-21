import z from "zod";

export const NotificationFormSchema = z.object({
	channels: z
		.array(
			z.object({
				id: z.string(),
				label: z.string(),
				push: z.boolean(),
				email: z.boolean(),
				sms: z.boolean(),
			}),
		)
		.min(1, "Add at least one notification setting"),
});

export type NotificationForm = z.infer<typeof NotificationFormSchema>;
