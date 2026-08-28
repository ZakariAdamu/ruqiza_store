import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import Navbar from "../components/Navbar";
import ToasterProvider from "../lib/providers/ToasterProvider";
import ChatBot from "../components/ChatBot";

export const metadata: Metadata = {
	title: "Ruqiza Store",
	description:
		"Shop all your needs at Ruqiza Ecommerce Store and get the best deals.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<ClerkProvider>
				<html lang="en">
					<body>
						<ToasterProvider />
						<Navbar />
						<ChatBot />
						{children}
					</body>
				</html>
			</ClerkProvider>
		</>
	);
}
