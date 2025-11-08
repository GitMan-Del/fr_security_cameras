"use client";

import Navbar from "./components/navbar";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Partners from "./components/sections/Partners";
import SectionTest from "./components/sections/Section2test";
import { ScrollHook } from "./components/SmoothScroll";
import Banners from "./components/sections/Baners";
import Reviews from "./components/sections/Reviews";
import Footer from "./components/footer";
import Image from "next/image";

const slides = [
  {
    title_fr: "Produits de Sécurité Domestique",
    title_eu: "Home Security Products",
    description_fr:
      "Détection d’intrusion sur portes, fenêtres et bris de verre, conçue pour surveiller et protéger votre maison.",
    description_eu:
      "Intrusion detection on doors, windows, and glass break, designed to monitor and protect your home.",
  },
  {
    title_fr: "Système d'Alarme Avancé",
    title_eu: "Advanced Alarm System",
    description_fr:
      "Alarme connectée avec notifications instantanées sur votre smartphone.",
    description_eu:
      "Connected alarm with instant notifications on your smartphone.",
  },
  {
    title_fr: "Caméras de Surveillance",
    title_eu: "Surveillance Cameras",
    description_fr: "Caméras HD avec vision nocturne et accès à distance.",
    description_eu: "HD cameras with night vision and remote access.",
  },
];

export default function HomePage() {
  ScrollHook();

  const [current, setCurrent] = useState(0);
  const total = slides.length;
  const [isOpen, setIsOpen] = useState(false);
  const [translate, setTranslate] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  return (
    <>
      <div className="w-full min-h-screen flex flex-col relative">
        {/* Overlay la meniu */}
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="w-full h-full bg-transparent absolute top-0 left-0 z-50"
          />
        )}
        <div className="w-full h-screen relative overflow-hidden">
          <Image
            src="/important/Background.png"
            alt="Hero background"
            fill
            priority
            quality={4000}
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* SVG curbat – animat din stânga */}
          <motion.svg
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewBox="0 0 816 71"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 left-0 w-[55%] h-auto"
          >
            <path
              d="M0 71H815.946C800.378 71 785.025 67.3654 771.11 60.3856L663.843 6.58091C655.216 2.25345 645.697 0 636.045 0H0V71Z"
              fill="#FBFBFB"
            />
          </motion.svg>

          <Navbar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            translate={translate}
            setTranslate={setTranslate}
          />

          <div className="flex flex-row items-center w-full h-full">
            {/* LEFT – Text */}
            <div className="w-full h-full flex-3 flex md:justify-start justify-center items-center md:text-left text-center md:px-[120px] px-5 border-r border-(--border2-color) relative">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="w-full flex flex-col gap-3 mx-auto items-center md:items-start"
              >
                <h1 className="text-3xl xl:text-5xl max-w-[600px] text-(--sec-color)">
                  {translate
                    ? "Best Practices  For All Homes Security Systems"
                    : " Bonnes Pratiques Pour Tous Les Systèmes De Sécurité Domestique"}
                </h1>
                <p className="text-xs xl:text-sm max-w-[500px] text-(--sec-color)">
                  {translate
                    ? "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, nknown printer took a galley of type."
                    : "Ceci est un texte factice utilisé dans l’imprimerie et la composition depuis le XVIᵉ siècle. Lorem Ipsum est devenu la norme du texte de remplissage depuis qu’un imprimeur inconnu a assemblé des caractères pour en faire un spécimen."}
                </p>
                <div className="flex items-center md:justify-start justify-center flex-row gap-4 text-sm mt-4">
                  <motion.button
                    whileHover={{
                      scale: 1.08,
                      boxShadow: "0 0 20px rgba(132,204,22,0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-lime-500 text-black font-medium rounded-full"
                  >
                    {translate
                      ? "Explore  Our Service"
                      : "Découvrez Nos Services"}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ background: "var(--sec-color)" }}
                    className="px-6 py-3 text-white font-medium rounded-full"
                  >
                    {translate ? "More About Us →" : "En Savoir Plus →"}
                  </motion.button>
                </div>
              </motion.div>

              {/* Butoane săgeți – glassmorphism + pulse */}
              <div className="absolute bottom-10 right-10 lg:flex hidden flex-row gap-3">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.1 }}
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full p-2 flex items-center justify-center bg-white/20 backdrop-blur-xl border border-white/30 cursor-pointer shadow-lg"
                >
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path
                      d="M13.3992 8.71179C13.7652 8.34573 14.3592 8.34585 14.7253 8.71179C15.0915 9.07791 15.0915 9.67185 14.7253 10.038L10.7009 14.0624H21.5623C22.08 14.0624 22.4997 14.4822 22.4998 14.9999C22.4998 15.5176 22.08 15.9374 21.5623 15.9374H10.7009L14.7253 19.9618C15.0915 20.3279 15.0915 20.9218 14.7253 21.288C14.3592 21.6541 13.7653 21.6541 13.3992 21.288L7.77417 15.663C7.40823 15.2968 7.40811 14.7029 7.77417 14.3368L13.3992 8.71179Z"
                      fill="#FBFBFB"
                    />
                  </svg>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.1 }}
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full p-2 flex items-center justify-center cursor-pointer"
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    className="rotate-180"
                  >
                    <path
                      d="M13.3992 8.71179C13.7652 8.34573 14.3592 8.34585 14.7253 8.71179C15.0915 9.07791 15.0915 9.67185 14.7253 10.038L10.7009 14.0624H21.5623C22.08 14.0624 22.4997 14.4822 22.4998 14.9999C22.4998 15.5176 22.08 15.9374 21.5623 15.9374H10.7009L14.7253 19.9618C15.0915 20.3279 15.0915 20.9218 14.7253 21.288C14.3592 21.6541 13.7653 21.6541 13.3992 21.288L7.77417 15.663C7.40823 15.2968 7.40811 14.7029 7.77417 14.3368L13.3992 8.71179Z"
                      fill="#FBFBFB"
                    />
                  </svg>
                </motion.div>
              </div>
            </div>

            {/* RIGHT – Card slider */}
            <div className="hidden lg:flex w-full h-full flex-1 min-w-[350px] xl:min-w-[200px] flex-row justify-center items-end">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ y: 10, opacity: 1, scale: 0.95 }}
                  animate={{ y: 0, scale: 1 }}
                  exit={{ y: 10, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full p-5 flex items-start justify-center flex-col h-[150px] rounded-t-3xl bg-(--background) text-(--sec-color) shadow-2xl backdrop-blur-md border border-white/10"
                >
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg font-semibold"
                  >
                    {translate
                      ? slides[current].title_eu
                      : slides[current].title_fr}
                  </motion.p>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-xs mt-2"
                  >
                    {translate
                      ? slides[current].description_eu
                      : slides[current].description_fr}
                  </motion.p>

                  {/* Progress bar animată
                  <motion.div
                    className="w-full h-1.5 bg-gray-300 rounded-full mt-5 overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                  >
                    <div className="h-full bg-lime-500 rounded-full" />
                  </motion.div> */}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>


        <Partners />
        <div className="relative h-full w-full">
          <SectionTest />
        </div>
        <Banners />
        <Reviews />
        <Footer />
      </div>
    </>
  );
}
