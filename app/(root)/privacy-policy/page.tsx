import { LockKeyhole, ShieldCheck, UserRound } from "lucide-react";
import StoreInfoPage from "../../components/StoreInfoPage";

const privacyPoints = [
	{
		icon: UserRound,
		title: "What we collect",
		text: "We collect the details needed to process orders, provide support, and keep your account working, such as your name, contact details, and delivery information.",
	},
	{
		icon: ShieldCheck,
		title: "How we use it",
		text: "Your information helps us fulfill purchases, communicate important order updates, improve the store, and prevent misuse of our services.",
	},
	{
		icon: LockKeyhole,
		title: "How we protect it",
		text: "We limit access to personal information, use trusted service providers, and retain data only as long as it is needed for legitimate business purposes.",
	},
];

export default function PrivacyPolicyPage() {
	return (
		<StoreInfoPage
			eyebrow="Your trust matters"
			title="Privacy, in plain language."
			intro="Ruqiza Signatures treats your personal information with care. Here is the short version of what we collect, why we need it, and the choices you have."
		>
			<div className="grid gap-5 md:grid-cols-3">
				{privacyPoints.map(({ icon: Icon, title, text }) => (
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
			<section className="mt-12 max-w-3xl space-y-8 text-sm leading-7 text-slate-600">
				<div>
					<h2 className="text-2xl font-semibold text-[#183c3b]">
						Your choices
					</h2>
					<p className="mt-3">
						You can ask to access, correct, or delete your personal information.
						You can also unsubscribe from marketing messages at any time.
						Essential service messages, such as order updates, will still reach
						you.
					</p>
				</div>
				<div>
					<h2 className="text-2xl font-semibold text-[#183c3b]">Questions?</h2>
					<p className="mt-3">
						Contact our team through the Contact page and we will help with any
						privacy request.
					</p>
				</div>
			</section>
		</StoreInfoPage>
	);
}
