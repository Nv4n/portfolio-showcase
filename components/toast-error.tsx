interface ToastErrorProps {
	error: string;
}

export function ToastError({ error }: ToastErrorProps) {
	return (
		<div className="flex items-center gap-3">
			<div className="flex items-center bg-background  rounded-full px-2.5 py-0.5 shadow">
				<span className="font-medium text-sm text-center text-red-800">
					Error
				</span>
			</div>
			<span className="font-medium text-red-600">{error}</span>
		</div>
	);
}
