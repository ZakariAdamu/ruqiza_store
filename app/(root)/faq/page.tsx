import StoreInfoPage from "../../components/StoreInfoPage";

const questions = [
	[
		"How do I place an order?",
		"Add your favorite pieces to the cart, review your details, and follow the checkout steps. You will receive an order confirmation once your purchase is complete.",
	],
	[
		"Can I change or cancel my order?",
		"Contact us as soon as possible with your order number. We can update or cancel an order before it enters fulfillment.",
	],
	[
		"How can I check my order status?",
		"Sign in and visit Orders to see the latest status. We will also send important updates to the email connected to your account.",
	],
	[
		"What if an item is out of stock?",
		"Popular pieces can return to the collection. Check back soon or contact us and we can help you find a similar signature.",
	],
	[
		"How do I care for my purchase?",
		"Care details vary by piece. Follow the care information included with your order, and reach out if you need help interpreting it.",
	],
];

export default function FaqPage() {
	return (
		<StoreInfoPage
			eyebrow="Need to know"
			title="The useful answers, all in one place."
			intro="A quick guide to ordering, delivery, and looking after the pieces you love. Still curious? Our team is only a message away."
		>
			<div className="mx-auto max-w-3xl divide-y divide-slate-200 border-y border-slate-200 bg-white">
				{questions.map(([question, answer]) => (
					<details key={question} className="group p-6 sm:p-8">
						<summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-[#183c3b] marker:hidden">
							<span className="relative after:absolute after:right-0 after:top-1/2 after:text-2xl after:font-normal after:text-[#b27c20] after:content-['+'] group-open:after:content-['-']">
								{question}
							</span>
						</summary>
						<p className="max-w-2xl pt-4 text-sm leading-7 text-slate-600">
							{answer}
						</p>
					</details>
				))}
			</div>
		</StoreInfoPage>
	);
}
