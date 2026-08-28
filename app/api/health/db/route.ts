import { connectToDB } from "@/app/lib/mongoDB";
import { NextResponse } from "next/server";

export const GET = async () => {
	try {
		await connectToDB();
		return NextResponse.json({ ok: true }, { status: 200 });
	} catch (error) {
		const message =
			error instanceof Error ? error.message : "Database connection error";
		return NextResponse.json({ ok: false, message }, { status: 503 });
	}
};
