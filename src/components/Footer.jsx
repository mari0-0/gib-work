import React from "react";
import { FaDiscord, FaGithub, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
	return (
		<div
			className="relative h-[70vh] bg-violet-100"
			style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
		>
			<div className="fixed bottom-0 h-[70vh] w-full">
				<div className="w-full h-4/5 flex items-center justify-center overflow-hidden">
					<div className="w-[80%] h-full flex flex-col md:flex-row border-x border-gray-300">
						<div className="w-full h-full px-4 pt-12 pb-4 flex flex-row md:flex-col  justify-between">
							<div className="w-full flex gap-2">
								<img src="gibWork.jpeg" alt="logo" className="w-8 h-8 md:w-12 md:h-12 rounded-[4px]" />
								<h1 className="text-gray-900 font-neue font-semibold text-2xl md:text-5xl">Gibwork</h1>
							</div>

							<div className="flex flex-col gap-2 text-sm md:text-md">
								<p>+12 34567 8910</p>
								<p>info@gibwork.com</p>
							</div>
						</div>
						<div className="w-full h-full flex gap-2 border-t md:border-t-0 border-gray-300">
							<div className="w-full h-full px-4 pt-14 flex flex-col gap-8 md:border-l border-gray-300">
								<div>
									<h1 className="font-semibold font-neue md:text-lg">Company</h1>
								</div>
								<div className="flex flex-col gap-2 text-sm md:text-md">
									<p>Home</p>
									<p>Features</p>
									<p>Testimonials</p>
									<p>Team</p>
									<p>FAQ</p>
								</div>
							</div>
							<div className="w-full h-full px-4 pt-14 pb-4 md:pb-0 flex flex-col gap-8 border-l border-gray-300">
								<div>
									<h1 className="font-semibold font-neue text-md md:text-lg">Products</h1>
								</div>
								<div className="flex flex-col gap-2 text-sm md:text-md">
									<p>Gibwork App</p>
									<p>Work Token</p>
									<p>About Us</p>
									<p>Blog</p>
									<p>Careers</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="w-[80%] h-1/5 mx-auto p-4 flex flex-col md:flex-row gap-2 md:gap-0 justify-start items-center border-x border-t border-gray-300">
					<p className="w-full text-sm md:text-md">&#169; Gibwork </p>
					<div className="w-full text-sm md:text-md flex gap-2 md:justify-center">
						<p>privacy</p>
						<p>Terms</p>
						<p>Conditions</p>
					</div>
					<div className="w-full text-xl text-gray-800 flex md:justify-end gap-3">
						<FaGithub />
						<FaYoutube className="" />
						<FaDiscord />
						<FaXTwitter />
					</div>
				</div>
			</div>
		</div>
	);
}
