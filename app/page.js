import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import ModesSection from "./components/ModeSections";
import Footer from "./components/Footer";
import BenefitsSection from "./components/Benfits";
import ShowcaseSection from "./components/Showcase";
export default function Home() {
  return (
    <div>

<Navbar/>
<HeroSection/>
<ModesSection/>
<BenefitsSection/>
<ShowcaseSection/>
<Footer/>
    </div>
  );
}
