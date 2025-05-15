import { Skeleton } from "@/components/ui/skeleton";

const LoadingPage = () => {
	return (
		<>
			{/* Collections skeleton */}
			<div className="flex flex-col items-center justify-between my-5 h-[80vh] w-full space-y-5">
				<Skeleton className="h-[50%] w-[95%] rounded-xl flex flex-col items-center justify-evenly">
					<div className="w-[90%] space-y-10 lg:space-y-15">
						<Skeleton className="h-4 w-[75%]" />
						<Skeleton className="h-4 w-[85%]" />
						<Skeleton className="h-4 w-[100%]" />
					</div>
				</Skeleton>
				<Skeleton className="h-[30%] w-[75%] rounded-xl flex items-center justify-evenly">
					<div className="space-y-10 lg:space-y-15 ml-[32px] lg:ml-[94px] mt-[18px] lg:mt-[32px]">
						<Skeleton className="h-4 w-[250px]" />
						<Skeleton className="h-4 w-[200px]" />
						<Skeleton className="h-4 w-[100%]" />
					</div>
					<div className="space-y-10 lg:space-y-15 ml-[32px] lg:ml-[94px] mt-[18px] lg:mt-[32px]">
						<Skeleton className="h-4 w-[250px]" />
						<Skeleton className="h-4 w-[200px]" />
						<Skeleton className="h-4 w-[100%]" />
					</div>
				</Skeleton>
			</div>
		</>
	);
};

export default LoadingPage;
