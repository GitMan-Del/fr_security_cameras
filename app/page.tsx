"use client";

import Partners from "./components/sections/Partners";
import SectionTest from "./components/sections/Section2test";
import { ScrollHook } from "./components/SmoothScroll";
import Banners from "./components/sections/Baners";
import Reviews from "./components/sections/Reviews";
import Footer from "./components/footer";
import TeamSection from "./components/sections/Team";
import Hero from "./components/sections/Hero";
import Map from "./components/sections/Map";

export default function HomePage() {
  ScrollHook();

  return (
    <>
      <Hero />
      <Partners />
      <SectionTest />
      <Banners />
      <Reviews />
      <TeamSection />
      <Map />
      <Footer />
    </>
  );
}
