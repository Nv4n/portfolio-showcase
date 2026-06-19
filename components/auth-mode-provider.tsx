import { cookies } from "next/headers";
import { AuthModeToggle } from "@/components/auth-mode-toggle";

export async function AuthModeProvider() {
	const cookieStore = await cookies();
	const cookieValue = cookieStore.get("app-mode")?.value || "demo";

	const mode: "demo" | "auth" = cookieValue === "demo" ? "demo" : "auth";

	return <AuthModeToggle mode={mode} />;
}
