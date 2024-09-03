import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {


	return (
		<div className="mb-20 bg-hero lg:pb-0 pb-120">
			<div className="pt-36 w-full h-fit pointer-events-none ">
				<div className="max-w-[650px] relative mx-auto flex flex-col justify-center items-center">
					<h1 className="text-4xl sm:text-6xl text-slate-900 font-semibold font-neue text-center">
						Power Up with Bounties @ Gibwork
					</h1>
					<p className="mt-2 text-gray-500 text-center min-w-sm">
						Post and solve bounties in a decentralized network—Connect globally
						and earn rewards in a secure, transparent space.
					</p>
					<CTAButton />
					<div className="flex justify-center items-center ">
						<p className="text-gray-500">Built on</p>
						<img src="solana.png" alt="solana" className="w-32 hover:w-36 pointer-events-auto duration-300" />
					</div>

				</div>

				<div className="video-wrapper h-fit relative z-[1] mt-12 w-full flex flex-col justify-center items-center">
					<div className="absolute top-0 z-[1] rounded-3xl w-[88%] md:w-[70%] h-10 bg-slate-400 border"></div>
					<div className="absolute top-0 z-[1] translate-y-3 rounded-3xl w-[93%] md:w-[75%] h-10 bg-slate-300 border border-slate-400"></div>
					<div className="p-2 top-0 z-[2] translate-y-6 rounded-3xl w-[98%] md:w-[80%] bg-slate-200 border border-slate-400 pointer-events-all">
						<img src="/dashboard.webp" alt="dashboard" className="w-full hero-img rounded-2xl border border-slate-300" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;


export const CTAButton = () => {
	const CTAButton = useRef();


	const handleOnClick = () => {
		window.open("https://app.gib.work/", "_blank");
	};


	useGSAP(() => {
		const handleMouseEnter = () => {
			const arrowDiv = CTAButton.current.querySelector(".arrow-div");
			gsap.to(arrowDiv, {
				width: "94%",
				duration: 0.3,
			});
			gsap.to(buttonText, { duration: 0.6, x: -4, opacity: 0 });

			arrowTl.pause();
		};

		const handleMouseLeave = () => {
			const arrowDiv = CTAButton.current.querySelector(".arrow-div");
			gsap.to(arrowDiv, {
				width: "25%",
				duration: 0.3,
			});
			gsap.to(buttonText, { duration: 0.6, x: 0, opacity: 1 });

			arrowTl.play();
		};

		CTAButton.current.addEventListener("mouseenter", handleMouseEnter);
		CTAButton.current.addEventListener("mouseleave", handleMouseLeave);

		const arrowWrapper = document.querySelector(".arrow-wrapper");
		const arrowTl = gsap.timeline();
		arrowTl.to(arrowWrapper, {
			duration: 0.6,
			x: 4,
			ease: "circ.in",
			repeat: -1,
			yoyo: true,
		});

		const buttonText = document.querySelector(".button-text");

		return () => {
			CTAButton.current.removeEventListener("mouseenter", handleMouseEnter);
			CTAButton.current.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);

	return (
		<div
			className="relative pointer-events-auto mt-6 button-wrapper px-12 py-3 bg-gray-900 rounded-lg flex cursor-pointer whitespace-nowrap"
			ref={CTAButton}
			onClick={handleOnClick}
		>
			<div className="absolute z-[1] arrow-div rounded-[5px] bg-violet-400 w-[25%] h-[80%] top-[10%] left-[3%] flex justify-center items-center">
				<div className="arrow-wrapper">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
					>
						<path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
					</svg>
				</div>
			</div>
			<div className="pl-[20%] button-text text-white">
				<p className="font-neue font-semibold">Go To App!</p>
			</div>
		</div>
	);
};
