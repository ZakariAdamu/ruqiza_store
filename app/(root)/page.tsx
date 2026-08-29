import Collections from "../components/Collections";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import HeroCarousel from "../components/HeroCarousel";

export default async function Home() {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	// Simulate a delay

	return (
		<>
			<HeroCarousel />
			<Collections />
			<ProductList />
			<Footer />
		</>
	);
}
