import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


// #8151fd
export default function MyApp() {
	return (
		<div className="font-inter">
			<Navbar />
      <div className="bg-hero lg:h-[3000px] lg:pb-0 min-h-[2000px] pb-120">
        <Hero />
      </div>
		</div>
	);
}
