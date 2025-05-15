import { Skeleton } from "@/components/ui/skeleton";

const LoadingPage = () => {
	return (
		<>
			{/* Product details skeleton */}
			<div className="flex items-center justify-center flex-col md:flex-row md:items-center md:justify-between zmd:gap-[12px] my-5 h-[80vh] w-full md:w-[75vw] md:mx-auto space-y-5">
				<Skeleton className="h-[50%] md:h-[80%] w-[90%] md:w-[40%] rounded-xl flex flex-col items-center justify-evenly">
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
				<Skeleton className="h-[50%] md:h-full w-[90%] md:w-[45%] rounded-xl flex flex-col items-center justify-evenly">
					<div className="w-[90%] space-y-10 lg:space-y-15">
						<Skeleton className="h-4 w-[75%]" />
						<Skeleton className="h-4 w-[85%]" />
						<Skeleton className="h-4 w-[100%]" />
					</div>
					<div className="w-[90%] space-y-10 lg:space-y-15">
						<Skeleton className="h-4 w-[75%]" />
						<Skeleton className="h-4 w-[85%]" />
						<Skeleton className="h-4 w-[100%]" />
					</div>
				</Skeleton>
			</div>
		</>
	);
};

export default LoadingPage;
