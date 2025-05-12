import Link from "next/link";
import { getCollections } from "../lib/actions/actions";
import Image from "next/image";

const Collections = async () => {
	const collections = await getCollections();
	return (
		<div className="flex flex-col items-center gap-10 py-8 px-5 mt-[34px]">
			<p className="text-heading1-bold">Collections</p>
			{!collections || collections.length === 0 ? (
				<p className="text-body-bold">No collections found</p>
			) : (
				<div
					// className="flex items-center justify-center gap-8"
					className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-auto gap-16 mx-auto"
				>
					{collections.map((collection: CollectionType) => (
						<Link
							href={`/collections/${collection._id}`}
							key={collection._id}
							prefetch={true}
						>
							<Image
								src={collection.image}
								alt={collection.title}
								width={350}
								height={200}
								className="rounded-lg cursor-pointer"
							/>
						</Link>
					))}
				</div>
			)}
		</div>
	);
};

export default Collections;
