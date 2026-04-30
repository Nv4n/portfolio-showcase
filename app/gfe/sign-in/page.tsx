"use client";

import { SignInForm } from "@/app/gfe/sign-in/sign-in-form";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function SignIn() {
	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>Log in to your account</CardTitle>
			</CardHeader>
			<CardContent>
				<SignInForm></SignInForm>
			</CardContent>
		</Card>
	);
}
