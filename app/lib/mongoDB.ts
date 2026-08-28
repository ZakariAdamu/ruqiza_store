import mongoose from "mongoose";

/**
 * In serverless environments, we cache the connection promise to avoid
 * creating multiple connection pools during high traffic or hot reloads.
 */
let cachedPromise: Promise<typeof mongoose> | null = null;

export const connectToDB = async (): Promise<void> => {
	mongoose.set("strictQuery", true);

	// 1 = connected
	if (mongoose.connection.readyState === 1) {
		return;
	}

	if (!cachedPromise) {
		const mongoURI = process.env.MONGODB_URI;
		if (!mongoURI) {
			throw new Error(
				"MongoDB connection URL is not defined in environment variables",
			);
		}

		cachedPromise = mongoose.connect(mongoURI, {
			dbName: "Ruqiza_store",
			serverSelectionTimeoutMS: 5000, // Time out faster if server is unreachable
			connectTimeoutMS: 10000,        // Give it 10s to establish the socket
		}).then((m) => {
			console.log("🟢 MongoDB connection established successfully 🚀.");
			return m;
		});
	}

	try {
		await cachedPromise;
	} catch (err) {
		cachedPromise = null; // Reset promise so we can retry connection
		console.error("Error connecting to MongoDB:", err);
		throw new Error("MongoDB connection failed");
	}
};
