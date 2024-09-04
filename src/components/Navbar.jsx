import { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaDiscord, FaGithub, FaXTwitter } from "react-icons/fa6";

const menuLinks = [
	{ path: "#", label: "Home" },
	{ path: "#features", label: "Features" },
	{ path: "#testimonials", label: "Testimonials" },
	{ path: "#team", label: "Team" },
	{ path: "#FAQ", label: "FAQ" },
	{ path: "https://app.gib.work/", label: "Sign In" },
];

const Navbar = () => {
	const container = useRef();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const tl = useRef();

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useGSAP(
		() => {
			gsap.set(".menu-link-item-holder", { y: 75 });

			tl.current = gsap
				.timeline({ paused: true })
				.to(".menu-overlay", {
					duration: 1,
					clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
					ease: "power4.inOut",
				})
				.to(".menu-link-item-holder", {
					y: 0,
					duration: 0.75,
					stagger: 0.1,
					ease: "power4.inOut",
					delay: -0.75,
				});
		},
		{ scope: container }
	);

	useEffect(() => {
		if (isMenuOpen) {
			tl.current.play();
		} else {
			tl.current.reverse();
		}
	}, [isMenuOpen]);

	useEffect(() => {
		const listenScroll = () =>
			window.addEventListener("scroll", () => {
				if (window.scrollY > 25) {
					navbar.classList.add("navbar-scrolled");
				} else if (window.scrollY < 25) {
					navbar.classList.remove("navbar-scrolled");
				}
			});

		const navbar = document.querySelector(".menu-container");
		const menuOverlay = document.querySelector(".menu-overlay");
		listenScroll();

		return () => {
			window.removeEventListener("scroll", listenScroll);
		};
	}, []);

	return (
		<>
			<div className="menu-container" ref={container}>
				<div className="menu-bar-wrapper">
					<div className="menu-bar">
						<div className="menu-logo">
							<div className="flex justify-center items-center gap-2">
								<img
									src="/gibWork.jpeg"
									alt="logo"
									className="w-8 h-8 rounded-[4px]"
								/>
								<h3 className="text-xl font-neue font-medium">GibWork</h3>
							</div>
						</div>

						<div className="hidden md:flex gap-2">
							{menuLinks.map((link, index) =>
								index !== menuLinks.length - 1 ? (
									<Navlink key={index} path={link.path}>
										{link.label}
									</Navlink>
								) : undefined
							)}
						</div>
						<div className="hidden md:flex justify-center items-center gap-2">
							<a
								href="https://github.com/gibwork"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaGithub color="black" size={18} />
							</a>
							<a
								href="https://x.com/gib_work"
								target="_blank"
								className="ml-2"
								rel="noopener noreferrer"
							>
								<FaXTwitter color="black" size={18} />
							</a>
							<a
								href="https://discord.com/invite/U3kEda4b"
								className="ml-2"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaDiscord color="black" size={22} />
							</a>
							<Navlink path={menuLinks[menuLinks.length - 1].path}>
								{menuLinks[menuLinks.length - 1].label}
							</Navlink>
						</div>
						<div className="menu-open md:hidden" onClick={toggleMenu}>
							<p>Menu</p>
						</div>
					</div>
				</div>

				<div className="menu-overlay font-neue">
					<div className="menu-overlay-bar">
						<div className="menu-logo">
							<div className="flex justify-center items-center gap-2">
								<img
									src="/gibWork.jpeg"
									alt="logo"
									className="w-8 h-8 rounded-[4px]"
								/>
							</div>
						</div>
					</div>
					<div className="menu-close-icon">
						<p>&#x2715;</p>
					</div>
					<div className="menu-copy">
						<div className="menu-links">
							{menuLinks.map((link, index) => (
								<div className="menu-link-item" key={index}>
									<div className="menu-link-item-holder" onClick={toggleMenu}>
										<a href={link.path} className="menu-link">
											{link.label}
										</a>
									</div>
								</div>
							))}
						</div>
						<div className="menu-info">
							<div className="menu-info-col">
								<a
									href="https://github.com/gibwork"
									target="_blank"
									rel="noopener noreferrer"
								>
									GitHub &#8599;
								</a>
								<a
									href="https://x.com/gib_work"
									target="_blank"
									rel="noopener noreferrer"
								>
									Twitter &#8599;
								</a>
								<a
									href="https://discord.com/invite/U3kEda4b"
									target="_blank"
									rel="noopener noreferrer"
								>
									Discord &#8599;
								</a>
								<p>info@gibwork.com</p>
								<p>+12 3456 89010</p>
							</div>
						</div>
					</div>
					<div className="menu-preview">
						<div className="menu-close" onClick={toggleMenu}>
							<p>Close</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;

export const Navlink = ({ children, path }) => {
	return (
		<a href={path}>
			<button className="px-2 py-1 rounded-[4px] hover:bg-teal-400 hover:bg-opacity-20 ease-in-out duration-500">
				{children}
			</button>
		</a>
	);
};
