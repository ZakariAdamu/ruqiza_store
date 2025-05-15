import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
	return (
		<div className="flex flex-col space-y-3">
			<Skeleton className="h-[625px] w-screen rounded-xl flex items-start justify-center">
				<div className="space-y-10 lg:space-y-20 ml-[32px] lg:ml-[94px] mt-[18px] lg:mt-[32px]">
					<Skeleton className="h-4 w-[500px]" />
					<Skeleton className="h-4 w-[450px]" />
					<Skeleton className="h-4 w-[600px]" />
				</div>
			</Skeleton>
		</div>
	);
};

export default Loading;
