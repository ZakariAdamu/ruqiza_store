import { Gem, Heart, Sparkles } from "lucide-react";
import StoreInfoPage from "../../components/StoreInfoPage";

const values = [
	{
		icon: Gem,
		title: "Considered quality",
		text: "We look for pieces with the details, finish, and staying power to earn a place in your wardrobe.",
	},
	{
		icon: Sparkles,
		title: "Easy individuality",
		text: "Our collections are designed to mix naturally, so your style can lead every outfit.",
	},
	{
		icon: Heart,
		title: "A human touch",
		text: "From the first click to the unboxing, thoughtful service is part of every Ruqiza order.",
	},
];

export default function AboutPage() {
	return (
		<StoreInfoPage
			eyebrow="Our point of view"
			title="Wear what feels like you."
			intro="Ruqiza Signatures is a considered edit of fashion and lifestyle pieces for people who know that the best details are the ones that feel effortless."
		>
			<div className="grid gap-5 md:grid-cols-3">
				{values.map(({ icon: Icon, title, text }) => (
					<article
						key={title}
						className="border border-slate-200 bg-white p-6 sm:p-8"
					>
						<Icon className="h-7 w-7 text-[#b27c20]" strokeWidth={1.5} />
						<h2 className="mt-8 text-xl font-semibold text-[#183c3b]">
							{title}
						</h2>
						<p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
					</article>
				))}
			</div>
			<div className="mt-16 grid gap-8 border-y border-slate-200 py-12 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
				<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b27c20]">
					The Ruqiza signature
				</p>
				<p className="max-w-2xl text-2xl leading-snug text-[#183c3b] sm:text-3xl">
					A little unexpected, always wearable, and chosen with the belief that
					getting dressed should be one of the good parts of your day.
				</p>
			</div>
		</StoreInfoPage>
	);
}
