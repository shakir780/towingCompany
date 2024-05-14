"use client";
import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import Metrics from "@/components/Metrics";
import OurExpertTeam from "@/components/OurExpertTeam";
import OurServices from "@/components/OurServices";
import OurGallery from "@/components/OurGallery";
import ReadyToHelp from "@/components/ReadyToHelp";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AboutUs />
      <Metrics />
      <OurServices />
      <OurExpertTeam />
      <OurGallery />
      <ReadyToHelp />
      <Pricing />
      <Footer />
    </div>
  );
}
