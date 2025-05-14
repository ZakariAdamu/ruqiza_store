import Image from "next/image";
import Collections from "../components/Collections";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";

export default async function Home() {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	// Simulate a delay

	return (
		<>
			<Image
				src="/banner.png"
				alt="banner"
				width={2000}
				height={1000}
				className="w-screen"
			/>
			<Collections />
			<ProductList />
			<Footer />
		</>
	);
}
