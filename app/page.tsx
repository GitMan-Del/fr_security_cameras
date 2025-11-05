"use client";

import Image from "next/image";
import Navbar from "./components/navbar";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollHook } from "./components/SmoothScroll";
import CountUp from "react-countup";
const ShieldIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const CameraIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const ClockIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

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

  // Auto‑play stabil
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <>
      <div className="w-full min-h-screen flex flex-col relative">
        {/* Overlay blur la meniu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="w-full h-full bg-black/30 backdrop-blur-sm absolute top-0 left-0 z-50"
            />
          )}
        </AnimatePresence>

        <div
          className="w-full h-screen relative overflow-hidden"
          style={{
            backgroundImage: "url('/Background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
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
            <div className="w-full h-full flex-3 flex items-center px-[120px] border-r border-(--border2-color) relative">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="w-full flex flex-col gap-3"
              >
                <h1 className="text-5xl max-w-[600px] text-(--sec-color)">
                  {translate
                    ? "Best Practices  For All Homes Security Systems"
                    : " Bonnes Pratiques Pour Tous Les Systèmes De Sécurité Domestique"}
                </h1>
                <p className="text-sm max-w-[500px] text-(--sec-color)">
                  {translate
                    ? "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, nknown printer took a galley of type."
                    : "Ceci est un texte factice utilisé dans l’imprimerie et la composition depuis le XVIᵉ siècle. Lorem Ipsum est devenu la norme du texte de remplissage depuis qu’un imprimeur inconnu a assemblé des caractères pour en faire un spécimen."}
                </p>
                <div className="flex flex-row gap-4 text-sm mt-4">
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
              <div className="absolute bottom-10 right-10 flex flex-row gap-3">
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
            <div className="w-full h-full flex flex-1 flex-row justify-center items-end">
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

                  {/* Progress bar animată */}
                  <motion.div
                    className="w-full h-1.5 bg-gray-300 rounded-full mt-5 overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                  >
                    <div className="h-full bg-lime-500 rounded-full" />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-screen bg-(--sec-color) items-center px-[120px] flex flex-row justify-between"
        >
          {/* === IMAGINEA – PORTRAIT (3:4) === */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="shrink-0"
          >
            <div className="relative w-[300px] h-[400px] md:w-[340px] md:h-[453px] lg:w-[380px] lg:h-[506px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/Background.png"
                alt="Background"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* === TEXTUL – 100% CA LA TINE === */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-3 items-end"
          >
            <h2 className="text-5xl text-(--2-sec) max-w-[600px] text-right">
              {translate
                ? "Who are we? Security experts for over 10 years."
                : "Qui sommes-nous, experts en sécurité depuis 10 ans ?"}
            </h2>
            <p className="text-sm max-w-[550px] text-right">
              {translate
                ? "We specialize in installing, maintaining, and monitoring security systems for homes and businesses. For over 10 years, we’ve kept families, shops, and offices safe with cutting-edge solutions: IP cameras, smart alarms, remote access, and more."
                : "Notre entreprise est spécialisée dans l’installation, la maintenance et la supervision de systèmes de sécurité pour particuliers et professionnels. Depuis plus d’une décennie, nous protégeons les foyers, les commerces et les bureaux grâce à des solutions modernes et fiables : caméras IP, alarmes connectées, contrôle à distance et plus encore."}
            </p>
            <div className="flex flex-row gap-4 text-sm mt-4">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-(--primary) text-black font-medium rounded-full"
              >
                {translate ? "Explore  Our Service" : "Découvrez Nos Services"}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: "var(--2-sec)",
                  color: "var(--sec-color)",
                }}
                className="px-6 py-3 font-medium rounded-full"
              >
                {translate ? "More About Us" : "En Savoir Plus"}
              </motion.button>
            </div>
          </motion.div>
        </motion.section>

        <section className="w-full py-20 bg-(--background) relative px-[120px] flex items-center flex-col gap-20 overflow-hidden">
          {/* Subtle animated gradient background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-linear-to-br from-(--primary)/10 via-transparent to-(--primary)/5" />
          </div>

          <div className="w-full flex flex-row items-center justify-between relative z-10">
            <h2 className="text-4xl lg:text-5xl font-normal text-(--sec-color) leading-tight max-w-[700px]">
              Boutique : <span className="text-(--primary)">équipez</span> votre
              <br />
              maison en toute <span className="text-(--primary)">sécurité</span>
            </h2>

            <p className="text-sm text-(--sec-color) max-w-md text-right leading-relaxed">
              Découvrez notre sélection de produits de sécurité les plus
              demandés : caméras IP, alarmes connectées, détecteurs de
              mouvement, enregistreurs et accessoires. Tous nos équipements sont
              testés, certifiés et faciles à installer.
            </p>
          </div>

          {/* GRID cu 4 statistici – DARK MODE MISTO */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full relative z-10">
            {[
              {
                value: 10,
                suffix: "+",
                label: "Années d'expérience",
                sub: "Depuis 2015",
              },
              {
                value: 2850,
                suffix: "+",
                label: "Caméras installées",
                sub: "IP & 4K",
              },
              {
                value: 98,
                suffix: "%",
                label: "Clients satisfaits",
                sub: "Avis 5 étoiles",
              },
              {
                value: 24,
                suffix: "/7",
                label: "Support disponible",
                sub: "Intervention rapide",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ y: 60, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-(--2-sec)/80 backdrop-blur-xl rounded-3xl p-8 border border-(--border2-color) overflow-hidden transition-all duration-500 group-hover:border-(--primary)/40 group-hover:shadow-2xl group-hover:-translate-y-3">
                  {/* Shimmer line */}
                  <motion.div
                    className="absolute top-0 left-0 h-px bg-linear-to-r from-transparent via-(--primary) to-transparent"
                    animate={{ x: [-100, 400] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <div className="relative z-10 text-center">
                    <div className="text-5xl lg:text-6xl font-bold text-(--primary) mb-3 drop-shadow-lg">
                      <CountUp
                        end={stat.value}
                        duration={2.8}
                        suffix={stat.suffix}
                      />
                    </div>
                    <p className="text-(--sec-color) font-semibold text-lg tracking-wide">
                      {stat.label}
                    </p>
                    <p className="text-(--sec-color)/50 text-sm mt-1">
                      {stat.sub}
                    </p>
                  </div>

                  {/* Icon subtle glow */}
                  <div className="absolute top-4 right-4 text-(--primary)/20">
                    {i === 0 && <ShieldIcon />}
                    {i === 1 && <CameraIcon />}
                    {i === 2 && <StarIcon />}
                    {i === 3 && <ClockIcon />}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
