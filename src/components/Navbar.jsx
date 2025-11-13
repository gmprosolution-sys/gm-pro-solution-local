import React from "react";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useLanguage();

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#020c1b] text-white shadow-md">
      <h1 className="text-xl font-bold">GM Pro Solution</h1>
      <div className="flex items-center space-x-6 text-sm">
        <a href="#home" className="hover:text-blue-400">
          {t.home}
        </a>
        <a href="#services" className="hover:text-blue-400">
          {t.services}
        </a>
        <a href="#values" className="hover:text-blue-400">
          {t.values}
        </a>
        <a
          href="#contact"
          className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {t.contactUs}
        </a>
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
