import { Clock3, Globe2, Truck } from "lucide-react";
import StoreInfoPage from "../../components/StoreInfoPage";

const deliveryOptions = [
	{
		icon: Truck,
		title: "Standard delivery",
		detail: "3-7 business days",
		price: "Calculated at checkout",
	},
	{
		icon: Clock3,
		title: "Processing time",
		detail: "1-2 business days",
		price: "We keep you updated",
	},
	{
		icon: Globe2,
		title: "Where we deliver",
		detail: "Selected regions worldwide",
		price: "Availability at checkout",
	},
];

export default function ShippingPage() {
	return (
		<StoreInfoPage
			eyebrow="From our door to yours"
			title="Delivery that keeps its promise."
			intro="We pack every order carefully and keep the journey simple, from the moment your pieces leave the studio to the moment they arrive."
		>
			<div className="grid gap-5 md:grid-cols-3">
				{deliveryOptions.map(({ icon: Icon, title, detail, price }) => (
					<article
						key={title}
						className="border border-slate-200 bg-white p-6 sm:p-8"
					>
						<Icon className="h-7 w-7 text-[#b27c20]" strokeWidth={1.5} />
						<h2 className="mt-8 text-xl font-semibold text-[#183c3b]">
							{title}
						</h2>
						<p className="mt-3 text-lg text-slate-700">{detail}</p>
						<p className="mt-2 text-sm text-slate-500">{price}</p>
					</article>
				))}
			</div>
			<div className="mt-12 border border-[#183c3b] bg-[#183c3b] p-6 text-white sm:p-10">
				<h2 className="text-2xl font-semibold">
					Your tracking link travels with your order.
				</h2>
				<p className="mt-3 max-w-2xl leading-7 text-slate-200">
					As soon as your order is on its way, we will email tracking details so
					you can follow its progress. Delivery dates are estimates and can vary
					by destination.
				</p>
			</div>
		</StoreInfoPage>
	);
}
