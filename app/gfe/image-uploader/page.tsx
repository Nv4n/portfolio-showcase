import ImageUploadDialog from "@/app/gfe/image-uploader/image-upload-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Flag } from "lucide-react";
import Image from "next/image";

export function ImageUploader() {
	return (
		<Card className="relative mx-auto flex w-full max-w-xs flex-col gap-6 rounded-lg border border-neutral-200 pt-32 shadow-md before:absolute before:inset-0 before:h-32 before:w-full before:bg-[url(/cover.png)] before:bg-cover before:bg-center before:content-[''] md:max-w-2xl md:pt-44 before:md:h-44 lg:max-w-3xl dark:border-neutral-900">
			<CardHeader className="relative z-1 flex justify-between">
				<Avatar className="relative -mb-20 size-20 -translate-y-1/2 border border-zinc-200 shadow-sm">
					<AvatarImage />
					<AvatarFallback className="relative">
						<Image
							src="/default-avatar.svg"
							alt="Default avatar image"
							fill
							className="h-24 w-24 object-cover"
							unoptimized
						/>
					</AvatarFallback>
				</Avatar>
				<ImageUploadDialog>
					<ImageUploadDialog.Trigger>
						<Button
							variant="outline"
							className="mt-2 rounded px-3 py-2 text-sm"
						>
							Update picture
						</Button>
					</ImageUploadDialog.Trigger>
				</ImageUploadDialog>
			</CardHeader>
			<CardContent className="flex flex-col gap-6">
				<h1 className="text-primary text-2xl font-semibold">
					Jack Smith
				</h1>
				<div className="flex flex-col items-start gap-3 text-xl md:flex-row md:items-center">
					<span className="">@kingjack</span>

					<div className="flex flex-col items-start gap-2 before:hidden before:text-neutral-400 md:flex-row md:before:mr-2 md:before:block md:before:content-['•']">
						<span>Senior Product Designer </span>
						<div className="flex gap-2">
							<span className="text-muted-foreground">at</span>
							<Image
								src={"/webflow-logo.svg"}
								alt={"Webflow logo"}
								width={24}
								height={15}
							></Image>{" "}
							<span>Webflow</span>
						</div>
					</div>

					<div className="flex items-center before:hidden before:text-neutral-400 md:before:mr-2 md:before:block md:before:content-['•']">
						<span className="text-muted-foreground">He/Him</span>
					</div>
				</div>
				<div className="flex items-center gap-4">
					<Flag
						role="img"
						aria-label="Canada Flag"
						className="text-xl"
					/>
					<span className="text-muted-foreground text-lg">
						Vancouver, Canada
					</span>
				</div>
			</CardContent>
		</Card>
	);
}
