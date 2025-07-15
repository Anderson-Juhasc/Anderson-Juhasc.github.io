import { useTranslations } from "next-intl";

type ServiceKey = "web" | "mobile" | "bitcoin" | "design";

export default function Services() {
  const t = useTranslations("Services");
  const keys: ServiceKey[] = ["web", "mobile", "bitcoin", "design"];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>

        <div className="services-grid">
          {keys.map((key) => {
            const features = t.raw(`items.${key}.features`) as string[];

            return (
              <div className="service-card" key={key}>
                <div className="service-icon">
                  <i className={t(`items.${key}.icon`)}></i>
                </div>
                <h3>{t(`items.${key}.title`)}</h3>
                <p>{t(`items.${key}.description`)}</p>
                <ul className="service-features">
                  {features.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <a href="#contact" className="btn-text">
                  {t("button")} <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
