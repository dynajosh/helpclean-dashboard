import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import NavBar from "./navbar/NavBar";
import MobileNav from "./navbar/MobileNav";
import HeroSection from "./hero-section/HeroSection";
import AboutSection from "./about-section/AboutSection";
import Footer from "./footer-section/Footer";

export default function HomePage() {
  const isMobile = useMediaQuery({
    query: "(max-width: 800px)",
  });
  const [mobileNavActive, setMobileNavActive] = useState(false);

  return (
    <>
      <NavBar
        mobileNavActive={mobileNavActive}
        setMobileNavActive={setMobileNavActive}
      />
      {isMobile && <MobileNav mobileNavActive={mobileNavActive} />}
      <HeroSection />
      <AboutSection />
      <Footer />
    </>
  );
}
