/** @type {import('next').NextConfig} */

import withBundleAnalyzer from "@next/bundle-analyzer";

const withBundle = withBundleAnalyzer({
	enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "res.cloudinary.com",
			},
		],
	},
};

export default withBundle(nextConfig);
