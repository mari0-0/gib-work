import React from "react";
import BlurFade from "./BlurFade";

const Newsletter = () => {
	return (
		<>
			<div className="w-full h-[10vh] border-b border-gray-200 ">
				<div className="w-[80%] h-full mx-[10%] border-x border-gray-200"></div>
			</div>

			<BlurFade yOffset={10} duration={0.6} delay={0.1}>
				<section className="w-full h-[30vh] border-b border-gray-300">
					<div className="px-4 py-8 w-[80%] h-full mx-[10%] flex justify-between flex-col md:flex-row md:items-center border-x border-gray-200">
						<div className="w-full">
							<h3 className="font-neue font-semibold text-2xl md:text-4xl text-gray-900">
								Sign up for <em className="text-violet-600">insider</em>
								<br />
								tips and tricks
							</h3>
						</div>

						<div className="relative h-11 w-1/2 min-w-[200px]">
							<input
								placeholder="example@email.com"
								className="peer h-full w-full border-b border-gray-300 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
							/>
							<label className=" after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-100 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-700 peer-focus:after:scale-x-100 peer-focus:after:border-gray-700 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
								<p>Email</p>
							</label>
						</div>
					</div>
				</section>
			</BlurFade>
		</>
	);
};

export default Newsletter;
