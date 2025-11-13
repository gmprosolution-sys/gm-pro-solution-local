import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Values = () => {
  const { t } = useLanguage();

  const values = [
    { icon: "🤝", title: t.trust, desc: t.trustDesc },
    { icon: "⚡", title: t.efficiency, desc: t.efficiencyDesc },
    { icon: "🏆", title: t.professionalism, desc: t.professionalismDesc },
  ];

  return (
    <section id="values" className="py-20 bg-[#06214b] text-white text-center">
      <h2 className="text-3xl font-bold mb-10">{t.ourValues}</h2>
      <div className="grid md:grid-cols-3 gap-8 px-10">
        {values.map((value, index) => (
          <div key={index} className="bg-[#0b264b] p-6 rounded-2xl shadow-lg">
            <div className="text-4xl mb-4">{value.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
            <p className="text-gray-300">{value.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
