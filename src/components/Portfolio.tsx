import { useTranslations } from "next-intl";

export default function Portfolio() {
  const t = useTranslations("Portfolio");
  const projectKeys = Object.keys(t.raw("projects"));

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>

        <div className="portfolio-filters">
          {["all", "web", "bitcoin", "design", "nostr", "opensource"].map(
            (filter) => (
              <button key={filter} className="filter-btn" data-filter={filter}>
                {t(`filters.${filter}`)}
              </button>
            ),
          )}
        </div>

        <div className="portfolio-grid">
          {projectKeys.map((key) => {
            const project = t.raw(`projects.${key}`);

            return (
              <div key={key} className={`portfolio-item ${project.class}`}>
                <div className="portfolio-image">
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio-overlay">
                    <div className="portfolio-info">
                      <h3>{project.title}</h3>
                      <p>{project.subtitle}</p>
                      <div className="portfolio-links">
                        {project.links.map(
                          (
                            link: {
                              icon?: string;
                              image?: string;
                              alt?: string;
                              href: string;
                            },
                            i: number,
                          ) =>
                            link.image ? (
                              <a
                                key={i}
                                href={link.href}
                                target="_blank"
                                title={link.alt}
                              >
                                <img src={link.image} alt={link.alt} />
                              </a>
                            ) : (
                              <a key={i} href={link.href} target="_blank">
                                <i className={link.icon}></i>
                              </a>
                            ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="portfolio-details">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="portfolio-more">
          <a href="#contact" className="btn-primary">
            {t("cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
