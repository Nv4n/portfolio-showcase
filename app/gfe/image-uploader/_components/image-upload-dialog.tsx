"use client";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { createContext, PropsWithChildren, useContext } from "react";

const ImageUploadCtx = createContext<boolean | null>(null);

function ImageUploadDialog({ children }: PropsWithChildren) {
	return (
		<ImageUploadCtx.Provider value={true}>
			<Dialog>
				{children}
				<DialogContent>
					<DialogHeader>
						<DialogTitle className="text-xl font-medium">
							Upload image(s)
						</DialogTitle>
						<DialogDescription>
							<span className="text-muted-foreground text-base">
								You may upload up to 5 images
							</span>
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</ImageUploadCtx.Provider>
	);
}

function Trigger({ children }: PropsWithChildren) {
	const context = useContext(ImageUploadCtx);

	if (!context) {
		throw new Error(
			"ImageUploadDialog.Trigger must be used within an ImageUploadDialog component.",
		);
	}

	return <DialogTrigger asChild>{children}</DialogTrigger>;
}

ImageUploadDialog.Trigger = Trigger;

export default ImageUploadDialog;
