import Image from "next/image";

import { useEffect, useState, useRef } from "react";

const TestimonialBubble = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-full h-auto">
    <div className="absolute"></div>
    <svg
      className="w-full h-auto min-w-[370px]"
      viewBox="0 0 370 302"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0.000553489 10.0814C-0.0446785 4.52695 4.44555 0 10.0002 0H359.918C365.441 0 369.918 4.47715 369.918 10V262.061C369.918 267.56 365.478 272.027 359.979 272.061L41.9185 274L10.5378 300.217C7.29697 302.924 2.36669 300.643 2.3323 296.42L0.000553489 10.0814Z"
        fill="white"
      />
      <path
        d="M10.0005 0.5H359.918C365.165 0.5 369.418 4.7533 369.418 10V262.061C369.418 267.285 365.2 271.529 359.976 271.561L41.9155 273.5L41.7358 273.501L41.5981 273.616L10.2173 299.833C7.30049 302.27 2.86347 300.217 2.83252 296.416L0.500488 10.0771C0.458981 4.96548 4.46082 0.770076 9.5083 0.512695L10.0005 0.5Z"
        stroke="#DEDEDE"
        strokeOpacity="0.42"
      />
    </svg>
    <div className="absolute inset-0  flex items-start justify-center p-8">
      {children}
    </div>
  </div>
);

