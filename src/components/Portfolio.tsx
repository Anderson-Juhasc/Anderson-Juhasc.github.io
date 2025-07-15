import { useTranslations } from "next-intl";

export default function Portfolio() {
  const t = useTranslations("Portfolio");

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>

        <div className="portfolio-filters">
          {["all", "web", "bitcoin", "design", "opensource"].map((filter) => (
            <button key={filter} className="filter-btn" data-filter={filter}>
              {t(`filters.${filter}`)}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          <div className="portfolio-item bitcoin opensource">
            <div className="portfolio-image">
              <img src="/npm.png" alt="BIP84 - NPM Package" />
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h3>BIP84</h3>
                  <p>Pacote NPM para implementação BIP84 Bitcoin (Bech32)</p>
                  <div className="portfolio-links">
                    <a
                      href="https://www.npmjs.com/package/bip84"
                      target="_blank"
                    >
                      <i className="fas fa-link"></i>
                    </a>
                    <a
                      href="https://github.com/Anderson-Juhasc/bip84"
                      target="_blank"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-details">
              <h4>BIP84</h4>
              <p>Node.js, NPM Package, Bitcoin, Opensource</p>
            </div>
          </div>

          <div className="portfolio-item bitcoin opensource">
            <div className="portfolio-image">
              <img src="/npm.png" alt="BIP84 - NPM Package" />
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h3>BIP86</h3>
                  <p>Pacote NPM para implementação BIP86 Bitcoin (Taproot)</p>
                  <div className="portfolio-links">
                    <a
                      href="https://www.npmjs.com/package/bip86"
                      target="_blank"
                    >
                      <i className="fas fa-link"></i>
                    </a>
                    <a
                      href="https://github.com/Anderson-Juhasc/bip86"
                      target="_blank"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-details">
              <h4>BIP86</h4>
              <p>Node.js, NPM Package, Bitcoin, Opensource</p>
            </div>
          </div>

          <div className="portfolio-item bitcoin opensource">
            <div className="portfolio-image">
              <img
                src="/introducao-criptomoedas.png"
                alt="Introdução a Criptomoedas"
              />
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h3>Introdução a Criptomoedas</h3>
                  <p>Curso introdutório sobre Bitcoin e criptomoedas</p>
                  <div className="portfolio-links">
                    <a
                      href="https://github.com/Anderson-Juhasc/introducao-a-criptomoedas"
                      target="_blank"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-details">
              <h4>Introdução a Criptomoedas</h4>
              <p>Curso, introdução, Bitcoin, Opensource</p>
            </div>
          </div>
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
