"use client";
import Image from "next/image";
import Link from "next/link";
// import HeartFavorite from "./HeartFavorite";
import HeartFavoriteWrapper from "./HeartFavoriteWrapper";

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps) => {
	return (
		<Link
			href={`/products/${product._id}`}
			className="w-[220px] flex flex-col gap-2"
			prefetch={true}
		>
			<Image
				src={product.media[0]}
				alt="product"
				width={250}
				height={300}
				className="h-[250px] rounded-lg object-cover"
			/>
			<div>
				<p className="text-base-bold">{product.title}</p>
				<p className="text-small">{product.category}</p>
			</div>
			<div className="flex justify-between items-center">
				<p className="text-body-bold">${product.price}</p>
				{/* <HeartFavorite product={product} updateSignedInUser={updateSignedInUser} /> */}
				<HeartFavoriteWrapper
					product={product}
					updateSignedInUser={updateSignedInUser}
				/>
			</div>
		</Link>
	);
};

export default ProductCard;
