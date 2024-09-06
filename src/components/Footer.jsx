import React from "react";
import { FaDiscord, FaGithub, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
	return (
		<div
			className="relative h-[70vh] bg-violet-100"
			style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
		>
			<div className="fixed bottom-0 h-[70vh] w-full">
				<div className="w-full h-4/5 flex items-center justify-center">
					<div className="w-[80%] h-full flex border-x border-gray-300">
						<div className="w-full h-full px-4 pt-12 pb-4 flex flex-col justify-between">
							<div className="w-full flex gap-2">
								<img src="gibWork.jpeg" alt="logo" className="w-12 h-12 rounded-[4px]" />
								<h1 className="text-gray-900 font-neue font-semibold text-5xl">Gibwork</h1>
							</div>

							<div className="flex flex-col gap-2">
								<p>+12 34567 8910</p>
								<p>info@gibwork.com</p>
							</div>
						</div>
						<div className="w-full h-full flex gap-2">
							<div className="w-full h-full px-4 pt-14 flex flex-col gap-8 border-l border-gray-300">
								<div>
									<h1 className="font-semibold font-neue text-lg">Company</h1>
								</div>
								<div className="flex flex-col gap-2 text-md">
									<p>Home</p>
									<p>Features</p>
									<p>Testimonials</p>
									<p>Team</p>
									<p>FAQ</p>
								</div>
							</div>
							<div className="w-full h-full px-4 pt-14 flex flex-col gap-8 border-l border-gray-300">
								<div>
									<h1 className="font-semibold font-neue text-lg">Products</h1>
								</div>
								<div className="flex flex-col gap-2 text-md">
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

				<div className="w-[80%] h-1/5 mx-auto p-4 flex justify-between items-center border-x border-t border-gray-300">
					<p className="w-full">&#169; Gibwork </p>
					<div className="w-full flex gap-2 justify-center">
						<p>privacy</p>
						<p>Terms</p>
						<p>Conditions</p>
					</div>
					<div className="w-full text-xl text-gray-900 flex justify-end gap-3">
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
