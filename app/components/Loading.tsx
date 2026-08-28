import { Skeleton } from "@/components/ui/skeleton";

const ProductCardSkeleton = () => (
	<div className="w-full min-w-0">
		<Skeleton className="aspect-[4/5] w-full rounded-lg" />
		<div className="mt-3 space-y-2">
			<Skeleton className="h-4 w-4/5" />
			<Skeleton className="h-3 w-2/5" />
			<div className="flex items-center justify-between pt-1">
				<Skeleton className="h-4 w-1/4" />
				<Skeleton className="h-5 w-5 rounded-full" />
			</div>
		</div>
	</div>
);

const ProductGridSkeleton = ({ count = 8 }: { count?: number }) => (
	<div className="grid w-full grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-8">
		{Array.from({ length: count }, (_, index) => (
			<ProductCardSkeleton key={index} />
		))}
	</div>
);

export const HomeSkeleton = () => (
	<main className="space-y-12 bg-white pb-16" aria-label="Loading home page">
		<Skeleton className="aspect-[2/1] w-full rounded-none sm:aspect-[2.5/1]" />
		<section className="mx-auto max-w-6xl space-y-6 px-5 sm:px-10">
			<Skeleton className="mx-auto h-8 w-40" />
			<div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8">
				{Array.from({ length: 3 }, (_, index) => (
					<Skeleton key={index} className="aspect-[1.6/1] rounded-lg" />
				))}
			</div>
		</section>
		<section className="mx-auto max-w-6xl space-y-6 px-5 sm:px-10">
			<Skeleton className="mx-auto h-8 w-32" />
			<ProductGridSkeleton count={8} />
		</section>
	</main>
);

export const CollectionSkeleton = () => (
	<main className="mx-auto max-w-6xl space-y-8 px-5 py-8 sm:px-10" aria-label="Loading collection">
		<Skeleton className="aspect-[2.4/1] w-full rounded-xl" />
		<div className="mx-auto max-w-2xl space-y-3 text-center">
			<Skeleton className="mx-auto h-8 w-48" />
			<Skeleton className="mx-auto h-4 w-full" />
			<Skeleton className="mx-auto h-4 w-4/5" />
		</div>
		<ProductGridSkeleton count={8} />
	</main>
);

export const WishlistSkeleton = () => (
	<main className="mx-auto max-w-6xl space-y-8 px-5 py-8 sm:px-10" aria-label="Loading wishlist">
		<Skeleton className="h-8 w-48" />
		<ProductGridSkeleton count={4} />
	</main>
);

const Loading = () => {
	return (
		<div className="grid w-full gap-8 md:grid-cols-[minmax(0,1fr)_minmax(320px,0.85fr)]" aria-label="Loading product">
			<div className="space-y-3">
				<Skeleton className="aspect-square w-full rounded-xl" />
				<div className="flex gap-2 overflow-hidden">
					{Array.from({ length: 4 }, (_, index) => (
						<Skeleton key={index} className="h-16 w-16 shrink-0 rounded-lg" />
					))}
				</div>
			</div>
			<div className="space-y-6 py-2">
				<Skeleton className="h-8 w-4/5" />
				<Skeleton className="h-5 w-1/3" />
				<Skeleton className="h-8 w-1/4" />
				<div className="space-y-3 pt-4">
					<Skeleton className="h-4 w-24" />
					<Skeleton className="h-16 w-full" />
				</div>
				<Skeleton className="h-12 w-full rounded-lg" />
			</div>
		</div>
	);
};

export default Loading;
