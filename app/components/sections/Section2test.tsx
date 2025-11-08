import Image from "next/image";

export default function SectionTest() {
  return (
    <div className="w-full h-screen justify-center flex items-start">
      <h2
        style={{
          fontFamily: "unset",
        }}
        className="max-w-[550px] bg-linear-to-b from-(--background) to-(--sec-color) bg-clip-text text-transparent z-50 text-5xl text-center mt-32 font-bold"
      >
        Title about some of the Works this team done
          </h2>
              
      <Image
        src="/important/S2.png"
        alt="Tesy"
        width={1000}
        height={500}
        className="rounded-xl absolute translate-y-1/2 object-cover"
        priority
        />
          <div className="w-20 h-20 bg-(--background) rounded-full absolute bottom-20">
        </div>
          
              
    </div>
  );
}
