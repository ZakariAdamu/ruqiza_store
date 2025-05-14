import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

const LoadingPage = () => {
	return (
		<>
			<div>
				<div>
					{/* Hero image skeleton */}
					<div className="flex flex-col space-y-3">
						<Skeleton className="h-[625px] w-screen rounded-xl flex items-start justify-start">
							<div className="space-y-10 lg:space-y-20 ml-[32px] lg:ml-[94px] mt-[18px] lg:mt-[32px]">
								<Skeleton className="h-4 w-[100%]" />
								<Skeleton className="h-4 w-[75%]" />
								<Skeleton className="h-4 w-[50%]" />
							</div>
						</Skeleton>
					</div>
					{/* Collections skeleton */}
					<div></div>
					{/* Product list skeleton */}
					<div></div>
					{/* Footer skeleton */}
					<div></div>
				</div>
			</div>
		</>
	);
};

export default LoadingPage;
