import { StyledLabel } from "@/components/styled-label";
import { Field, FieldError } from "@/components/ui/field";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from "@/components/ui/input-group";
import { ResetPass } from "@/types/reset-password";
import { CircleCheckBig, Eye, EyeClosed } from "lucide-react";
import { ComponentProps, useState } from "react";
import { Controller, UseFormReturn } from "react-hook-form";

interface PasswordFieldProps extends ComponentProps<"input"> {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	rhfForm: UseFormReturn<ResetPass, any, ResetPass>;
	name: keyof ResetPass;
	labelText: string;
}

export function PasswordField({
	name,
	rhfForm: form,
	labelText,
	...props
}: PasswordFieldProps) {
	const [isFieldToggled, setIsFieldToggled] = useState(false);

	return (
		<Controller
			control={form.control}
			name={name}
			render={({ field, fieldState }) => {
				return (
					<Field>
						<StyledLabel htmlFor={props.id || "rhf-pass"}>
							{labelText}
						</StyledLabel>
						<InputGroup>
							<InputGroupInput
								{...field}
								id={props.id || "rhf-pass"}
								placeholder={props.placeholder}
								aria-invalid={fieldState.invalid}
								type={isFieldToggled ? "text" : "password"}
							/>
							<InputGroupAddon align={"inline-end"}>
								{fieldState.isDirty &&
									!fieldState.invalid &&
									field.value && (
										<CircleCheckBig className="text-background fill-green-700" />
									)}
								<InputGroupButton
									onClick={() =>
										setIsFieldToggled(!isFieldToggled)
									}
									className="cursor-pointer"
									size={"icon-xs"}
								>
									{isFieldToggled ? <Eye /> : <EyeClosed />}
								</InputGroupButton>
							</InputGroupAddon>
						</InputGroup>
						{fieldState.invalid && (
							<FieldError errors={[fieldState.error]} />
						)}
					</Field>
				);
			}}
		></Controller>
	);
}
