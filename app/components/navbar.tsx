"use client";

import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setTranslate: Dispatch<SetStateAction<boolean>>;
  translate: boolean;
}

export default function Navbar({
  isOpen,
  setIsOpen,
  translate,
  setTranslate,
}: NavbarProps) {
  const pathname = usePathname();

  const navRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  const links = [
    { href: "/", label: translate ? "Home" : "Accueil" },
    { href: "/entreprise", label: translate ? "Company" : "Entreprise" },
    { href: "/services", label: "Services" },
    {
      href: "/actualites",
      label: translate ? "News & Media" : "Actualités & Médias",
    },
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
        <div className="flex flex-row justify-between text-white items-center px-10 w-full">
          {/* Logo */}
          <svg
            width="37"
            height="41"
            viewBox="0 0 37 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.8765 39.0487C20.3705 41.6504 16.6057 41.6504 15.0998 39.0487L11.5853 32.9768H25.3909L21.8765 39.0487ZM11.5853 32.9768H3.94124C0.929429 32.9767 -0.952997 29.7246 0.552881 27.1229L4.37453 20.5198L11.5853 32.9768ZM36.47 27.1229C37.9759 29.7247 36.0935 32.9768 33.0816 32.9768H25.3909L32.6246 20.4794L36.47 27.1229ZM4.37453 20.5198L0.529955 13.877C-0.97584 11.2753 0.906464 8.02311 3.91832 8.02311H11.609L4.37453 20.5198ZM33.0579 8.02311C36.0697 8.02311 37.9525 11.2753 36.447 13.877L32.6246 20.4794L25.4146 8.02311H33.0579ZM15.1234 1.95122C16.6295 -0.650361 20.3942 -0.650455 21.9002 1.95122L25.4146 8.02311H11.609L15.1234 1.95122Z"
              fill="#76FF1A"
            />
            <path
              d="M28.2929 19.9031C28.2929 25.2915 23.9136 29.6596 18.5114 29.6596C13.1093 29.6596 8.72996 25.2915 8.72996 19.9031C8.72996 14.5148 13.1093 10.1467 18.5114 10.1467C23.9136 10.1467 28.2929 14.5148 28.2929 19.9031Z"
              fill="#131313"
            />
            <path
              d="M21.2502 20.2934C21.2502 22.0177 19.8489 23.4155 18.1202 23.4155C16.3915 23.4155 14.9901 22.0177 14.9901 20.2934C14.9901 18.5691 16.3915 17.1713 18.1202 17.1713C19.8489 17.1713 21.2502 18.5691 21.2502 20.2934Z"
              fill="#76FF1A"
            />
            <path
              d="M21.8765 39.0487C20.3705 41.6504 16.6057 41.6504 15.0998 39.0487L11.5853 32.9768H25.3909L21.8765 39.0487ZM11.5853 32.9768H3.94124C0.929429 32.9767 -0.952997 29.7246 0.552881 27.1229L4.37453 20.5198L11.5853 32.9768ZM36.47 27.1229C37.9759 29.7247 36.0935 32.9768 33.0816 32.9768H25.3909L32.6246 20.4794L36.47 27.1229ZM4.37453 20.5198L0.529955 13.877C-0.97584 11.2753 0.906464 8.02311 3.91832 8.02311H11.609L4.37453 20.5198ZM33.0579 8.02311C36.0697 8.02311 37.9525 11.2753 36.447 13.877L32.6246 20.4794L25.4146 8.02311H33.0579ZM15.1234 1.95122C16.6295 -0.650361 20.3942 -0.650455 21.9002 1.95122L25.4146 8.02311H11.609L15.1234 1.95122Z"
              fill="#76FF1A"
            />
            <path
              d="M28.2929 19.9031C28.2929 25.2915 23.9136 29.6596 18.5114 29.6596C13.1093 29.6596 8.72996 25.2915 8.72996 19.9031C8.72996 14.5148 13.1093 10.1467 18.5114 10.1467C23.9136 10.1467 28.2929 14.5148 28.2929 19.9031Z"
              fill="#131313"
            />
            <path
              d="M21.2502 20.2934C21.2502 22.0177 19.8489 23.4155 18.1202 23.4155C16.3915 23.4155 14.9901 22.0177 14.9901 20.2934C14.9901 18.5691 16.3915 17.1713 18.1202 17.1713C19.8489 17.1713 21.2502 18.5691 21.2502 20.2934Z"
              fill="#76FF1A"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.1202 3.12207C27.628 3.12207 35.3356 10.81 35.3356 20.2935C35.3356 29.777 27.628 37.4649 18.1202 37.4649C8.61238 37.4649 0.904786 29.777 0.904786 20.2935C0.904786 10.81 8.61238 3.12207 18.1202 3.12207ZM18.1202 3.68917C8.92656 3.68917 1.47333 11.1234 1.47333 20.2935C1.47333 29.4636 8.92656 36.8978 18.1202 36.8978C27.3138 36.8978 34.767 29.4636 34.767 20.2935C34.767 11.1234 27.3138 3.68917 18.1202 3.68917Z"
              fill="#131313"
            />
          </svg>

          {/* ----------------- NAV ----------------- */}
          <nav className="lg:flex hidden relative mt-5 space-x-8" ref={navRef}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm pb-10 translate-y-2 transition-colors ${
                  pathname === link.href
                    ? "text-(--primary)"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Indicator lime */}
            <div
              ref={indicatorRef}
              className="absolute bottom-0 h-0.5 bg-lime-500 transition-all duration-300 ease-out"
              style={{ left: 0, width: 0 }}
            />
          </nav>

          {/* ICONS + LANGUAGE */}
          <div className="hidden items-center gap-4 xl:relative xl:flex">
            {/* … (search, cart, flag) … */}
            {isOpen && (
              <div className="absolute top-10 right-0 w-[110px] rounded-2xl bg-(--background) p-3 space-y-3">
                {/* France */}
                <button
                  className="flex items-center gap-2 w-full text-left"
                  onClick={() => {
                    setTranslate(false);
                    setIsOpen(false);
                  }}
                >
                  <Image
                    src="/fr_flag.png"
                    alt="FR"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  France
                </button>

                {/* English */}
                <button
                  className="flex items-center gap-2 w-full text-left"
                  onClick={() => {
                    setTranslate(true);
                    setIsOpen(false);
                  }}
                >
                  <Image
                    src="/eu_flag.png"
                    alt="EN"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  English
                </button>
              </div>
            )}

            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7422 10.3439C12.5329 9.2673 13 7.9382 13 6.5C13 2.91015 10.0899 0 6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C7.93858 13 9.26801 12.5327 10.3448 11.7415L10.3439 11.7422C10.3734 11.7822 10.4062 11.8204 10.4424 11.8566L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L11.8566 10.4424C11.8204 10.4062 11.7822 10.3734 11.7422 10.3439ZM12 6.5C12 9.53757 9.53757 12 6.5 12C3.46243 12 1 9.53757 1 6.5C1 3.46243 3.46243 1 6.5 1C9.53757 1 12 3.46243 12 6.5Z"
                fill="#FBFBFB"
              />
            </svg>

            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0.5C0 0.223858 0.223858 0 0.5 0H2C2.22943 0 2.42943 0.156149 2.48507 0.378732L2.89039 2H14.5C14.6487 2 14.7898 2.06622 14.8848 2.18068C14.9797 2.29514 15.0188 2.44595 14.9914 2.59214L13.4914 10.5921C13.4471 10.8286 13.2406 11 13 11H12H5H4C3.75939 11 3.55291 10.8286 3.50856 10.5921L2.01131 2.6068L1.60961 1H0.5C0.223858 1 0 0.776142 0 0.5ZM5 11C3.89543 11 3 11.8954 3 13C3 14.1046 3.89543 15 5 15C6.10457 15 7 14.1046 7 13C7 11.8954 6.10457 11 5 11ZM12 11C10.8954 11 10 11.8954 10 13C10 14.1046 10.8954 15 12 15C13.1046 15 14 14.1046 14 13C14 11.8954 13.1046 11 12 11ZM5 12C5.55228 12 6 12.4477 6 13C6 13.5523 5.55228 14 5 14C4.44772 14 4 13.5523 4 13C4 12.4477 4.44772 12 5 12ZM12 12C12.5523 12 13 12.4477 13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12Z"
                fill="#FBFBFB"
              />
            </svg>

            {/* Flag toggle */}
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

      {/* RIGHT SIDE (phone + CTA) */}
      <div className="lg:flex hidden items-center lg:flex-2 xl:flex-1 justify-between text-white w-full h-full max-w-[300px]">
        <div className="flex items-center gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.88477 0.511076C2.62689 -0.231039 3.85149 -0.154797 4.49583 0.673634L6.28954 2.97983C6.6187 3.40304 6.73502 3.95409 6.60498 4.47423L6.05772 6.66329C5.99994 6.8944 6.06766 7.13888 6.2361 7.30732L8.69268 9.7639C8.86113 9.93235 9.1056 10.0001 9.33671 9.94229L11.5258 9.39502C12.0459 9.26499 12.597 9.3813 13.0202 9.71047L15.3264 11.5042C16.1548 12.1485 16.231 13.3731 15.4889 14.1152L14.455 15.1492C13.7153 15.8889 12.6089 16.2137 11.5778 15.8512C9.01754 14.9511 6.61438 13.4774 4.56849 11.4315C2.5226 9.38562 1.04895 6.98246 0.148838 4.42225C-0.213682 3.39112 0.11113 2.28472 0.85085 1.545L1.88477 0.511076Z"
              fill="#FBFBFB"
            />
          </svg>
          <p>+3360312997</p>
        </div>

        <button className="rounded bg-lime-500 px-4 py-2 font-medium text- hover:bg-lime-400 transition">
          {translate ? "Get a Quote" : "Demander un Devis"}
        </button>
      </div>
    </div>
  );
}
