import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  es: {
    title: "Bienvenido a GM Pro Solution",
    subtitle: "Servicios profesionales de tasación e inspección",
    phone: "📞 Llámanos al 407-509-9595",
    contactAppraisal: "Valoración e Inspección",
    contactTaxNotary: "Servicios de Notaría y Taxes",
    contactUs: "Contáctanos",
    home: "Inicio",
    services: "Servicios",
    values: "Valores",
    formTitle: "Formulario de contacto",
    name: "Nombre",
    email: "Correo electrónico",
    message: "Mensaje",
    send: "Enviar",
  },
  en: {
    title: "Welcome to GM Pro Solution",
    subtitle: "Professional appraisal and inspection services",
    phone: "📞 Call us at 407-509-9595",
    contactAppraisal: "Appraisal & Inspection",
    contactTaxNotary: "Notary & Tax Services",
    contactUs: "Contact Us",
    home: "Home",
    services: "Services",
    values: "Values",
    formTitle: "Contact Form",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
