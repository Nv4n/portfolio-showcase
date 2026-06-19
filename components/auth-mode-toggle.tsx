"use client";

import { useOptimistic } from "react";
import { Switch } from "@/components/ui/switch";
import { setPreviewMode } from "@/lib/actions/set-auth-mode";
import { StyledLabel } from "@/components/form/styled-label";

export function AuthModeToggle({ mode }: { mode: "demo" | "auth" }) {
	const [optimisticMode, setOptimisticMode] = useOptimistic(mode);

	return (
		<form
			action={async (formData) => {
				const next = formData.get("mode") as "demo" | "auth";
				console.log(next);
				setOptimisticMode(next);
				await setPreviewMode(formData);
			}}
		>
			<input
				type="hidden"
				name="mode"
				value={optimisticMode === "demo" ? "auth" : "demo"}
			/>

			<div className="flex items-center space-x-2">
				<Switch
					id="switch-mode"
					type="submit"
					checked={optimisticMode === "auth"}
				/>
				<StyledLabel htmlFor="switch-mode">
					{" "}
					{optimisticMode === "demo" ? "Demo" : "Authenticated"}
				</StyledLabel>
			</div>
		</form>
	);
}
