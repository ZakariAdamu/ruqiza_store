"use client";

import dynamic from "next/dynamic";

const DynamicHeartFavorite = dynamic(() => import("./HeartFavorite"), {
	ssr: false,
});

export default function HeartFavoriteWrapper({
	product,
	updateSignedInUser,
}: {
	product: ProductType;
	updateSignedInUser?: (updatedUser: UserType) => void;
}) {
	return (
		<DynamicHeartFavorite
			product={product}
			updateSignedInUser={updateSignedInUser}
		/>
	);
}
