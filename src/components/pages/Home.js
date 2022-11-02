import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import Footer from "../Footer";
import { AccountancyHero } from "../AccountancyHero";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <AccountancyHero />
      <Footer />
    </>
  );
}

export default Home;
