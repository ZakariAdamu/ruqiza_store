import Footer from "./Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface StoreInfoPageProps {
	eyebrow: string;
	title: string;
	intro: string;
	children: React.ReactNode;
}

const StoreInfoPage = ({
	eyebrow,
	title,
	intro,
	children,
}: StoreInfoPageProps) => {
	return (
		<>
			<main className="min-h-[calc(100vh-80px)] bg-[#f6f4ef] text-slate-900">
				<section className="relative overflow-hidden border-b border-slate-200 bg-[#183c3b] px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-24">
					<div className="absolute -right-24 -top-32 h-80 w-80 rounded-full border-[36px] border-[#d9a441]/30" />
					<div className="relative mx-auto max-w-6xl">
						<p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#e7bd66]">
							{eyebrow}
						</p>
						<h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
							{title}
						</h1>
						<p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
							{intro}
						</p>
					</div>
				</section>
				<div className="mx-auto max-w-6xl px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
					{children}
					<div className="mt-16 flex flex-col gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
						<p className="text-sm text-slate-600">
							Find your next signature piece.
						</p>
						<Link
							href="/shop"
							className="inline-flex items-center gap-2 text-sm font-semibold text-[#183c3b] transition-colors hover:text-[#b27c20]"
						>
							Explore the collection <ArrowRight className="h-4 w-4" />
						</Link>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default StoreInfoPage;
