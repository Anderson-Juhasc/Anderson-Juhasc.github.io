import { useTranslations } from "next-intl";

export default function Skills() {
  const t = useTranslations("Skills");

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header skill-header">
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>

        <div className="skill-circles">
          <div className="skill-circle-item">
            <div className="circle-progress-container">
              <div className="circle-progress" data-percentage="95">
                <svg
                  className="circle-svg"
                  width="160"
                  height="160"
                  viewBox="0 0 160 160"
                >
                  <circle
                    className="circle-bg"
                    r="70"
                    cx="80"
                    cy="80"
                    fill="transparent"
                    strokeWidth="12"
                  />
                  <circle
                    className="circle-fill"
                    r="70"
                    cx="80"
                    cy="80"
                    fill="transparent"
                    strokeWidth="12"
                    strokeDasharray="440"
                    strokeDashoffset="22"
                  />
                </svg>
                <div className="circle-percentage">95%</div>
              </div>
            </div>
            <h4>Frontend</h4>
          </div>

          <div className="skill-circle-item">
            <div className="circle-progress-container">
              <div className="circle-progress" data-percentage="90">
                <svg
                  className="circle-svg"
                  width="160"
                  height="160"
                  viewBox="0 0 160 160"
                >
                  <circle
                    className="circle-bg"
                    r="70"
                    cx="80"
                    cy="80"
                    fill="transparent"
                    strokeWidth="12"
                  />
                  <circle
                    className="circle-fill"
                    r="70"
                    cx="80"
                    cy="80"
                    fill="transparent"
                    strokeWidth="12"
                    strokeDasharray="440"
                    strokeDashoffset="44"
                  />
                </svg>
                <div className="circle-percentage">90%</div>
              </div>
            </div>
            <h4>Backend</h4>
          </div>

          <div className="skill-circle-item">
            <div className="circle-progress-container">
              <div className="circle-progress" data-percentage="85">
                <svg
                  className="circle-svg"
                  width="160"
                  height="160"
                  viewBox="0 0 160 160"
                >
                  <circle
                    className="circle-bg"
                    r="70"
                    cx="80"
                    cy="80"
                    fill="transparent"
                    strokeWidth="12"
                  />
                  <circle
                    className="circle-fill"
                    r="70"
                    cx="80"
                    cy="80"
                    fill="transparent"
                    strokeWidth="12"
                    strokeDasharray="440"
                    strokeDashoffset="66"
                  />
                </svg>
                <div className="circle-percentage">85%</div>
              </div>
            </div>
            <h4>UI/UX Design</h4>
          </div>

          <div className="skill-circle-item">
            <div className="circle-progress-container">
              <div className="circle-progress" data-percentage="80">
                <svg
                  className="circle-svg"
                  width="160"
                  height="160"
                  viewBox="0 0 160 160"
                >
                  <circle
                    className="circle-bg"
                    r="70"
                    cx="80"
                    cy="80"
                    fill="transparent"
                    strokeWidth="12"
                  />
                  <circle
                    className="circle-fill"
                    r="70"
                    cx="80"
                    cy="80"
                    fill="transparent"
                    strokeWidth="12"
                    strokeDasharray="440"
                    strokeDashoffset="88"
                  />
                </svg>
                <div className="circle-percentage">80%</div>
              </div>
            </div>
            <h4>Blockchain</h4>
          </div>
        </div>

        <div className="skills-categories">
          <div className="skill-category">
            <div className="category-header">
              <i className="fas fa-laptop-code"></i>
              <h3>Frontend</h3>
            </div>
            <div className="tech-badges">
              <span className="tech-badge">HTML5</span>
              <span className="tech-badge">CSS3</span>
              <span className="tech-badge">JavaScript</span>
              <span className="tech-badge">TypeScript</span>
              <span className="tech-badge">Vue.js</span>
              <span className="tech-badge">Vuex</span>
              <span className="tech-badge">jQuery</span>
              <span className="tech-badge">Sass</span>
              <span className="tech-badge">Design Responsivo</span>
              <span className="tech-badge">BEM</span>
              <span className="tech-badge">Webpack</span>
              <span className="tech-badge">Vite</span>
            </div>
          </div>

          <div className="skill-category">
            <div className="category-header">
              <i className="fas fa-server"></i>
              <h3>Backend</h3>
            </div>
            <div className="tech-badges">
              <span className="tech-badge">Node.js</span>
              <span className="tech-badge">Express.js</span>
              <span className="tech-badge">PHP</span>
              <span className="tech-badge">REST APIs</span>
              <span className="tech-badge">MySQL</span>
              <span className="tech-badge">MongoDB</span>
              <span className="tech-badge">POO</span>
              <span className="tech-badge">MVC</span>
              <span className="tech-badge">Clean Architecture</span>
              <span className="tech-badge">Design de APIs</span>
            </div>
          </div>

          <div className="skill-category">
            <div className="category-header">
              <i className="fas fa-palette"></i>
              <h3>Design</h3>
            </div>
            <div className="tech-badges">
              <span className="tech-badge">UI/UX Design</span>
              <span className="tech-badge">Web Design</span>
              <span className="tech-badge">Design Responsivo</span>
              <span className="tech-badge">Prototipagem</span>
              <span className="tech-badge">Design Systems</span>
              <span className="tech-badge">Acessibilidade</span>
              <span className="tech-badge">Otimização para Conversão</span>
              <span className="tech-badge">Pesquisa de Usuários</span>
            </div>
          </div>

          <div className="skill-category">
            <div className="category-header">
              <i className="fa-brands fa-bitcoin"></i>
              <h3>Blockchain</h3>
            </div>
            <div className="tech-badges">
              <span className="tech-badge">Bitcoin</span>
              <span className="tech-badge">Padrões BIP</span>
              <span className="tech-badge">Carteiras Crypto</span>
              <span className="tech-badge">Integração de Pagamentos</span>
              <span className="tech-badge">Smart Contracts</span>
            </div>
          </div>

          <div className="skill-category">
            <div className="category-header">
              <i className="fas fa-tools"></i>
              <h3>Ferramentas & Fluxo</h3>
            </div>
            <div className="tech-badges">
              <span className="tech-badge">Git</span>
              <span className="tech-badge">GitHub</span>
              <span className="tech-badge">Linux</span>
              <span className="tech-badge">VIM</span>
              <span className="tech-badge">WordPress</span>
              <span className="tech-badge">Electron</span>
              <span className="tech-badge">Cordova</span>
              <span className="tech-badge">SEO</span>
              <span className="tech-badge">CI/CD</span>
              <span className="tech-badge">Analytics</span>
              <span className="tech-badge">Otimização de Performance</span>
            </div>
          </div>
        </div>

        <div className="skills-cta">
          <p>{t("cta.text")}</p>
          <a href="#contact" className="btn-primary">
            {t("cta.button")}
          </a>
        </div>
      </div>
    </section>
  );
}
