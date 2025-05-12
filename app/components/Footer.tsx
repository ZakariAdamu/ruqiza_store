"use client";

import Link from "next/link";
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-slate-300 py-10 px-6 zmd:px-12 md:mt-[36px]">
			<div className="max-w-[1024px] lg:max-w-6xl xl:w-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-[16px]">
				{/* Company Info */}
				<div className="lg:ml-[32px]">
					<h2 className="text-xl font-semibold mb-4">Ruqiza Signatures</h2>
					<p className="text-sm">
						Your trusted destination for quality products at unbeatable prices.
						Fast shipping and reliable service.
					</p>
				</div>

				{/* Quick Links */}
				<div className="ml-[36px]">
					<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
					<ul className="space-y-2 text-sm">
						<li>
							<Link href="/" prefetch={true}>
								Home
							</Link>
						</li>
						<li>
							<Link href="/shop" prefetch={true}>
								Shop
							</Link>
						</li>
						<li>
							<Link href="/about" prefetch={true}>
								About Us
							</Link>
						</li>
						<li>
							<Link href="/contact" prefetch={true}>
								Contact
							</Link>
						</li>
					</ul>
				</div>

				{/* Customer Service */}
				<div>
					<h3 className="text-lg font-semibold mb-4">Customer Service</h3>
					<ul className="space-y-2 text-sm">
						<li>
							<Link href="/faq">FAQs</Link>
						</li>
						<li>
							<Link href="/returns">Returns</Link>
						</li>
						<li>
							<Link href="/shipping">Shipping Info</Link>
						</li>
						<li>
							<Link href="/privacy-policy">Privacy Policy</Link>
						</li>
					</ul>
				</div>

				{/* Social Media */}
				<div className="lg:ml-[32px]">
					<h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
					<div className="flex gap-4">
						<a href="#" aria-label="Facebook" className="hover:text-blue-500">
							<FaFacebookF />
						</a>
						<a href="#" aria-label="Twitter" className="hover:text-sky-400">
							<FaTwitter />
						</a>
						<a href="#" aria-label="Instagram" className="hover:text-pink-500">
							<FaInstagram />
						</a>
						<a href="#" aria-label="LinkedIn" className="hover:text-blue-300">
							<FaLinkedinIn />
						</a>
					</div>
				</div>
			</div>

			<div className="mt-10 text-center text-sm text-gray-400 border-t border-gray-700 pt-4">
				&copy; {new Date().getFullYear()} Ruqiza Signatures. All rights
				reserved.
			</div>
		</footer>
	);
};

export default Footer;
