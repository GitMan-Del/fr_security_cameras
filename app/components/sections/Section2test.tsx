import Image from "next/image";
import { useLanguage } from "../LanguageContext";

export default function SectionTest() {
  const { translate } = useLanguage();

  return (
    <div className="w-full md:h-screen h-[50vh] flex py-10 justify-center items-center">
      <div className="max-w-7xl w-full h-[500px] md:p-0 p-2 flex flex-col items-center justify-center">
        <div className="flex w-full h-full justify-center relative">
          <h2
            style={{
              fontFamily: "unset",
            }}
            className={` ${
              translate ? "" : "max-w-[650px]"
            } max-w-[450px] bg-linear-to-b from-(--2-sec) to-(--sec-color) bg-clip-text text-transparent z-50 md:text-5xl from-60% text-4xl text-center mt-32 font-bold absolute md:-top-40 -top-10`}
          >
            {translate
              ? "Projects that define our expertise"
              : "Des projets qui définissent notre expertise"}
          </h2>
          <Image
            src="/important/S2.png"
            alt="Tesy"
            fill
            className="rounded-xl absolute object-contain"
            priority
          />

          <div className="w-20 h-20 bg-(--background) flex items-center justify-center absolute md:-bottom-10 bottom-24 rounded-full z-53 ">
            <svg
              width="57"
              height="57"
              viewBox="0 0 57 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5527 31.5413C15.8572 30.8457 15.8573 29.7174 16.5527 29.0217C17.2484 28.3261 18.3766 28.3261 19.0723 29.0217L26.7188 36.6682L26.7188 16.0315C26.7188 15.0478 27.5164 14.2504 28.5 14.2502C29.4838 14.2502 30.2813 15.0477 30.2813 16.0315L30.2813 36.6682L37.9277 29.0217C38.6234 28.3261 39.7516 28.3261 40.4473 29.0217C41.1429 29.7173 41.1429 30.8456 40.4473 31.5413L29.7598 42.2288C29.0641 42.9241 27.9358 42.9243 27.2402 42.2288L16.5527 31.5413Z"
                fill="#FBFBFB"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
