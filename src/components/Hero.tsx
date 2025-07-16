import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <span>{t("greeting")}</span>
          <h1>{t("name")}</h1>
          <h2>{t("title")}</h2>
          <p>{t("description")}</p>
          <div className="hero-buttons">
            <a href="#portfolio" className="btn-primary">
              {t("viewProjects")}
            </a>
            <a href="#contact" className="btn-orange">
              {t("getInTouch")}
            </a>
          </div>
          <div className="tech-stack">
            <span>{t("technologies")}:</span>
            <div className="tech-icons">
              <i className="fab fa-html5" title="HTML5"></i>
              <i className="fab fa-css3-alt" title="CSS3"></i>
              <i className="fab fa-js" title="JavaScript"></i>
              <i className="fab fa-node-js" title="Node.js"></i>
              <i className="fab fa-react" title="React"></i>
              <i className="fab fa-vuejs" title="Vue.js"></i>
              <i className="fab fa-bitcoin" title="Bitcoin"></i>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="/agj.png" alt={ t('imageAlt') } />
        </div>
      </div>
    </section>
  );
}
