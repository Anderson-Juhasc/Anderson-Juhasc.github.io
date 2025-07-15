import { useTranslations } from "next-intl";

type FaqItem = {
  question: string;
  answer: string;
};

export default function Faq() {
  const t = useTranslations("Faq");
  const faqs = t.raw("questions") as FaqItem[];

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-header">
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>
        <div className="faq-list">
          {faqs.map((item, idx) => (
            <div className="faq-item" key={idx}>
              <div className="faq-question">
                <h3>{item.question}</h3>
                <span className="faq-toggle">
                  <i className="fas fa-plus"></i>
                </span>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
