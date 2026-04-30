import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const gfeComponents: { title: string; href: string; description: string }[] = [
	{
		title: "GFE Account Settings Section",
		href: "/gfe/account",
		description: "",
	},
	{
		title: "GFE Sign in",
		href: "/gfe/sign-in",
		description: "",
	},
	{
		title: "GFE Sign up",
		href: "/gfe/sign-up",
		description: "",
	},
	{
		title: "GFE Image uploader",
		href: "/gfe/image-uploader",
		description: "",
	},
	{
		title: "GFE Reset Password",
		href: "/gfe/reset-password",
		description: "",
	},
];

export function NavigationDropdownMenu() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>
						University and Personal Projects
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="w-96">
							{/* <ListItem href="/docs" title="Introduction">
								Re-usable components built with Tailwind CSS.
							</ListItem> */}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem className="hidden md:flex">
					<NavigationMenuTrigger>
						Great Front-end projects
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-100 gap-2 md:w-125 md:grid-cols-2 lg:w-150">
							{gfeComponents.map((component) => (
								<ListItem
									key={component.title}
									title={component.title}
									href={component.href}
								>
									{component.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

function ListItem({
	title,
	children,
	href,
	...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
	return (
		<li {...props}>
			<NavigationMenuLink asChild>
				<Link href={href}>
					<div className="flex flex-col gap-1 text-sm">
						<div className="leading-none font-medium">{title}</div>
						<div className="line-clamp-2 text-muted-foreground">
							{children}
						</div>
					</div>
				</Link>
			</NavigationMenuLink>
		</li>
	);
}
