"use client";

import { GenericUserInfo } from "@/app/gfe/image-uploader/generic-user-info";
import ImageUploadDialog from "@/app/gfe/image-uploader/image-upload-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export default function ImageUploader() {
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
				<GenericUserInfo />
			</CardContent>
		</Card>
	);
}
