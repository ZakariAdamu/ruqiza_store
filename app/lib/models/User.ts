import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		clerkId: {
			type: String,
			unique: true,
			index: true,
		},
		email: String,
		firstName: String,
		lastName: String,
		wishlist: {
			type: [String],
			default: [],
		},
	},
	{ timestamps: true },
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
