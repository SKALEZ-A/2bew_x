import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWork from "@/components/HowItWork";
import HowTOEarn from "@/components/HowToEarn";
import Contact from "@/components/parts/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#15152E]">
          <Header />
      <div className="max-w-[1000px] m-0 p-0   mx-auto w-full text-white h-full ">
        <div className="z-[40] relative">
          <Hero />
          <HowItWork />
          <HowTOEarn />
          <Contact />
          <div className="lg:relative m-auto h-full">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
