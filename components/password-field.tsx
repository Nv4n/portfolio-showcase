"use client";

import { StyledLabel } from "@/components/styled-label";
import { Field, FieldError } from "@/components/ui/field";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from "@/components/ui/input-group";
import { CircleCheckBig, Eye, EyeClosed } from "lucide-react";
import { ComponentProps, useState } from "react";
import { Controller, FieldValues, Path, UseFormReturn } from "react-hook-form";

interface PasswordInputProps extends ComponentProps<"input"> {
	labelText: string;
}

interface PasswordFieldProps<T extends FieldValues> extends PasswordInputProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	rhfForm: UseFormReturn<T>;
	name: Path<T>;
}

export function PasswordField<T extends FieldValues>({
	name,
	rhfForm: form,
	labelText,
	...props
}: PasswordFieldProps<T>) {
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
								value={field.value ?? ""}
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
