"use client";

import { SignInForm } from "@/app/gfe/sign-in/_components/sign-in-form";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function SignIn() {
	return (
		<div className="bg-background w-full min-h-full xl:px-24 lg:px-8 px-3 py-12 gap-8 flex justify-center items-center">
			<Card className="w-full max-w-96">
				<CardHeader>
					<CardTitle className="font-semibold text-3xl">
						Log in to your account
					</CardTitle>
				</CardHeader>
				<CardContent>
					<SignInForm></SignInForm>
				</CardContent>
				<CardFooter>
					<span className="font-medium text-sm text-primary">
						Don't have an account?{" "}
						<Link href={"/gfe/sign-up"} className="text-indigo-700">
							Sign up
						</Link>
					</span>
				</CardFooter>
			</Card>
			<div className="relative hidden xl:flex max-w-150 self-stretch grow rounded overflow-hidden">
				<AspectRatio ratio={1 / 1}>
					<Image
						loading="lazy"
						src={"/assets/sign-in.jpg"}
						sizes="(min-width: 1024px) 592px"
						fill
						alt={"Sign up image"}
						className="object-cover"
					/>
				</AspectRatio>
			</div>
		</div>
	);
}
