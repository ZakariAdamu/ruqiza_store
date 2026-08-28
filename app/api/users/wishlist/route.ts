import User from "@/app/lib/models/User";
import { connectToDB } from "@/app/lib/mongoDB";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
	try {
		const { userId, sessionId } = await auth();
		console.log("[wishlist_POST] auth context", {
			hasAuthHeader: Boolean(req.headers.get("authorization")),
			hasSessionCookie: Boolean(req.cookies.get("__session")),
			hasClerkDbJwt: Boolean(req.cookies.get("__clerk_db_jwt")),
			userId,
			sessionId,
		});

		if (!userId) {
			return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
		}

		await connectToDB();

		// We can combine the find and the check to ensure we have the latest data
		const user = await User.findOne({ clerkId: userId }).select("wishlist");

		if (!user) {
			return NextResponse.json({ message: "User not found" }, { status: 404 });
		}

		const { productId } = await req.json();

		if (!productId) {
			return new NextResponse("Product Id required", { status: 400 });
		}

		const isLiked = user.wishlist.includes(productId);

		let updatedUser;
		if (isLiked) {
			// Atomic remove
			updatedUser = await User.findOneAndUpdate(
				{ clerkId: userId },
				{ $pull: { wishlist: productId } },
				{ new: true },
			);
		} else {
			// Atomic add (prevents duplicates)
			updatedUser = await User.findOneAndUpdate(
				{ clerkId: userId },
				{ $addToSet: { wishlist: productId } },
				{ new: true },
			);
		}

		return NextResponse.json(updatedUser, { status: 200 });
	} catch (error) {
		console.log("[wishlist_POST]", error);
		const message =
			error instanceof Error ? error.message : "Database connection error";
		if (message.includes("MongoDB connection failed")) {
			return NextResponse.json(
				{ message: "Database unavailable. Please try again later." },
				{ status: 503 },
			);
		}
		return new NextResponse("Internal Server Error", { status: 500 });
	}
};
