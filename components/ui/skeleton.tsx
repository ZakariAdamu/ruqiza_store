import { cn } from "@/lib/utils";

function Skeleton({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			aria-hidden="true"
			className={cn(
				"relative isolate overflow-hidden rounded-md bg-slate-200/80 before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent before:animate-[skeleton-shimmer_1.8s_ease-in-out_infinite]",
				className,
			)}
			{...props}
		/>
	);
}

export { Skeleton };
