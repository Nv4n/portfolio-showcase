"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function setPreviewMode(formData: FormData) {
	const next = formData.get("mode") === "auth" ? "auth" : "demo";
	const cookieStore = await cookies();
	cookieStore.set("app-mode", next, { path: "/", maxAge: 60 * 60 * 24 });
	redirect("/");
}
