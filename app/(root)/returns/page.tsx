import { CheckCircle2, Package, RefreshCw } from "lucide-react";
import StoreInfoPage from "../../components/StoreInfoPage";

const steps = [
	{
		icon: Package,
		title: "Pack it up",
		text: "Keep the piece unworn, with its original tags and packaging.",
	},
	{
		icon: RefreshCw,
		title: "Send your request",
		text: "Contact us within 14 days of delivery with your order number.",
	},
	{
		icon: CheckCircle2,
		title: "We make it right",
		text: "Once approved, we will share the return instructions and next steps.",
	},
];

export default function ReturnsPage() {
	return (
		<StoreInfoPage
			eyebrow="A little reassurance"
			title="Not quite right? We can fix that."
			intro="We want every Ruqiza piece to feel right at home with you. Our straightforward return process gives you room to decide."
		>
			<div className="grid gap-5 md:grid-cols-3">
				{steps.map(({ icon: Icon, title, text }, index) => (
					<article
						key={title}
						className="border border-slate-200 bg-white p-6 sm:p-8"
					>
						<div className="flex items-center justify-between">
							<Icon className="h-7 w-7 text-[#b27c20]" strokeWidth={1.5} />
							<span className="text-sm font-semibold text-slate-400">
								0{index + 1}
							</span>
						</div>
						<h2 className="mt-8 text-xl font-semibold text-[#183c3b]">
							{title}
						</h2>
						<p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
					</article>
				))}
			</div>
			<div className="mt-12 grid gap-8 md:grid-cols-2">
				<div>
					<h2 className="text-2xl font-semibold text-[#183c3b]">
						A few essentials
					</h2>
					<ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
						<li>Items must be in original, resalable condition.</li>
						<li>Final sale items and used items are not eligible.</li>
						<li>
							Return shipping costs are the customer&apos;s responsibility
							unless the item arrived damaged or incorrect.
						</li>
					</ul>
				</div>
				<div className="bg-[#e8dfcf] p-6 sm:p-8">
					<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b27c20]">
						Need a hand?
					</p>
					<p className="mt-3 leading-7 text-slate-600">
						Send us a note with a photo if your order arrived damaged. We will
						take care of the next step.
					</p>
				</div>
			</div>
		</StoreInfoPage>
	);
}
