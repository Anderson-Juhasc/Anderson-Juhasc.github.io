import { useTranslations } from "next-intl";
import LangSwitcher from "@/components/LangSwitcher";

export default function Header() {
  const t = useTranslations("Header");

  return (
    <header id="header">
      <div className="container">
        <nav id="main-nav">
          <div className="logo">
            <h1>
              <span>Anderson</span> Juhasc
            </h1>
          </div>
          <ul className="nav-links">
            <li>
              <a href="#home">{t("nav.home")}</a>
            </li>
            <li>
              <a href="#about">{t("nav.about")}</a>
            </li>
            <li>
              <a href="#skills">{t("nav.skills")}</a>
            </li>
            <li>
              <a href="#portfolio">{t("nav.projects")}</a>
            </li>
            <li>
              <a href="#services">{t("nav.services")}</a>
            </li>
            <li>
              <a href="#testimonials">{t("nav.testimonials")}</a>
            </li>
            <li>
              <a href="#contact" className="btn-primary">
                {t("nav.contact")}
              </a>
            </li>
          </ul>

          <LangSwitcher />

          <div className="mobile-menu-icon">
            <i className="fas fa-bars"></i>
          </div>
        </nav>
      </div>
    </header>
  );
}
