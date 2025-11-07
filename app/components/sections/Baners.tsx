'use client';

const items = [
  "HD CAMERAS",
  "24/7 MONITORING",
  "MOTION DETECTION",
  "NIGHT VISION",
  "MOBILE ACCESS",
  "CLOUD STORAGE",
  "PROFESSIONAL INSTALLATION",
  "AI ANALYTICS",
  "REMOTE VIEWING",
  "SECURE DVR/NVR",
  "3-YEAR WARRANTY",
  "INSTANT ALERTS",
];

export default function Banners() {
  return (
    <div className="relative w-full h-32 py-16 overflow-hidden flex items-center justify-center bg-transparent">
      {/* Banda 1 – Neagră, +3° */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-7xl">
          <div className="flex animate-marquee whitespace-nowrap rotate-3">
            <TapeContent bg="bg-black" dot="bg-lime-500" />
            <TapeContent bg="bg-black" dot="bg-lime-500" />
          </div>
        </div>
      </div>

      {/* Banda 2 – Verde, -3° (peste prima) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-7xl">
          <div className="flex animate-marquee-reverse whitespace-nowrap -rotate-3">
            <TapeContent bg="bg-lime-500" text="text-black" dot="bg-black" />
            <TapeContent bg="bg-lime-500" text="text-black" dot="bg-black" />
          </div>
        </div>
      </div>

      {/* Animație CSS */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(-10%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(-10%); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 18s linear infinite;
        }
      
      `}</style>
    </div>
  );
}

// Componentă reutilizabilă pentru conținut
function TapeContent({ bg, text = "text-white", dot }: { bg: string; text?: string; dot: string }) {
  return (
    <div className={`flex items-center gap-8 px-4 py-3 ${bg} shadow-lg`}>
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-8">
          <span className={`${text} font-bold uppercase tracking-widest text-sm md:text-base whitespace-nowrap`}>
            {item}
          </span>
          {i < items.length - 1 && (
            <div className={`w-2 h-2 ${dot} rounded-full`} />
          )}
        </div>
      ))}
    </div>
  );
}