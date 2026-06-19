import { auth } from "@/lib/auth/server";
import { NextRequest, NextResponse } from "next/server";

const authMiddleware = auth.middleware({
	// Redirects unauthenticated users to sign-in page
	loginUrl: "/gfe/sign-in",
});

export default function proxy(request: NextRequest) {
	if (request.headers.has("Next-Action")) return;

	const mode = request.cookies.get("app-mode")?.value;

	if (mode === "demo") {
		return NextResponse.next();
	}

	return authMiddleware(request);
}

export const config = {
	matcher: [
		"/",
		"/gfe/account/:path*",
		"/gfe/billing-history/:path*",
		"/gfe/billing-information/:path*",
		"/gfe/image-uploader/:path*",
	],
};
