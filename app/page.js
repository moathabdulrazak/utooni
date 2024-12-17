import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import ModesSection from "./components/ModeSections";

export default function Home() {
  return (
    <div>

<Navbar/>
<HeroSection/>
<ModesSection/>
    </div>
  );
}
