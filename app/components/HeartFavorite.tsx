"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

interface HeartFavoriteProps {
	product: ProductType;
	updateSignedInUser?: (updatedUser: UserType) => void;
}

const HeartFavorite = ({ product, updateSignedInUser }: HeartFavoriteProps) => {
	const { user } = useUser();
	const { getToken } = useAuth();
	const router = useRouter();
	const [isLiked, setIsLiked] = useState(false);

	// Fetch user's wishlist data
	const fetchUserWishlist = useCallback(async () => {
		try {
			const token = await getToken();
			const res = await fetch("/api/users", {
				credentials: "include",
				headers: token ? { Authorization: `Bearer ${token}` } : undefined,
			});
			if (!res.ok) throw new Error("Failed to fetch user data");

			const data = await res.json();
			setIsLiked(data.wishlist.includes(product._id));
		} catch (error) {
			console.error("[users_GET] Error fetching user data:", error);
		}
	}, [product._id]);

	useEffect(() => {
		if (user) {
			fetchUserWishlist();
		}
	}, [user, fetchUserWishlist]);

	// Handle adding/removing item from wishlist
	const handleLike = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		e.preventDefault();

		if (!user) {
			router.replace("/sign-in");
			return;
		}

		try {
			const token = await getToken();
			const res = await fetch("/api/users/wishlist", {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
					...(token ? { Authorization: `Bearer ${token}` } : {}),
				},
				body: JSON.stringify({ productId: product._id }),
			});

			if (!res.ok) throw new Error("Failed to update wishlist");

			const updatedUser = await res.json();
			setIsLiked(updatedUser.wishlist.includes(product._id));

			updateSignedInUser?.(updatedUser); // Use nullish coalescing for safety
		} catch (error) {
			console.error("[wishlist_POST] Error updating wishlist:", error);
		}
	};

	return (
		<button onClick={handleLike}>
			<Heart fill={isLiked ? "red" : "white"} />
		</button>
	);
};

export default HeartFavorite;
