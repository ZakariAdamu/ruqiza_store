"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const banners = [
	{
		src: "/banners/ruqiza-store-banner-1.png",
		alt: "Ruqiza Signatures featured collection",
	},
	{
		src: "/banners/ruqiza-store-banner-2.png",
		alt: "Ruqiza Signatures seasonal edit",
	},
	{
		src: "/banners/ruqiza-store-banner-3.jpg",
		alt: "Ruqiza Signatures fashion collection",
	},
	{
		src: "/banners/ruqiza-store-banner-4.jpg",
		alt: "Ruqiza Signatures latest arrivals",
	},
	{
		src: "/banners/ruqiza-store-banner-5.png",
		alt: "Ruqiza Signatures signature pieces",
	},
];

const AUTOPLAY_INTERVAL = 4000;

const HeroCarousel = () => {
	const [slideIndex, setSlideIndex] = useState(1);
	const [isPaused, setIsPaused] = useState(false);
	const [isAnimating, setIsAnimating] = useState(true);
	const touchStartX = useRef<number | null>(null);
	const slides = [banners[banners.length - 1], ...banners, banners[0]];

	useEffect(() => {
		if (isPaused) return;

		const interval = window.setInterval(() => {
			setSlideIndex((currentIndex) => currentIndex + 1);
		}, AUTOPLAY_INTERVAL);

		return () => window.clearInterval(interval);
	}, [isPaused]);

	const selectSlide = (index: number) => {
		setIsAnimating(true);
		setSlideIndex(index + 1);
	};

	const handleTransitionEnd = () => {
		if (slideIndex === slides.length - 1) {
			setIsAnimating(false);
			setSlideIndex(1);
		}

		if (slideIndex === 0) {
			setIsAnimating(false);
			setSlideIndex(banners.length);
		}
	};

	const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
		touchStartX.current = event.touches[0]?.clientX ?? null;
	};

	const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
		if (touchStartX.current === null) return;

		const distance = event.changedTouches[0].clientX - touchStartX.current;
		if (Math.abs(distance) > 50) {
			setIsAnimating(true);
			setSlideIndex((currentIndex) =>
				distance < 0 ? currentIndex + 1 : currentIndex - 1,
			);
		}

		touchStartX.current = null;
	};

	const activeDot = (slideIndex - 1 + banners.length) % banners.length;

	return (
		<section
			className="w-full bg-white"
			// onMouseEnter={() => setIsPaused(true)}
			// onMouseLeave={() => setIsPaused(false)}
			onFocusCapture={() => setIsPaused(true)}
			onBlurCapture={() => setIsPaused(false)}
			aria-label="Featured banners"
		>
			<div
				className="overflow-hidden touch-pan-y"
				onTouchStart={handleTouchStart}
				onTouchEnd={handleTouchEnd}
			>
				<div
					className={`flex ${isAnimating ? "transition-transform duration-700 ease-out" : ""}`}
					style={{ transform: `translateX(-${slideIndex * 100}%)` }}
					onTransitionEnd={handleTransitionEnd}
				>
					{slides.map((banner, index) => (
						<div className="relative min-w-full" key={`${banner.src}-${index}`}>
							<div className="relative aspect-[2/1] w-full sm:aspect-[2.5/1]">
								<Image
									src={banner.src}
									alt={banner.alt}
									fill
									priority={index === 1}
									sizes="100vw"
									className="object-cover"
								/>
							</div>
						</div>
					))}
				</div>
			</div>

			<div
				className="flex items-center justify-center gap-3 py-5"
				role="tablist"
				aria-label="Choose a banner"
			>
				{banners.map((banner, index) => (
					<button
						key={banner.src}
						type="button"
						role="tab"
						aria-label={`Show banner ${index + 1}`}
						aria-selected={activeDot === index}
						onClick={() => selectSlide(index)}
						className={`h-3 w-3 rounded-full border transition-all focus:outline-none focus:ring-2 focus:ring-[#183c3b] focus:ring-offset-2 ${
							activeDot === index
								? "scale-125 border-[#183c3b] bg-[#183c3b]"
								: "border-slate-400 bg-transparent hover:border-[#b27c20] hover:bg-[#b27c20]"
						}`}
					/>
				))}
			</div>
		</section>
	);
};

export default HeroCarousel;
