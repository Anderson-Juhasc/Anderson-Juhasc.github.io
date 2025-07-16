"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");
  const m = useTranslations("ThankYou");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xjkovzrr", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        form.reset();
        setShowModal(true);
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert("Network error: " + error.message);
      } else {
        alert("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form id="contactForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            id="name"
            placeholder={t("form.name")}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            id="email"
            placeholder={t("form.email")}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder={t("form.subject")}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            id="message"
            placeholder={t("form.message")}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? t("form.submitted") : t("form.submit")}
        </button>
      </form>

      {showModal && (
        <>
          <div className="modal-overlay" />
          <div className="modal">
            <h2>{m("title")}</h2>
            <p>{m("message")}</p>
            <button onClick={() => setShowModal(false)} className="btn-primary">
              {m("button")}
            </button>
          </div>
        </>
      )}
    </>
  );
}
