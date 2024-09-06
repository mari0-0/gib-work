import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tiles from "./components/Tiles";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import CTASection from "./components/CTASection";

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
			<FAQ />
			<CTASection />
			<Newsletter />
			<Footer />
		</div>
	);
}
