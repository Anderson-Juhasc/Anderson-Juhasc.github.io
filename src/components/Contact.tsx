import { useTranslations } from "next-intl";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>
                <i className="fas fa-envelope"></i>
                &nbsp;
                {t("info.email.label")}
              </h3>
              <p>
                <a href={`mailto:${t("info.email.value")}`}>
                  {t("info.email.value")}
                </a>
              </p>
            </div>
            <div className="contact-item">
              <h3>
                <i className="fas fa-map-marker-alt"></i>
                &nbsp;
                {t("info.location.label")}
              </h3>
              <p>{t("info.location.city")}</p>
              <p>{t("info.location.note")}</p>
            </div>
            <div className="contact-item">
              <h3>
                <i className="fas fa-share-alt"></i>
                &nbsp;
                {t("info.social.label")}
              </h3>
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
          <div className="contact-form">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
