import Image from "next/image";

export default function Reviews() {
  return (
    <div className="w-full h-screen flex items-center flex-col gap-10 ">
      <div className="flex flex-col items-center gap-10">
        <h3
          style={{
            fontFamily: "unset",
          }}
          className="max-w-[350px] bg-linear-to-b from-(--background) to-(--sec-color) bg-clip-text text-transparent z-50 text-4xl text-center mt-32 font-bold"
        >
          Read reviews, ride with confidence
        </h3>
        <div className="flex flex-row items-center justify-center gap-5">
          <p  className="mt-2">4.3/5</p>
          <Image
            src="/important/image 7.svg"
            alt="TrustPilot"
            width={150}
            height={50}
          />
          <p className="mt-2">Based on 5210 reviews</p>
        </div>
      </div>

      <div className="w-full flex flex-row items-center justify-between pl-[150px]">
        <div className="flex flex-col justify-between">
          <svg
            width="81"
            height="65"
            viewBox="0 0 81 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
          <h4
            className="max-w-[150px] text-(--background) to-(--sec-color)  text-2xl text-left tracking-tight font-medium"
            style={{
              fontFamily: "unset",
            }}
          >
            What our Customer are saying
          </h4>
              </div>
              
              <div className="w-[500px] h-[500px] bg-red-600">
                  
              </div>
      </div>
    </div>
  );
}
