"use client";

export default function Footer() {
  return (
    <footer className="bg-(--sec-color) py-12 px-6 md:px-12 lg:px-20 border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Logo + Descriere */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-2">
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
            <span className="font-bold text-lg text-(--background)">Logo.</span>
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
