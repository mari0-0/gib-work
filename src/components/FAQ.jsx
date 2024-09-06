import React, { useEffect, useState } from "react";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaLongArrowAltLeft } from "react-icons/fa";
import "./FAQ.css";

const FAQ = () => {
	const [isPlaying, setIsPlaying] = useState(false);

	const handleMusicPlayerClick = () => {
		const musicPlayer = document.getElementById("musicPlayer");
		musicPlayer.paused ? musicPlayer.play() : musicPlayer.pause();
		musicPlayer.volume = 0.15;
	};

	useEffect(() => {
		const musicPlayer = document.getElementById("musicPlayer");
		const musicPlayerIcon = document.querySelector(
			".workTokenLogoContainer img"
		);
		const musicText = document.querySelector(".musicText");

		musicPlayerIcon.style.animationPlayState = "paused";
		musicPlayer.addEventListener("play", () => {
			musicPlayerIcon.style.animationPlayState = "running";
			musicText.style.opacity = 0;
			setIsPlaying(true);
		});
		musicPlayer.addEventListener("pause", () => {
			musicPlayerIcon.style.animationPlayState = "paused";
			musicText.style.opacity = 1;
			setIsPlaying(false);
		});

		const checkIfMouseInInteractable = (e) => {
			const interactable = document.querySelector(".workTokenLogoContainer");
			let interacting = false;

			const rect = interactable.getBoundingClientRect();
			const mouseX = e.clientX;
			const mouseY = e.clientY;

			if (
				mouseX >= rect.left &&
				mouseX <= rect.right &&
				mouseY >= rect.top &&
				mouseY <= rect.bottom
			) {
				interacting = true;
			}

			return interacting;
		};

		const animateTrailer = () => {
			window.addEventListener("mousemove", (e) => {
				const interacting = checkIfMouseInInteractable(e);

				const trailer = document.getElementById("faq-trailer");
				const x = e.clientX - trailer.offsetWidth / 2;
				const y = e.clientY - trailer.offsetHeight / 2;

				const keyframes = {
					transform: `translate(${x + 70}px, ${y - 70}px)`,
				};

				if (interacting) {
					trailer.style.opacity = 1;
				} else {
					trailer.style.opacity = 0;
				}

				trailer.animate(keyframes, {
					duration: 800,
					fill: "forwards",
				});
			});
		};

		animateTrailer();

		return () => {
			window.removeEventListener("mousemove", animateTrailer);
		};
	}, []);

	return (
		<>
			<div className="w-full h-[10vh] border-b border-gray-200 ">
				<div className="w-[80%] h-full mx-[10%] border-x border-gray-200"></div>
			</div>

			<section className=" px-[10%] border-b border-gray-200">
				<div id="faq-trailer" className="text-white gap-2 bg-gray-950">
					{isPlaying ? (
						<>
							<FaPause /> Pause
						</>
					) : (
						<>
							<FaPlay /> Play
						</>
					)}
				</div>

				<div className="w-full flex flex-col md:flex-row border-x border-gray-200">
					<BlurFade
						yOffset={10}
						duration={0.6}
						delay={0.1}
						className="mt-[2px] w-full h-full"
					>
						<div className="p-4">
							<h2 className="font-neue font-medium text-4xl md:text-5xl text-gray-900">
								Got &nbsp;
								<em className="font-semibold text-violet-600">Questions?</em>
								<br />
								We’ve Got &nbsp;
								<em className="text-violet-600 font-semibold">Answers!</em>
							</h2>

							<div className="mt-3 font-semibold text-gray-700 flex items-center gap-2 cursor-pointer">
								<IoChatbubblesOutline />
								<p>Still need help? chat to us.</p>
							</div>

							<div className="pt-8 hidden md:flex items-center">
								<div
									class="workTokenLogoContainer"
									onClick={handleMusicPlayerClick}
								>
									<img src="/gibWork2.jpg" alt="img" draggable={false} />
									<audio id="musicPlayer" src="/music.mp3" loop></audio>
								</div>

								<div className="musicText text-xs md:text-sm max-w-[30%] md:max-w-full text-gray-500 flex items-center gap-2 duration-300">
									<FaLongArrowAltLeft />
									<p>Want to hear music?</p>
								</div>
							</div>
						</div>
					</BlurFade>

					<BlurFade
						yOffset={10}
						duration={0.6}
						delay={0.1}
						className="w-full h-full md:border-l border-gray-200"
					>
						<div className="p-4">
							<FAQAccordion />
						</div>
					</BlurFade>
				</div>
			</section>
		</>
	);
};

export default FAQ;

import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from "@chakra-ui/react";
import { faqs } from "../placeholders";
import { FaPause, FaPlay } from "react-icons/fa6";
import BlurFade from "./BlurFade";

export const FAQAccordion = () => {
	return (
		<Accordion className="w-full" allowMultiple>
			{faqs.map((faq, index) => (
				<AccordionItem
					key={index}
					className="border-b border-gray-200 py-[17px]"
				>
					<h2>
						<AccordionButton className="flex justify-between">
							<span
								className="text-left font-semibold text-gray-900 e"
								flex="1"
							>
								{faq.question}
							</span>
							<AccordionIcon className="text-left !text-gray-900 " />
						</AccordionButton>
					</h2>
					<AccordionPanel
						className="text-left text-medium mt-2 !text-gray-700 "
						pb={4}
					>
						{faq.answer}
					</AccordionPanel>
				</AccordionItem>
			))}
		</Accordion>
	);
};
