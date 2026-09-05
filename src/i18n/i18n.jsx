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
      hobbies: "Hobbies",
      web: "On the web",
      "summary-primary":
        "Full-Stack Web Developer and Programmer-Analyst with a passion for building web services and continuous learning. Skilled at developing logical solutions for real-world problems, analyzing requirements, and applying technical expertise to deliver optimal solutions for clients and companies.",
      "summary-secundary":
        "Beyond coding, I enjoy improving my English skills, painting, exercising, and creating playlists to code in a musical atmosphere.",
      "birth": "I was born in Fraile Pintado, in the Ledesma Department of Jujuy, Argentina.",
      "degree": "I completed my undergraduate studies, obtaining the degree of University Programmer-Analyst from the Faculty of Engineering at the National University of Jujuy.",
      "currently": "I am currently pursuing a degree in Computer Science and a teaching qualification in the same field, while also developing technical skills in networking and telecommunications.",
      "hobbiesText": "Playing video games, Drawing, Reading comics/manga, Watching movies/series.",
    },
  },
  es: {
    translation: {
      navAboutMe: "Sobre mi",
      navProyects: "Proyectos",
      navLanguaje: " a Ingles",
      profession: "Analista Programador",
      summary: "Resumen",
      hobbies: "Pasatiempos",
      web: "En la web",
      "summary-primary":
        "Desarrollador Web Full Stack y Analista Programador con pasión por la creación de servicios web y el aprendizaje continuo. Capaz de desarrollar soluciones lógicas para problemas del mundo real, analizar requerimientos y aplicar habilidades técnicas para ofrecer soluciones óptimas a clientes y empresas.",
      "summary-secundary":
        "Además de escribir código, me encanta mejorar mis habilidades en inglés, pintar cuadros, hacer ejercicio y crear playlists para programar en un ambiente musical.",
      "birth": "Naci en Fraile Pintado departamento Ledesma Jujuy, Argentina.",
      "degree": "Cursé mis estudios de grado y obtuve el título de Programador-Analista Universitario en la Facultad de Ingeniería de la Universidad Nacional de Jujuy.",
      "currently": "Actualmente estoy cursando una carrera en Informática y una certificación docente en la misma área, al tiempo que desarrollo habilidades técnicas en redes y telecomunicaciones.",
      "hobbiesText": "Jugar a videojuegos, Dibujar, Leer cómics o manga, Ver películas o series.",
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
