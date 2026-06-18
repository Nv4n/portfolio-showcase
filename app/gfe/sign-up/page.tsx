import { SignUpForm } from "@/app/gfe/sign-up/_components/sign-up-form";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function SignUp() {
	return (
		<div className="bg-background w-full min-h-full px-24 py-16 gap-8 flex justify-center items-center">
			<Card className="w-full max-w-96">
				<CardHeader>
					<CardTitle className="font-semibold text-3xl">
						Create your account
					</CardTitle>
				</CardHeader>
				<CardContent>
					<SignUpForm></SignUpForm>
				</CardContent>
				<CardFooter>
					<span className="font-medium text-sm text-primary">
						Already have an account?{" "}
						<Link href={"/gfe/sign-in"} className="text-indigo-700">
							Sign in
						</Link>
					</span>
				</CardFooter>
			</Card>
			<div className="relative flex self-stretch grow max-w-[500px] -scale-x-100 rounded overflow-hidden">
				<AspectRatio ratio={1 / 1}>
					<Image
						loading="lazy"
						src={"/assets/sign-up.jpg"}
						alt={"Sign up image"}
						fill
						className="object-cover"
					/>
				</AspectRatio>
			</div>
		</div>
	);
}
