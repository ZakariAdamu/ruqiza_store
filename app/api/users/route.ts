export const dynamic = "force-dynamic";

import User from "@/app/lib/models/User";
import { connectToDB } from "@/app/lib/mongoDB";
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const GET = async () => {
	try {
		const { userId } = await auth();

		if (!userId) {
			return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
		}

		// Fetch full profile details from Clerk
		const clerkUser = await currentUser();
		if (!clerkUser) {
			return NextResponse.json({ message: "User not found in Clerk" }, { status: 404 });
		}

		await connectToDB();

		// Find or create user and update profile info to keep DB in sync
		const user = await User.findOneAndUpdate(
			{ clerkId: userId },
			{ 
				$set: { 
					email: clerkUser.emailAddresses[0].emailAddress,
					firstName: clerkUser.firstName,
					lastName: clerkUser.lastName,
				} 
			},
			{ upsert: true, new: true, setDefaultsOnInsert: true },
		);

		// Log the signed-in Clerk user ID
		console.log("[users_GET] Clerk userId:", userId);
		console.log("[users_GET] DB user:", user);

		return NextResponse.json(user, { status: 200 });
	} catch (error) {
		console.error("[users_GET]", error);
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
