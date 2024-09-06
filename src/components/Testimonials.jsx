import { AiOutlineMessage } from "react-icons/ai";
import TweetCard from "react-tweet-card";
import { tweetsData } from "../placeholders";
import "./Testimonials.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import BlurFade from "./BlurFade";
import Marquee from "react-fast-marquee";

const brands = [
	{ name: "solana", image: "/solana.png", bgGray: false },
	{ name: "dexscreener", image: "/dexscreener.png", bgGray: false },
	{ name: "sol_civ", image: "/sol_civ.png", bgGray: true },
	{ name: "raydium", image: "/Raydium.png", bgGray: false },
	{ name: "birdeye", image: "/birdeye.png", bgGray: false },
];

gsap.registerPlugin(ScrollTrigger);
const Testimonials = () => {
	const row1 = useRef();
	const row3 = useRef();

	useGSAP(() => {
		gsap.to(row1.current, {
			scrollTrigger: {
				trigger: row1.current,
				start: "top 80%",
				end: "bottom 20%",
				scrub: 1,
			},
			y: -450,
		});
		gsap.to(".row2", {
			scrollTrigger: {
				trigger: ".row2",
				start: "top 80%",
				end: "bottom 20%",
				scrub: 1,
			},
			y: "+=300",
		});
		gsap.from(row3.current, {
			scrollTrigger: {
				trigger: row1.current,
				start: "top 80%",
				end: "bottom 20%",
				scrub: 1,
			},
			y: 100,
		});
	}, []);

	return (
		<>
			<div className="border-b border-gray-200">
				<BlurFade yOffset={10} duration={0.6} delay={0.1}>
					<div className="px-[10%] w-full h-[30vh] flex flex-col md:flex-row">
						<div className="w-full md:w-2/5 h-full pt-4 px-4 flex items-center border-x md:border-r-0 border-gray-200">
							<h2 className="font-neue font-medium text-3xl md:text-5xl text-gray-900">
								Trusted by
								<br />
								<em className="text-violet-600 font-semibold">Leading</em>{" "}
								Brands
							</h2>
						</div>

						<div className="w-full md:w-3/5 pt-4 px-4 flex items-center text-gray-500 border-x md:border-l-0 border-gray-200">
							<p className="my-auto text-sm md:text-md">
								Over the years, we’ve earned the trust of some of the world’s
								most respected brands. They rely on our commitment to excellence
								and ability to deliver cutting-edge solutions tailored to their
								needs. Our partnerships are built on mutual respect, innovation,
								and a shared vision for growth in a constantly evolving
								marketplace.
							</p>
						</div>
					</div>
				</BlurFade>

				<BlurFade yOffset={10} duration={0.3} delay={0.1}>
					<div className="w-full h-[30vh] sm:mt-0">
						<div className="mx-[10%] p-4 w-[80%] h-full flex items-center gap-4 border-x border-gray-200">
							<Marquee className="overflow-hidden">
								{brands.map((brand, i) => (
									<div
										key={i}
										className={`w-36 h-12 sm:h-[4.5rem] sm:w-52 mx-4 ${
											brand.bgGray && "bg-slate-200"
										} grayscale flex items-center`}
									>
										<img
											src={brand.image}
											alt={brand.name}
											className="object-cover w-full"
										/>
									</div>
								))}
							</Marquee>
						</div>
					</div>
				</BlurFade>
			</div>

			<div className="w-full h-[10vh] border-b border-gray-200 ">
				<div className="w-[80%] h-full mx-[10%] border-x border-gray-200"></div>
			</div>

			<div className="bg-[#fbfbfc] relative h-screen w-full flex flex-col items-center border-b border-slate-200 overflow-hidden">
				<div className="w-[80%] pt-16 border-x border-gray-200">
					<BlurFade
						yOffset={10}
						duration={0.3}
						className="flex flex-col items-center"
					>
						<div className="px-3 py-1 mb-5 w-fit flex justify-center items-center gap-2 rounded-full bg-slate-100">
							<AiOutlineMessage size={18} />
							Testimonials
						</div>

						<h1 className="mb-3 font-medium font-neue text-3xl sm:text-5xl text-slate-900  text-center">
							Hear from Our{" "}
							<span className="font-semibold text-violet-600">Happy</span>{" "}
							Clients
						</h1>
						<p className="text-gray-500 mb-16 text-center max-w-sm">
							Discover how we've made a difference for those who matter most.
						</p>
					</BlurFade>
				</div>
				<BlurFade
					yOffset={10}
					duration={0.4}
					className="overlay-container w-[80%] h-screen md:w-[80%] flex gap-2 overflow-hidden border-x border-t border-gray-200"
				>
					<div className="flex gap-2 overflow-hidden">
						<div className="absolute "></div>

						<div className="row2 h-screen w-1/3 lg:flex flex-col gap-2 hidden -translate-y-64">
							{tweetsData.map((tweet, index) =>
								index < 10 && 5 <= index ? (
									<Testimonial key={index} {...tweet} />
								) : null
							)}
						</div>

						<div
							ref={row1}
							className="h-screen w-full sm:w-1/2 md:w-1/3 flex flex-col gap-2 -translate-y-[50px]"
						>
							{tweetsData.map((tweet, index) =>
								index < 5 ? (
									<Testimonial key={index} {...tweet} theme={"dark"} />
								) : null
							)}
						</div>

						<div className="row2 h-screen w-1/2 md:w-1/3 sm:flex flex-col gap-2 hidden -translate-y-64">
							{tweetsData.map((tweet, index) =>
								index < 10 && 5 <= index ? (
									<Testimonial key={index} {...tweet} />
								) : null
							)}
						</div>

						<div
							ref={row3}
							className="h-screen w-1/3 md:flex flex-col gap-2 hidden translate-y-[-300px]"
						>
							{tweetsData.map((tweet, index) =>
								index < 15 && 10 <= index ? (
									<Testimonial key={index} {...tweet} theme={"dark"} />
								) : null
							)}
						</div>
					</div>
				</BlurFade>
			</div>
		</>
	);
};

export default Testimonials;

export const Testimonial = ({
	author,
	tweet,
	time,
	source,
	permalink,
	theme,
}) => {
	return (
		<div className="w-fit">
			<TweetCard
				theme={theme ? theme : "dim"}
				author={{
					...author,
					image: "/twitter-profile-pic.png",
				}}
				tweet={tweet}
				time={time}
				source={source}
				permalink={permalink}
				fitInsideContainer={false}
				className="text-[10px]"
			/>
		</div>
	);
};
