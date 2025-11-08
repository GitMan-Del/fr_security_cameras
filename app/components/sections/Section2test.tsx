import Image from "next/image";

export default function SectionTest() {
  return (
    <div className="w-full md:h-screen h-fit flex py-10 justify-center items-center">
      <div className="max-w-7xl w-full h-[500px] md:p-0 p-2 flex flex-col items-center justify-center">
        <div className="flex w-full h-full justify-center relative">
        <h2
          style={{
            fontFamily: "unset",
          }}
          className="max-w-[550px] bg-linear-to-b from-(--background) to-(--sec-color) bg-clip-text text-transparent z-50 md:text-5xl text-4xl text-center mt-32 font-bold absolute md:-top-40 -top-10"
        >
          Title about some of the Works this team done
        </h2>
         <Image
        src="/important/S2.png"
        alt="Tesy"
        fill
        className="rounded-xl absolute object-contain"
        priority
          />
          
          <div className="w-20 h-20 bg-(--background) absolute md:-bottom-10 bottom-24 rounded-full z-53 ">
        </div>

        </div>
      </div>
    </div>
  );
}
