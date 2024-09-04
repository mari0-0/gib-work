import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tiles from "./components/Tiles";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";

// #8151fd
export default function MyApp() {
	return (
		<div className="font-inter">
			<Navbar />
			<Tiles />
			<Hero />
			<Features />
			<Testimonials />
			<Team />
			<div className="mt-[80rem]">Test</div>
			<div className="mt-[80rem]">test</div>
		</div>
	);
}
