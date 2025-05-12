export const dynamic = "force-dynamic";

import ProductCard from "@/app/components/ProductCard";
import { getCollectionDetails } from "@/app/lib/actions/actions";
import Image from "next/image";

const CollectionDetails = async (
    props: {
        params: Promise<{ collectionId: string }>;
    }
) => {
    const params = await props.params;
    const collectionDetails = await getCollectionDetails(params.collectionId);

    // console.log(collectionDetails);

    return (
		<div className="px-10 py-5  flex flex-col items-center gap-8">
			<Image
				src={collectionDetails.image}
				width={1500}
				height={1000}
				alt="collection"
				className="w-full h-[400px] object-cover rounded-xl"
			/>
			<p className="text-heading3-bold text-grey-2">
				{collectionDetails.title}
			</p>
			<p className="text-body-medium text-grey-2 text-center max-w-[900px]">
				{collectionDetails.description}
			</p>
			<div className="flex flex-wrap gap-16 mx-auto">
				{collectionDetails.products.map((product: ProductType) => (
					<ProductCard key={product._id} product={product} />
				))}
			</div>
		</div>
	);
};

export default CollectionDetails;
