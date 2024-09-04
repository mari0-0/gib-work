import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./Team.css"

gsap.registerPlugin(ScrollTrigger);
const Team = () => {
	useGSAP(() => {
		// Pin the container
		gsap.to(".team-container", {
			scrollTrigger: {
				trigger: ".team-container",
				pin: true,
				start: "top 15%",
				end: "+=250%",
				scrub: true,
			},
		});

		const teamMembers = document.querySelectorAll(".team-member");

		teamMembers.forEach((member, i) => {
			const sections = member.querySelectorAll('.team-section');

			// Adjust the scrollTrigger configuration for each team member
			gsap.to(sections, {
				scrollTrigger: {
					trigger: sections[0],
					start: `${100 * i}% 15%`,
					end: `${100 * i + 100}% 15%`,
					scrub: true,
					markers: true,
				},
				clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
			});
		});
	}, []);

	return (
		<section className="w-full h-screen">
			<div className="w-full border-b border-gray-200">
				<div className="w-[80%] py-16 px-4 mx-auto border-x border-gray-200">
					<h2 className="font-neue text-6xl text-gray-900 font-medium text-center">
						Our <span className="font-semibold text-violet-600">Team</span>
					</h2>
				</div>
			</div>
			<div className="team-container w-full h-[80%] border-b border-gray-200">
				<div className=" w-[80%] h-full mx-auto border-x border-gray-200">
					<div className="team-member flex relative">
						<div className="team-section absolute z-30 top-0 left-0 w-1/2 h-[80vh] bg-orange-300"></div>
						<div className="team-section absolute z-30 top-0 right-0 w-1/2 h-[80vh] bg-yellow-300"></div>
					</div>

					<div className="team-member flex relative">
						<div className="team-section absolute z-20 top-0 left-0 w-1/2 h-[80vh] bg-purple-300"></div>
						<div className="team-section absolute z-20 top-0 right-0 w-1/2 h-[80vh] bg-violet-300"></div>
					</div>

					<div className="team-member flex relative">
						<div className="team-section absolute z-10 top-0 left-0 w-1/2 h-[80vh] bg-sky-300"></div>
						<div className="team-section absolute z-10 top-0 right-0 w-1/2 h-[80vh] bg-blue-300"></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team;
