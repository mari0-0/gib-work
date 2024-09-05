import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./Team.css";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";

const teamMembersInfo = [
	{
		name: "Nikhil Kumar 1",
		twitter: "https://x.com/intent/follow?screen_name=nikhilkr_tw",
		twitterUsername: "nikhilkr_tw",
		discord: "https://discord.com/users/569966649889783810",
		discordUsername: "NiCK#0998",
		image: "/nikhil_kumar_o.jpg",
		occupation: "Frontend Developer",
	},
	{
		name: "0xNullRef 1",
		twitter: "https://twitter.com/intent/follow?screen_name=0xNullRef",
		twitterUsername: "0xNullRef",
		discord: "https://discord.com/users/798963371511906334",
		discordUsername: "Worker #117 @ Gib.Work",
		image: "/0xNull_ref.jpg",
		occupation: "Designer UI/UX",
	},
	{
		name: "Nikhil Kumar 2",
		twitter: "https://x.com/intent/follow?screen_name=nikhilkr_tw",
		twitterUsername: "nikhilkr_tw",
		discord: "https://discord.com/users/569966649889783810",
		discordUsername: "NiCK#0998",
		image: "/nikhil_kumar_o.jpg",
		occupation: "Frontend Developer",
	},
	{
		name: "0xNullRef 2",
		twitter: "https://twitter.com/intent/follow?screen_name=0xNullRef",
		twitterUsername: "0xNullRef",
		discord: "https://discord.com/users/798963371511906334",
		discordUsername: "Worker #117 @ Gib.Work",
		image: "/0xNull_ref.jpg",
		occupation: "Designer UI/UX",
	},
];

gsap.registerPlugin(ScrollTrigger);
const Team = () => {
	useGSAP(() => {
		let end = `+=${(teamMembersInfo.length - 2) * 100}%`;
		if (window.innerWidth > 768) {
			end = `+=${(teamMembersInfo.length - 2) * 100 + 30}%`;
		}

		gsap.to(".team-container", {
			scrollTrigger: {
				trigger: ".team-container",
				pin: true,
				start: "15% top",
				end: end,
				scrub: true,
			},
		});

		const teamMembers = document.querySelectorAll(".team-member");

		teamMembers.forEach((member, i) => {
			const sections = member.querySelectorAll(".team-section");

			gsap.to(sections, {
				scrollTrigger: {
					trigger: sections[0],
					start: `${100 * i}% 15%`,
					end: `${100 * i + 100}% 15%`,
					scrub: true,
				},
				clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
			});
		});
	}, []);

	return (
		<section className="team-container w-full h-screen">
			<div className="w-full border-b border-gray-200">
				<div className="w-[80%] py-16 px-4 mx-auto border-x border-gray-200">
					<h2 className="font-neue text-6xl text-gray-900 font-medium text-center">
						Our <span className="font-semibold text-violet-600">Team</span>
					</h2>
				</div>
			</div>
			<div className="team-members-container w-full h-[80%] border-b border-gray-200">
				<div className=" w-[80%] h-full mx-auto border-x border-gray-200">
					{teamMembersInfo.map((member, i) => (
						<div
							className={`${
								i !== teamMembersInfo.length - 1 ? "team-member" : ""
							} relative`}
						>
							<div
								className={`team-section absolute w-full h-[60vh] top-0 left-0 md:top-0 md:left-0 md:w-1/2 md:h-[80vh] flex justify-center items-center border-b md:border-b-0 md:border-r border-gray-200`}
								style={{ zIndex: (teamMembersInfo.length - i - 1) * 10 + 10 }}
							>
								<div className="w-80 h-80 mx-auto rounded-full ">
									<img
										src={member.image}
										alt={member.name}
										className="w-full h-full object-cover rounded-full"
									/>
								</div>
							</div>

							<div
								className={`team-section absolute bg-white w-full h-[20vh] top-[60vh] right-0 md:top-0 md:right-0 md:w-1/2 md:h-[80vh] flex flex-row md:flex-col justify-center items-center md:items-start gap-3 md:gap-8 ${i === teamMembersInfo.length - 1 ? "border-b border-gray-200" : ""
									}`}
								style={{ zIndex: (teamMembersInfo.length - i - 1) * 10 + 10 }}
							>
								<div className="w-full h-full md:px-[10%] flex flex-col justify-center items-center md:justify-end md:items-start border-r md:border-r-0 border-gray-200">
									<h2 className="font-neue text-2xl md:text-5xl text-gray-900 font-medium">
										{member.name}
									</h2>
									<h4 className="font-neue text-lg md:text-2xl text-gray-600">
										{member.occupation}
									</h4>
								</div>

								<div className="w-full h-full md:px-[10%] flex flex-col justify-center items-center md:items-start md:justify-start gap-4">
									<div className="social-links flex justify-center items-center space-x-2">
										<a
											href={member.twitter}
											target="_blank"
											rel="noopener noreferrer"
											className="text-2xl text-gray-900 hover:text-violet-800 duration-150"
										>
											<FaXTwitter />
										</a>
										<h3 className="text-sm md:text-md">@{member.twitterUsername}</h3>
									</div>

									<div className="social-links flex justify-center items-center space-x-2">
										<a
											href={member.discord}
											target="_blank"
											rel="noopener noreferrer"
											className="text-2xl text-gray-900 hover:text-violet-800 duration-150"
										>
											<FaDiscord />
										</a>
										<h3 className="text-sm md:text-md">@{member.discordUsername}</h3>
									</div>
								</div>
							</div>
						</div>
					))}

					{/* <div className="team-member relative">
						<div className="team-section absolute z-20 w-full h-[60vh] top-0 left-0 md:top-0 md:left-0 md:w-1/2 md:h-[80vh] flex justify-center items-center">
							<div className="w-80 h-80 mx-auto rounded-full ">
								<img
									src="/0xNull_ref.jpg"
									alt=""
									className="w-full h-full object-cover rounded-full"
								/>
							</div>
						</div>
						<div className="team-section absolute z-20 px-[10%] bg-white w-full h-[20vh] top-[60vh] right-0 md:top-0 md:right-0 md:w-1/2 md:h-[80vh] flex flex-col justify-center items-start gap-8">
							<div>
								<h2 className="font-neue text-5xl text-gray-900 font-medium">
									0xNullRef
								</h2>
								<h4 className="font-neue text-2xl text-gray-600">
									Designer UI/UX
								</h4>
							</div>

							<div className="flex flex-col justify-center items-start gap-4">
								<div className="social-links flex justify-center items-center space-x-2">
									<a
										href="https://twitter.com/nikhilkr_tw"
										target="_blank"
										rel="noopener noreferrer"
										className="text-2xl text-gray-900 hover:text-violet-600"
									>
										<FaXTwitter />
									</a>
									<h3>@nikhilkr_tw</h3>
								</div>

								<div className="social-links flex justify-center items-center space-x-2">
									<a
										href="https://discord.com/users/569966649889783810"
										target="_blank"
										rel="noopener noreferrer"
										className="text-2xl text-gray-900 hover:text-violet-600"
									>
										<FaDiscord />
									</a>
									<h3>@NiCK#0998</h3>
								</div>
							</div>
						</div>
					</div>

					<div className="relative">
						<div className="team-section absolute z-10 w-full h-[60vh] top-0 left-0 md:top-0 md:left-0 md:w-1/2 md:h-[80vh] bg-sky-300"></div>
						<div className="team-section absolute z-10 w-full h-[20vh] top-[60vh] right-0 md:top-0 md:right-0 md:w-1/2 md:h-[80vh] bg-blue-300"></div>
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default Team;
