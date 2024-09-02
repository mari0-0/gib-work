import React, { useEffect, useRef } from "react";
import "./Hero.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
	useEffect(() => {
		const grid = document.querySelector(".grid-container");
		let count = 300;
		if (window.innerWidth < 1700) {
			count = 1800;
		}
		for (let i = 0; i < count; i++) {
			const div = document.createElement("div");
			div.classList.add("tile");
			grid.appendChild(div);
		}
	}, []);

	return (
		<>
			<div className="grid-wrapper">
				<div className="grid-container"></div>
			</div>
			<div className="pt-36 w-full absolute pointer-events-none">
				<div className="max-w-[650px] mx-auto flex flex-col  justify-center items-center">
					<h1 className="text-4xl sm:text-6xl text-slate-900 font-semibold font-neue text-center">
						Power Up with Bounties @ Gibwork
					</h1>
					<p className="mt-2 text-gray-500 text-center">
						Post and solve bounties in a decentralized network—Connect globally
						and earn rewards in a secure, transparent space.
					</p>

          <CTAButton />
				</div>
			</div>
		</>
	);
};

export default Hero;


export const CTAButton = () => {
	const CTAButton = useRef();

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
			className="relative pointer-events-auto mt-6 button-wrapper px-10 py-3 bg-black rounded-lg flex cursor-pointer whitespace-nowrap"
			ref={CTAButton}
		>
			<div className="absolute z-[1] arrow-div rounded-md bg-violet-400 w-[25%] h-[80%] top-[10%] left-[3%] flex justify-center items-center">
				<div className="arrow-wrapper">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill-rule="evenodd"
						clip-rule="evenodd"
					>
						<path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
					</svg>
				</div>
			</div>
			<div className="pl-[20%] button-text text-white">
				<p>Go To App!</p>
			</div>
		</div>
	);
};
