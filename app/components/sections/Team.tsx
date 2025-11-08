import Image from "next/image";

interface TeamMember {
  id: string;
  name: string;
  passion: string[];
  age: string;
  describe: string;
  photo: string;
  active: boolean;
}

export default function TeamSection() {
  const members: TeamMember[] = [
    {
      id: "1",
      name: "Jonny Frisbee",
      passion: ["CEO of GoZ", "Creative"],
      age: "23",
      describe:
        "Door, Windows, and glass Break Detection designed to monitor and protect our house",
      photo: "/important/profile_pictures/TeamCEO2.png", // Replace with actual image path
      active: true,
    },
    {
      id: "2",
      name: "Camille Dupont",
      passion: ["Marketing", "Sports"],
      age: "23",
      describe:
        "Door, Windows, and glass Break Detection designed to monitor and protect our house",
      photo: "/important/profile_pictures/Team2.png", // Replace with actual image path
      active: false,
    },
    {
      id: "3",
      name: "Jonny Frisbee",
      passion: ["CEO of GoZ", "Creative"],
      age: "23",
      describe:
        "Door, Windows, and glass Break Detection designed to monitor and protect our house",
      photo: "/important/profile_pictures/TeamCEO2.png", // Replace with actual image path
      active: false,
    },
    {
      id: "4",
      name: "Julien Martin",
      passion: ["CTO", "Innovator"],
      age: "29",
      describe: "Leading tech innovation with cutting-edge solutions",
      photo: "/important/profile_pictures/TeamCEO2.png",
      active: false,
    },
    // Add more members as needed
  ];

  return (
    <div className="w-full min-h-screen py-20 flex flex-col gap-20 max-w-7xl mx-auto">
      <div className="flex flex-row w-full justify-center md:justify-between">
        <h4
          style={{
            fontFamily: "unset",
          }}
          className="md:max-w-[550px] max-w-[450px] bg-linear-to-b from-(--2-sec) to-(--sec-color) from-60% bg-clip-text text-transparent z-50 text-4xl md:text-5xl text-center md:text-left font-bold"
        >
          Title about the team and more informations
        </h4>
        <div className="md:flex hidden flex-row gap-3 items-center justify-center">
          {/* Left Arrow */}
          <button
            style={{
              background: "var(--background)",
              padding: "10px",
              borderRadius: "100px",
            }}
            aria-label="Previous Team Member"
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path
                d="M13.3992 8.71179C13.7652 8.34573 14.3592 8.34585 14.7253 8.71179C15.0915 9.07791 15.0915 9.67185 14.7253 10.038L10.7009 14.0624H21.5623C22.08 14.0624 22.4997 14.4822 22.4998 14.9999C22.4998 15.5176 22.08 15.9374 21.5623 15.9374H10.7009L14.7253 19.9618C15.0915 20.3279 15.0915 20.9218 14.7253 21.288C14.3592 21.6541 13.7653 21.6541 13.3992 21.288L7.77417 15.663C7.40823 15.2968 7.40811 14.7029 7.77417 14.3368L13.3992 8.71179Z"
                fill="var(--sec-color)"
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            style={{
              background: "var(--background)",
              padding: "10px",
              borderRadius: "100px",
            }}
            aria-label="Next testimonial"
            className="p-2 rounded-full transition-colors rotate-180"
          >
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path
                d="M13.3992 8.71179C13.7652 8.34573 14.3592 8.34585 14.7253 8.71179C15.0915 9.07791 15.0915 9.67185 14.7253 10.038L10.7009 14.0624H21.5623C22.08 14.0624 22.4997 14.4822 22.4998 14.9999C22.4998 15.5176 22.08 15.9374 21.5623 15.9374H10.7009L14.7253 19.9618C15.0915 20.3279 15.0915 20.9218 14.7253 21.288C14.3592 21.6541 13.7653 21.6541 13.3992 21.288L7.77417 15.663C7.40823 15.2968 7.40811 14.7029 7.77417 14.3368L13.3992 8.71179Z"
                fill="var(--sec-color)"
              />
            </svg>
          </button>
        </div>
      </div>

      
      <div
        style={{
        scrollbarWidth: "none",
      }}
        className="overflow-x-auto overflow-y-hidden p-2">
        <div className="w-fit h-full flex flex-row gap-10">          
        {members.map((member) => (
          <div
            key={member.id}
            className={` ${
              member.active === true ? "bg-(--primary)" : "bg-[#EDEDED]"
            } shrink-0 md:w-[350px] w-[300px] overflow-hidden md:h-[550px] h-[500px] bg-(--primary) flex flex-col justify-end text-(--background) rounded-3xl`}
          >
            <div className="flex w-full h-full flex-col justify-between p-6">
              <div className="flex flex-row w-full justify-between">
                <div className="space-x-3">
                {member.passion.map((passion, index) => (
                  <span
                    key={`${member.id}-${index}`} // sau passion dacă e unic
                    className="text-xs w-fit bg-white rounded-2xl px-2 py-1 font-medium text-gray-700"
                    >
                    {passion}
                  </span>
                ))}
                </div>

                <span className="text-xs w-fit bg-white rounded-2xl px-2 py-1 font-medium text-gray-700">{member.age}</span>

              </div>
              <div>
                <p className="text-5xl font-bold w-[90%]">{member.name}</p>
                <p className="text-xs mt-2">{member.describe}</p>
              </div>

            </div>
            <Image src={member.photo} alt={"member:" +  member.name} width={600} height={300} className="object-cover rounded-3xl w-full" />
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
