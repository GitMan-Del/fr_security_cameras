"use client";

import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageContext"; // adjust path if needed

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar({ isOpen, setIsOpen }: NavbarProps) {
  const pathname = usePathname();
  const { translate, setTranslate } = useLanguage(); // preluăm din context

  const navRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);


  const links = [
    { href: "/", label: translate ? "Home" : "Accueil" },
    { href: "/entreprise", label: translate ? "Company" : "Entreprise" },
    { href: "/services", label: "Services" },
    { href: "/actualites", label: translate ? "News & Media" : "Actualités & Médias" },
    { href: "/boutique", label: translate ? "Shop" : "Boutique" },
    { href: "/contact", label: "Contact" },
  ];

  useLayoutEffect(() => {
    const active = navRef.current?.querySelector(
      `a[href="${pathname}"]`
    ) as HTMLAnchorElement | null;

    if (!active || !indicatorRef.current) return;

    const { offsetLeft, offsetWidth } = active;
    indicatorRef.current.style.left = `${offsetLeft}px`;
    indicatorRef.current.style.width = `${offsetWidth}px`;
  }, [pathname, translate]);

  return (
    <div className="w-full text-sm min-h-[50px] justify-between flex flex-row absolute top-0 right-0 items-center border-b border-(--border2-color) z-50">
      {/* LOGO + NAV */}
      <div className="flex-4 flex items-center max-w-[1200px]">
        <div className="flex flex-row justify-between text-(--sec-color) items-center p-4 md:p-0 md:px-10 w-full">
          {/* Logo */}
          <svg width="37" height="41" viewBox="0 0 37 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* SVG-ul tău rămâne neschimbat */}
          </svg>

          {/* NAV */}
          <nav className="lg:flex hidden relative mt-5 space-x-8" ref={navRef}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm pb-10 translate-y-2 transition-colors ${
                  pathname === link.href
                    ? "text-(--primary)"
                    : "text-gray-300 hover:text-(--sec-color)"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div
              ref={indicatorRef}
              className="absolute bottom-0 h-0.5 bg-lime-500 transition-all duration-300 ease-out"
              style={{ left: 0, width: 0 }}
            />
          </nav>

          {/* ICONS + LANGUAGE */}
          <div className="hidden items-center gap-4 xl:relative xl:flex">
            {isOpen && (
              <div className="absolute top-10 right-0 w-[110px] rounded-2xl bg-(--background) p-3 space-y-3">
                <button
                  className="flex items-center gap-2 w-full text-left"
                  onClick={() => {
                    setTranslate(false);
                    setIsOpen(false);
                  }}
                >
                  <Image src="/fr_flag.png" alt="FR" width={40} height={40} className="rounded-full" />
                  France
                </button>

                <button
                  className="flex items-center gap-2 w-full text-left"
                  onClick={() => {
                    setTranslate(true);
                    setIsOpen(false);
                  }}
                >
                  <Image src="/eu_flag.png" alt="EN" width={40} height={40} className="rounded-full" />
                  English
                </button>
              </div>
            )}

            <div
              onClick={() => setIsOpen((p) => !p)}
              className="w-5 h-5 rounded-full border border-white cursor-pointer"
              style={{
                backgroundImage: `url('/${translate ? "eu" : "fr"}_flag.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:flex hidden items-center lg:flex-2 xl:flex-1 justify-between text-(--sec-color) w-full h-full max-w-[300px]">
        <div className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.88477 0.511076C2.62689 -0.231039 3.85149 -0.154797 4.49583 0.673634L6.28954 2.97983C6.6187 3.40304 6.73502 3.95409 6.60498 4.47423L6.05772 6.66329C5.99994 6.8944 6.06766 7.13888 6.2361 7.30732L8.69268 9.7639C8.86113 9.93235 9.1056 10.0001 9.33671 9.94229L11.5258 9.39502C12.0459 9.26499 12.597 9.3813 13.0202 9.71047L15.3264 11.5042C16.1548 12.1485 16.231 13.3731 15.4889 14.1152L14.455 15.1492C13.7153 15.8889 12.6089 16.2137 11.5778 15.8512C9.01754 14.9511 6.61438 13.4774 4.56849 11.4315C2.5226 9.38562 1.04895 6.98246 0.148838 4.42225C-0.213682 3.39112 0.11113 2.28472 0.85085 1.545L1.88477 0.511076Z" fill="#FBFBFB" />
          </svg>
          <p>+3360312997</p>
        </div>

        <button className="rounded bg-lime-500 px-4 py-2 font-medium text-black hover:bg-lime-400 transition">
          {translate ? "Get a Quote" : "Demander un Devis"}
        </button>
      </div>
    </div>
  );
}