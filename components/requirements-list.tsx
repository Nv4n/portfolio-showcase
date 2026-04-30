import { CircleCheckBig } from "lucide-react";

const REQUIREMENTS = [
	{
		label: "8 - 64 characters",
		test: (val: string) => val.length >= 8 && val.length <= 64,
	},
	{
		label: "One uppercase letter",
		test: (val: string) => /[A-Z]/.test(val),
	},
	{
		label: "One lowercase letter",
		test: (val: string) => /[a-z]/.test(val),
	},
	{ label: "One number", test: (val: string) => /[0-9]/.test(val) },
	{
		label: "One special character (e.g., ! @ # $ % ^ & *)",
		test: (val: string) => /[!@#$%^&*_-]/.test(val),
	},
];
interface RequirementListProps {
	password: string;
}

export function RequirementList({ password }: RequirementListProps) {
	return (
		<ul className="flex list-none flex-col gap-2">
			{REQUIREMENTS.map((req, index) => {
				const isSatisfied = req.test(password);
				return (
					<li
						key={index}
						className="flex items-center gap-3 transition-colors duration-200"
					>
						<CircleCheckBig
							size={16}
							data-satisfied={isSatisfied}
							className="text-background fill-neutral-600 data-[satisfied=true]:fill-green-700"
						/>
						<span className="text-sm text-neutral-600">
							{req.label}
						</span>
					</li>
				);
			})}
		</ul>
	);
}
