import { AiOutlineMessage } from "react-icons/ai";
import TweetCard from "react-tweet-card";
import tweetsData from "../tweets";
import "./Testimonials.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import BlurFade from "./BlurFade";

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
						Hear from Our <span className="font-semibold text-violet-600">Happy</span> Clients
					</h1>
					<p className="text-gray-500 mb-16 text-center max-w-sm">
						Discover how we've made a difference for those who matter most.
					</p>
				</BlurFade>
			</div>
			<BlurFade
				yOffset={10}
				duration={0.4}
				className="overlay-container w-[80%] h-screen md:w-[80%] flex gap-2 md:-skew-x-12 overflow-hidden border-x border-t border-gray-200"
			>
				<div className="flex gap-2 md:-skew-x-12 overflow-hidden">
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
			{/* <TweetCard
				theme="dim"
				author={{
					name: "randy",
					username: "randyfactory",
					image:
						"https://pbs.twimg.com/profile_images/1382083582752096262/xrx0PO8Z_400x400.jpg",
				}}
				tweet={ `sippin wine on a balcony somewhere drunkenly slurring shit like “to find urself, think for urself” with a crowd cheering underneath him like fuck yes socrates another banger this man will not miss`}
				time={new Date(2021, 2, 2, 21, 3)}
				source="Twitter for iPhone"
				permalink="https://twitter.com/randyfactory/status/1366841622495961091"
				fitInsideContainer={false}
				className="text-xs"
			/> */}
		</div>
	);
};
