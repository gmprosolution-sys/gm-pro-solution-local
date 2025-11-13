import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-[#0b264b] text-white text-center">
      <h2 className="text-3xl font-bold mb-8">{t.contactTitle}</h2>
      <p className="text-gray-300 mb-6">{t.contactButton}</p>
      <form className="max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Name"
          className="w-full mb-4 p-3 rounded text-black"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 rounded text-black"
        />
        <textarea
          placeholder="Message"
          className="w-full mb-4 p-3 rounded text-black"
        ></textarea>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
          {t.contactButton}
        </button>
      </form>
    </section>
  );
};

export default Contact;
