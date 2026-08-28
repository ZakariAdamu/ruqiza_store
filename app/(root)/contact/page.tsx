import { Mail, MessageCircle, Phone } from "lucide-react";
import StoreInfoPage from "../../components/StoreInfoPage";

const contactOptions = [
	{
		icon: Mail,
		title: "Email us",
		text: "For order questions, styling help, or anything else.",
		value: "zakari.adamu714@gmail.com",
		href: "mailto:zakari.adamu714@gmail.com",
	},
	{
		icon: MessageCircle,
		title: "Chat with us",
		text: "Our store assistant is ready to help you find your way around.",
		value: "Start a WhatsApp chat with us",
		href: "https://wa.me/2348012345678?text=Hello%20I%20would%20like%20to%20make%20an%20inquiry",
		target: "_blank",
	},
	{
		icon: Phone,
		title: "Call the studio",
		text: "Monday to Friday, 9:00 AM to 5:00 PM.",
		value: "+234 816 784 2561",
		href: "tel:+2348167842561",
	},
];

export default function ContactPage() {
	return (
		<StoreInfoPage
			eyebrow="We are here"
			title="Let us help you find the right thing."
			intro="Questions about fit, delivery, or a particular piece? Our team is happy to make your Ruqiza experience feel personal."
		>
			<div className="grid gap-5 md:grid-cols-3">
				{contactOptions.map(({ icon: Icon, title, text, value, href }) => (
					<a
						key={title}
						href={href}
						className="group border border-slate-200 bg-white p-6 transition-colors hover:border-[#b27c20] sm:p-8"
					>
						<Icon className="h-7 w-7 text-[#b27c20]" strokeWidth={1.5} />
						<h2 className="mt-8 text-xl font-semibold text-[#183c3b]">
							{title}
						</h2>
						<p className="mt-3 min-h-12 text-sm leading-6 text-slate-600">
							{text}
						</p>
						<p className="mt-5 text-sm font-semibold text-[#183c3b] group-hover:text-[#b27c20]">
							{value}
						</p>
					</a>
				))}
			</div>
			<div className="mt-12 bg-[#e8dfcf] p-6 sm:p-10">
				<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b27c20]">
					Before you write
				</p>
				<h2 className="mt-3 text-2xl font-semibold text-[#183c3b]">
					Have your order number nearby
				</h2>
				<p className="mt-3 max-w-2xl leading-7 text-slate-600">
					It helps us find your details quickly and get you a useful answer in
					one reply. We usually respond within one business day.
				</p>
			</div>
		</StoreInfoPage>
	);
}