// Date testimoniale
const testimonials = [
  {
    id: 1,
    name: "Amelia",
    time: "Tow hours ago",
    image: "/important/profile_pictures/Amelia.png",
    text: "“Top-quality installation and customer care. They recommended the best camera positions for my home and completed the job on time. Clear footage, reliable system, and fair pricing. I’d definitely hire them again.”",
  },
  {
    id: 2,
    name: "Alex Margi",
    time: "Tow weeks ago",
    image: "/important/profile_pictures/Alex.png",
    text: "“Excellent service from start to finish. The technicians installed my security cameras quickly and neatly. They explained how to use the system and even adjusted the angles for full coverage. I feel much safer now.lent service from start to finish. The technicians installed my securitlent service from start to finish. The technicians installed my security cameras quickly and neatly.”",
  },
  {
    id: 3,
    name: "Peter D.",
    time: "Tow weeks ago",
    image: "/important/profile_pictures/Peter.png",
    text: "“Professional and fast CCTV installation. The team arrived on time, explained every step, and set up everything perfectly. The image quality is crystal clear. Highly recommend their reliable service.”",
  },
  {
    id: 4,
    name: "George Radu",
    time: "One week ago",
    image: "/avatar4.jpg",
    text: "Echipa este mereu disponibilă și atentă la detalii.",
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Navigare
  const goToPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Scroll sincronizat cu index
  useEffect(() => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.children[0].clientWidth;
      const gap = 24; // gap-6 = 1.5rem = 24px
      carouselRef.current.scrollTo({
        left: (slideWidth + gap) * currentIndex,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className="w-full md:min-h-screen h-fit flex items-center flex-col gap-10 ">
      <div className="flex flex-col items-center gap-10">
        <h3
          style={{
            fontFamily: "unset",
          }}
          className="md:max-w-[410px] max-w-[350px] bg-linear-to-b from-(--2-sec) from-60% to-(--sec-color) bg-clip-text text-transparent z-50 text-4xl md:text-5xl text-center mt-32 font-bold"
        >
          Read reviews, ride with confidence
        </h3>
        <div className="flex flex-row items-center justify-center gap-5">
          <p className="mt-2 md:text-base text-xs">4.3/5</p>
          <Image
            src="/important/trustpilot_logo.svg"
            alt="TrustPilot"
            width={150}
            height={50}
            className="max-w-28 h-10 md:w-[150px] md:h-[50px]"
          />
          <p className="mt-2 md:text-base text-xs">Based on 5210 reviews</p>
        </div>
      </div>

      <div className="w-full h-full flex flex-2 flex-row items-center gap-10 pl-10 md:pl-[150px]">
        <div className="flex-1 flex-col md:flex hidden gap-10">
          {/* Quotation SVG */}
          <svg
            width="81"
            height="65"
            viewBox="0 0 81 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M78 23.3389H67.5C66.3954 23.3389 65.5 22.4435 65.5 21.3389V17.6855C65.5 16.8207 66.0559 16.0538 66.8778 15.7848L76.8666 12.5151C79.3323 11.708 81 9.40736 81 6.81282V4C81 1.79086 79.2091 0 77 0H67.5489C66.2206 0 64.9299 0.440771 63.879 1.25322L52.267 10.2308C47.3682 14.0183 44.5 19.8612 44.5 26.0534V59.9283C44.5 62.1375 46.2909 63.9283 48.5 63.9283H73C77.4183 63.9283 81 60.3466 81 55.9283V26.3389C81 24.6821 79.6569 23.3389 78 23.3389Z"
              fill="#76FF1A"
            />
            <path
              d="M33.5 23.8465H23C21.8954 23.8465 21 22.951 21 21.8465V18.1931C21 17.3282 21.5559 16.5614 22.3778 16.2923L32.3666 13.0227C34.8323 12.2155 36.5 9.91493 36.5 7.32039V4.50757C36.5 2.29843 34.7091 0.507568 32.5 0.507568H23.0489C21.7206 0.507568 20.4299 0.94834 19.379 1.76079L7.76705 10.7384C2.86822 14.5258 0 20.3688 0 26.561V60.4359C0 62.645 1.79086 64.4359 4 64.4359H28.5C32.9183 64.4359 36.5 60.8542 36.5 56.4359V26.8465C36.5 25.1896 35.1569 23.8465 33.5 23.8465Z"
              fill="#76FF1A"
            />
          </svg>

          {/* Heading */}
          <h4
            className="max-w-[150px] text-2xl text-left tracking-tight font-medium text-(--background)"
            style={{ fontFamily: "inherit" }}
          >
            What our Customers are saying
          </h4>

          {/* Navigation Controls */}
          <div className="flex w-full flex-row items-center justify-between gap-4 mt-6">
            {/* Left Arrow */}
            <button
              style={{
                background: "unset",
                padding: "unset",
              }}
              onClick={goToPrev}
              aria-label="Previous testimonial"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path
                  d="M13.3992 8.71179C13.7652 8.34573 14.3592 8.34585 14.7253 8.71179C15.0915 9.07791 15.0915 9.67185 14.7253 10.038L10.7009 14.0624H21.5623C22.08 14.0624 22.4997 14.4822 22.4998 14.9999C22.4998 15.5176 22.08 15.9374 21.5623 15.9374H10.7009L14.7253 19.9618C15.0915 20.3279 15.0915 20.9218 14.7253 21.288C14.3592 21.6541 13.7653 21.6541 13.3992 21.288L7.77417 15.663C7.40823 15.2968 7.40811 14.7029 7.77417 14.3368L13.3992 8.71179Z"
                  fill="#1F2937"
                />
              </svg>
            </button>

            {/* Divider */}
            <hr className="w-full border-t border-2 border-gray-300" />

            {/* Right Arrow */}
            <button
              style={{
                background: "unset",
                padding: "unset",
              }}
              aria-label="Next testimonial"
              onClick={goToNext}
              className="p-2 rounded-full transition-colors rotate-180"
            >
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path
                  d="M13.3992 8.71179C13.7652 8.34573 14.3592 8.34585 14.7253 8.71179C15.0915 9.07791 15.0915 9.67185 14.7253 10.038L10.7009 14.0624H21.5623C22.08 14.0624 22.4997 14.4822 22.4998 14.9999C22.4998 15.5176 22.08 15.9374 21.5623 15.9374H10.7009L14.7253 19.9618C15.0915 20.3279 15.0915 20.9218 14.7253 21.288C14.3592 21.6541 13.7653 21.6541 13.3992 21.288L7.77417 15.663C7.40823 15.2968 7.40811 14.7029 7.77417 14.3368L13.3992 8.71179Z"
                  fill="#1F2937"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Testimonial Content Area */}
        <div
           style={{
        scrollbarWidth: "none",
      }}
          className="w-full h-fit flex-5 flex flex-row gap-5 p-10 overflow-y-hidden overflow-scroll ">
          {testimonials.map((testimonials, index) => (
            <TestimonialBubble key={index}>
              <div className="flex pl-2 flex-col justify-between w-full h-full">
                <span className="text-[13px]">{testimonials.text}</span>
                <svg
                  width="78"
                  height="14"
                  viewBox="0 0 78 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-5"
                >
                  <path
                    d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z"
                    fill="#00B67A"
                  />
                  <path
                    d="M23 0L24.5716 4.83688H29.6574L25.5429 7.82624L27.1145 12.6631L23 9.67376L18.8855 12.6631L20.4571 7.82624L16.3426 4.83688H21.4284L23 0Z"
                    fill="#00B67A"
                  />
                  <path
                    d="M39 0L40.5716 4.83688H45.6574L41.5429 7.82624L43.1145 12.6631L39 9.67376L34.8855 12.6631L36.4571 7.82624L32.3426 4.83688H37.4284L39 0Z"
                    fill="#00B67A"
                  />
                  <path
                    d="M55 0L56.5716 4.83688H61.6574L57.5429 7.82624L59.1145 12.6631L55 9.67376L50.8855 12.6631L52.4571 7.82624L48.3426 4.83688H53.4284L55 0Z"
                    fill="#00B67A"
                  />
                  <path
                    d="M71 0L72.5716 4.83688H77.6574L73.5429 7.82624L75.1145 12.6631L71 9.67376L66.8855 12.6631L68.4571 7.82624L64.3426 4.83688H69.4284L71 0Z"
                    fill="#00B67A"
                  />
                </svg>
              </div>

              <div className="absolute flex flex-row -bottom-7 left-10 gap-3 ">
                <Image
                  src={testimonials.image}
                  alt={testimonials.image + "1"}
                  width={50}
                  height={50}
                />
                <div className="flex flex-col text-(--2-sec)">
                  <span className="text-base text-(--background)">
                    {testimonials.name}
                  </span>
                  <span className="text-xs">{testimonials.time}</span>
                </div>
              </div>
            </TestimonialBubble>
          ))}
        </div>
      </div>
    </div>
  );
}
