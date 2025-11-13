import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Values = () => {
  const { t } = useLanguage();

  return (
    <section id="values" className="py-20 bg-[#04142c] text-white text-center">
      <h2 className="text-3xl font-bold mb-8">{t.values}</h2>
      <p className="max-w-2xl mx-auto text-gray-300">
        {t.notaryDesc}
      </p>
    </section>
  );
};

export default Values;
