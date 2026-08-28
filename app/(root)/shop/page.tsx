import ProductList from "../../components/ProductList";
import Footer from "../../components/Footer";

export default function ShopPage() {
	return (
		<main className="bg-[#f6f4ef] pt-8">
			<section className="mx-auto max-w-6xl px-6 py-10 sm:px-10 lg:px-16">
				<p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b27c20]">
					The edit
				</p>
				<h1 className="mt-3 max-w-2xl text-4xl font-semibold leading-tight text-[#183c3b] sm:text-6xl">
					Pieces that make an entrance.
				</h1>
				<p className="mt-5 max-w-xl leading-7 text-slate-600">
					Browse Ruqiza Signatures for thoughtfully selected fashion and
					everyday finishing touches, made to feel distinctly yours.
				</p>
			</section>
			<ProductList />
			<Footer />
		</main>
	);
}
