import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      navAboutMe: "About me",
      navProyects: "Projects",
      navLanguaje: "to Spanish",
      profession: "Programmer Analyst",
      summary: "Summary",
      "summary-primary":
        "Full-Stack Web Developer and Programmer-Analyst with a passion for building web services and continuous learning. Skilled at developing logical solutions for real-world problems, analyzing requirements, and applying technical expertise to deliver optimal solutions for clients and companies.",
      "summary-secundary":
        "Beyond coding, I enjoy improving my English skills, painting, exercising, and creating playlists to code in a musical atmosphere.",
    },
  },
  es: {
    translation: {
      navAboutMe: "Sobre mi",
      navProyects: "Proyectos",
      navLanguaje: " a Ingles",
      profession: "Analista Programador",
      summary: "Resumen",
      "summary-primary":
        "Desarrollador Web Full Stack y Analista Programador con pasión por la creación de servicios web y el aprendizaje continuo. Capaz de desarrollar soluciones lógicas para problemas del mundo real, analizar requerimientos y aplicar habilidades técnicas para ofrecer soluciones óptimas a clientes y empresas.",
      "summary-secundary":
        "Además de escribir código, me encanta mejorar mis habilidades en inglés, pintar cuadros, hacer ejercicio y crear playlists para programar en un ambiente musical.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
