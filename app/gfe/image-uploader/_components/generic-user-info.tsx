import { Flag } from "lucide-react";
import Image from "next/image";

export function GenericUserInfo() {
	return (
		<>
			<h1 className="text-primary text-2xl font-semibold">Jack Smith</h1>
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
				<Flag role="img" aria-label="Canada Flag" className="text-xl" />
				<span className="text-muted-foreground text-lg">
					Vancouver, Canada
				</span>
			</div>
		</>
	);
}
