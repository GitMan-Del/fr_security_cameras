"use client";

import { useLanguage } from "../LanguageContext";

const Details = [
  {
    id: 1,
    price: "599€",
    title: "Home",
    desc_en: "Perfect for homes and apartments. Clean and guaranteed installation.",
    desc_fr: "Idéal pour les appartements et maisons. Installation propre et garantie.",
    payment_type_en: "one-time",
    payment_type_fr: "une fois",
    benefits_en: [
      "HD or 4K cameras",
      "Live mobile access",
      "Secure cloud recording",
      "Certified technician setup",
      "24/7 support"
    ],
    benefits_fr: [
      "Caméras HD ou 4K",
      "Accès mobile en direct",
      "Enregistrement sécurisé dans le cloud",
      "Installation par technicien agréé",
      "Assistance 24/7"
    ]
  },
  {
    id: 2,
    price: "2099€",
    title: "Security+",
    desc_en: "For advanced protection with AI technology. Complete, smart, and scalable system.",
    desc_fr: "Pour une sécurité renforcée avec technologie AI. Système complet, intelligent et évolutif.",
    payment_type_en: "one-time",
    payment_type_fr: "une fois",
    benefits_en: [
      "4K AI motion detection cameras",
      "Remote control via smartphone",
      "Automatic cloud backup",
      "Premium installation and setup",
      "Priority maintenance and support"
    ],
    benefits_fr: [
      "Caméras 4K AI avec détection de mouvement",
      "Contrôle à distance depuis smartphone",
      "Sauvegarde automatique dans le cloud",
      "Installation premium et configuration réseau",
      "Maintenance et support prioritaire"
    ]
  },
  {
    id: 3,
    price: "Custom",
    title: "Business",
    desc_en: "Tailored solution for businesses. Full protection managed by professionals.",
    desc_fr: "Solution sur mesure pour entreprises. Sécurité totale gérée par nos experts.",
    payment_type_en: "custom quote",
    payment_type_fr: "sur devis",
    benefits_en: [
      "4K AI cameras with night vision",
      "Centralized monitoring",
      "Staff training included",
      "On-site maintenance",
      "Ongoing technical support"
    ],
    benefits_fr: [
      "Caméras 4K AI avec vision nocturne",
      "Supervision centralisée",
      "Formation du personnel incluse",
      "Maintenance sur site",
      "Assistance technique continue"
    ]
  }
]


export default function Pricing() {
  const { translate } = useLanguage();

  return (
    <div id="services" className="min-h-screen bg-tras  flex flex-col items-center justify-center p-3 md:p-10">
      {/* Titlu + subtitlu */}
      <div className="text-center mb-10">
        <h3
          style={{ fontFamily: "unset" }}
          className="text-4xl md:text-5xl font-bold text-gray-800"
        >
          Pricing
        </h3>
        <p className="mt-3 max-w-[600px] mx-auto text-xs text-gray-500">
          Protégez votre maison ou votre entreprise avec nos systèmes de
          surveillance haut de gamme. Installation rapide, support 24/7 et
          technologie de pointe pour votre sécurité.
        </p>
      </div>

      {/* Carduri */}
      <div className="flex flex-col md:flex-row gap-6 max-w-5xl w-full justify-center bg-transparent border-0">
        {Details.map((plan) => (
          <div
            key={plan.id}
            className={`
              relative w-full md:w-80 h-[500px] rounded-3xl border border-[#A7A7A7]/30 shadow-xl
              p-6 flex flex-col justify-between 
              ${plan.id === 2 ? "ring-4 ring-white border-0 scale-105" : ""}
            `}
          >
            {/* Titlu */}
            <div className="p-3 border  border-[#A7A7A7]/30 rounded-3xl">
              <span className="text-3xl font-semibold bg-linear-to-r from-(--2-sec) from-40% to-(--sec-color) bg-clip-text text-transparent">
                {plan.title}
              </span>
              <p className="mt-2 text-xs text-(--background)/80">
               {translate ? plan.desc_en : plan.desc_fr}
              </p>
            </div>

            {/* Preț */}
            <div className="my-6">
              {plan.price === "Custom" ? (
                <p className="text-3xl font-bold text-(--background)">Custom</p>
              ) : (
                <p className="text-3xl font-bold text--(-border2-color)">
                   {plan.price}
                  <span className="text-sm font-normal text--(-border2-color)/70">
                    {" "}
                    / one time
                  </span>
                </p>
              )}
            </div>

            {/* Beneficii */}
            <ul className="space-y-3">
             {(translate ? plan.benefits_en : plan.benefits_fr).map((benefit, i) => (
                <li
                  key={i}
                  className="flex items-center text-sm text-(--2-sec)"
                >
                  <div className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-3" />
                  {benefit}
                </li>
              ))}
            </ul>

            {/* Buton CTA */}
            <div className="mt-8">
              <button
                className={`
                  w-full py-3 rounded-full text-sm font-medium transition
                `}
              >
                Get started for {"=>"} {plan.price}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
