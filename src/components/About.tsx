import Image from "next/image";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");
  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>
        <div className="about-content">
          <div className="about-image">
            <Image
              src="/agj-2.png"
              alt="Foto de Anderson Juhasc"
              width={428}
              height={642}
              priority
            />
          </div>
          <div className="about-text">
            <h3>{t("headline")}</h3>
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}

            <div className="about-details" aria-label="Detalhes sobre Anderson">
              <div className="detail-item">
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                <span>{t("location")}</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-envelope" aria-hidden="true"></i>
                <span>
                  <a href="mailto:anderson.juhasc@gmail.com">
                    anderson.juhasc@gmail.com
                  </a>
                </span>
              </div>
              <div className="detail-item">
                <i className="fas fa-code-branch" aria-hidden="true"></i>
                <span>{t("workflow")}</span>
              </div>
            </div>
            <div className="about-buttons">
              <a href="#contact" className="btn-primary">
                {t("startProject")}
              </a>
              <a
                href="assets/docs/curriculo-anderson-juhasc.pdf"
                className="btn-secondary"
                download
              >
                {t("downloadCV")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
