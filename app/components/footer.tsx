"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-(--sec-color) py-12 px-6 md:px-12 lg:px-20 border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Logo + Descriere */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-2">
            <Image
              src="/important/Logo.png"
              width={60}
              height={60}
              alt="Logo"
              className="object-cover"
            />
            <span className="font-bold text-lg text-(--background)">Vision Sécurité.</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Coloane */}
        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
          {/* Community */}
          <div>
            <span className="font-semibold text-(--background) mb-3">
              Community
            </span>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-(--background) transition">
                  Agencies & Freelancers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-(--background) transition">
                  Developers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-(--background) transition">
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <span className="font-semibold text-(--background) mb-3">Help</span>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-(--background) transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-(--background) transition">
                  Hire an Expert
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-(--background) transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-(--background) transition">
                  Talk to Sales
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <span className="font-semibold text-(--background) mb-3">
              Company
            </span>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-(--background) transition">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-(--background) transition">
                  Newsroom
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-(--background) transition">
                  Give Where You Live
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-(--background) transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-(--background) transition">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <span className="font-semibold text-(--background) mb-3">
              Products
            </span>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-(--background) transition">
                  Why Mailchimp?
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-(--background) transition">
                  Product Updates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-(--background) transition">
                  Email Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-(--background) transition">
                  Websites
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-(--background) transition">
                  Transactional Email
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-(--background) transition">
                  How We Compare
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-(--background) transition">
                  GDPR Compliance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-(--background) transition">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-(--background) transition">
                  Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-(--background) transition">
                  Mobile App
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Separator + Copyright */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>Copyright © 2025 Legalipsum. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-(--background) transition">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-(--background) transition">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
