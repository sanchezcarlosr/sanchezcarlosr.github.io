import "./about.css";
import { useTranslation } from "react-i18next";

import profileImage from "../../../assets/profile.jpeg";
import sourceGift from "../../../assets/spiderman-3.gif";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from '@mui/icons-material/YouTube';

import DescriptionIcon from "@mui/icons-material/Description";
import { useTheme } from "@mui/material/styles";

export default function About() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <main className="about-container">
      <section className="gif">
        <img src={sourceGift} alt="spider gift" />
      </section>

      {/* ================= PRESENTACIÓN ================= */}
      <section className="presentation">
        <div className="presentation-info">
          <div className="social-icons">
            <span>
              <a
                rel="noopener noreferrer"
                href="https://github.com/sanchezcarlosr"
                target="_blank"
              >
                <GitHubIcon />
              </a>
            </span>
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
        <h2>{t("summary")}</h2>

        <p className="summary-paragraph">{t("summary-primary")}</p>

        <p className="summary-paragraph">{t("summary-secundary")}</p>
        <div className="container-cv">
          <a
            href="https://drive.google.com/file/d/1xLpdxEvVlj4Cgk4lUPmwKuJwnV854k4i/view?usp=sharing"
            target="_blank"
          >
            <DescriptionIcon />
            CV
          </a>
        </div>
      </section>

      {/* ================= BIO ================= */}
      <section className="bio">
        <h2>Bio</h2>

        <div className="bio-content">
          <div className="bio-summary">
            <span
              className="bio-year"
              style={{ color: theme.palette.primary.main }}
            >
              2002
            </span>
            <span className="text-summary">
              {t("birth")}
            </span>
          </div>
          <div className="bio-summary">
            <span
              className="bio-year"
              style={{ color: theme.palette.primary.main }}
            >
              2024
            </span>
            <span className="text-summary">
              {t("degree")}
            </span>
          </div>
          <div className="bio-summary">
            <span
              className="bio-year"
              style={{ color: theme.palette.primary.main }}
            >
              2025
            </span>
            <span className="text-summary">
              {t("currently")}
            </span>
          </div>
        </div>
      </section>

      <section className="hobie">
        <h2>{t("hobbies")}</h2>
        <div>
          <span className="hobie-summary">
            {t("hobbiesText")}
          </span>
        </div>
      </section>

      {/* ================= EN LA WEB ================= */}
      <section className="web">
        <h2> {t("web")} </h2>

        <div className="web-links">
          <span className="link">
            <a
              rel="noopener noreferrer"
              href="https://www.youtube.com/@CarlosSanchez-wr2qe/videos"
              target="_blank"
            >
              <YouTubeIcon fontSize="large"/>
            </a>
          </span>
          <span className="link">
            <a
              rel="noopener noreferrer"
              href="https://www.instagram.com/schz_carloss/"
              target="_blank"
            >
              <InstagramIcon fontSize="large"/>
            </a>
          </span>
        </div>
      </section>
    </main>
  );
}
