import React from "react";
import "./CTASection.css";
import BlurFade from "./BlurFade";

const CTASection = () => {
	const handleOnClick = () => {
		window.open("https://app.gib.work/", "_blank");
	};

	return (
		<section>
			<div className="w-full h-[10vh] border-b border-gray-200 ">
				<div className="w-[80%] h-full mx-[10%] border-x border-gray-200"></div>
			</div>
			
			<BlurFade yOffset={10} duration={0.6} delay={0.1}>
				<div className="w-full h-[60vh] border-b border-gray-200 ">
					<div className="cta-section w-[80%] h-full mx-[10%] border-x border-gray-200 flex flex-col items-center justify-center">
						<h2 className="text-2xl md:text-4xl font-bold text-gray-900">
							<div className="flex justify-between">
								<span>
									Need a <span className="text-violet-600">new Gig, </span>
								</span>
								<span className="text-gray-900">Or</span>
							</div>
							Need a <span className="text-violet-600">top Freelancer</span>
							<br />
						</h2>

						<p className="mt-4 text-sm md:text-lg text-gray-500 max-w-sm text-center">
							Sign up for free and find the best freelancers for your projects.
						</p>
						<button
							className="px-8 py-3 mt-6 text-gray-900 font-semibold bg-[#8151fd] rounded-full"
							onClick={handleOnClick}
						>
							Get Started
						</button>
					</div>
				</div>
			</BlurFade>
		</section>
	);
};

export default CTASection;
