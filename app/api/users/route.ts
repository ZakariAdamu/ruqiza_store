export const dynamic = "force-dynamic";

import User from "@/app/lib/models/User";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const GET = async () => {
	try {
		const { userId } = auth();

		if (!userId) {
			return new NextResponse("Unauthorized, please sign in", { status: 401 });
		}

		let user = await User.findOne({ clerkId: userId });

		// create a new user on first sign-in to the app
		if (!user) {
			user = await User.create({ clerkId: userId });

			await user.save();
		}

		return NextResponse.json(user, { status: 200 });
	} catch (error) {
		console.log("[users_GET]", error);
		return new NextResponse("Internal Server Error", { status: 500 });
	}
};
