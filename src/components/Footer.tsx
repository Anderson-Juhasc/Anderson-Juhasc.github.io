import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>{t("name")}</h3>
            <p>{t("title")}</p>
          </div>
          <nav className="footer-links">
            <h4>{t("quickLinksTitle")}</h4>
            <ul>
              <li>
                <a href="#home" title={t("quickLinks.home")}>
                  {t("quickLinks.home")}
                </a>
              </li>
              <li>
                <a href="#about" title={t("quickLinks.about")}>
                  {t("quickLinks.about")}
                </a>
              </li>
              <li>
                <a href="#skills" title={t("quickLinks.skills")}>
                  {t("quickLinks.skills")}
                </a>
              </li>
              <li>
                <a href="#portfolio" title={t("quickLinks.portfolio")}>
                  {t("quickLinks.portfolio")}
                </a>
              </li>
              <li>
                <a href="#contact" title={t("quickLinks.contact")}>
                  {t("quickLinks.contact")}
                </a>
              </li>
            </ul>
          </nav>
          <div className="footer-social">
            <h4>{t("socialTitle")}</h4>
            <nav className="social-links">
              <a
                href="https://github.com/Anderson-Juhasc"
                title="Github"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://wa.me/5511981206828?text=Olá%2C%20Anderson%20Juhasc%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços.
"
                title="Whatsapp"
                target="_blank"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a
                href="https://nostr.band/npub1f27g79lrpey73wtqa2pprn7vv3yveyytws08lxqe7pn0yuj8ppyqyk9swu"
                title="Nostr"
                target="_blank"
              >
                <img src="/nostr.svg" alt="Nostr" />
              </a>
              <a
                href="http://www.linkedin.com/in/andersonjuhasc?locale=en_US"
                title="Linkedin"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
