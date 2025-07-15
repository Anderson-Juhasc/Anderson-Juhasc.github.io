import { useTranslations } from "next-intl";

type Testimonial = {
  text: string;
  name: string;
  role: string;
};

export default function Testimonials() {
  const t = useTranslations("Testimonials");
  const testimonials = t.raw("list") as Testimonial[];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>
        <div className="testimonials-slider">
          {testimonials.map((item, idx) => (
            <div className="testimonial-item" key={idx}>
              <div className="testimonial-content">
                <p>{item.text}</p>
                <div className="client-info">
                  <h4>{item.name}</h4>
                  <p>{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
