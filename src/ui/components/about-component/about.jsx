import "./about.css";
import { useTranslation } from "react-i18next";

import profileImage from "../../../assets/profile.jpeg";
import sourceGift from "../../../assets/spiderman-3.gif";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";

import { useTheme } from "@mui/material/styles";

export default function About() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <main className="about-container">
      <section className="gif"><img src={sourceGift} alt="spider gift" /></section>
      
      {/* ================= PRESENTACIÓN ================= */}
      <section className="presentation">
        <div className="presentation-info">
          <div className="social-icons">
            <span>
              <a
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/carlos-rodolfo-sanchez/"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
            </span>
            <span>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=argcarlos688@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <EmailIcon />
              </a>
            </span>
            <span>
              <a
                rel="noopener noreferrer"
                href="https://www.instagram.com/schz_carloss/"
                target="_blank"
              >
                <InstagramIcon />
              </a>
            </span>
          </div>

          <h1 style={{ color: theme.palette.primary.contrastText }}>
            Carlos Sanchez
          </h1>

          <p
            className="profession"
            style={{ color: theme.palette.primary.main }}
          >
            {t("profession")}
          </p>
        </div>

        <div className="profile-container">
          <div className="profile-image">
            <img src={profileImage} alt="Carlos Sanchez" />
          </div>
        </div>
      </section>

      {/* ================= RESUMEN ================= */}
      <section className="summary">
        <h2>{t('summary')}</h2>

        <p className="summary-paragraph">{t("summary-primary")}</p>

        <p className="summary-paragraph">{t("summary-secundary")}</p>

        <button className="cv-button">📄 CV</button>
      </section>

      {/* ================= BIO ================= */}
      <section className="bio">
        <h2>Bio</h2>

        <div className="bio-content">
          <div className="bio-year">
            <p>Año</p>
            <p>2002</p>
            <p>2021 - 2024</p>
            <p>2025 - actualidad</p>
          </div>

          <div className="bio-description">
            <p>humanidad.push(new people(Carlos, Sanchez));</p>

            <p>titulo = new Titulo(Analista Programador);</p>

            <p>
              titulo = new Titulo(Lic.);
              <br />
              titulo = new Titulo(Profesorado);
            </p>
          </div>
        </div>
      </section>

      {/* ================= EN LA WEB ================= */}
      <section className="web">
        <h2>En la web</h2>

        <div className="web-links">
          <p>GitHub</p>

          <p>LinkedIn</p>

          <p>Email</p>
        </div>
      </section>
    </main>
  );
}
