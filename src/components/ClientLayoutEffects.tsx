"use client";
import { useEffect } from "react";

export default function ClientLayoutEffects() {
  useEffect(() => {
    const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
    const navLinks = document.querySelector(".nav-links");
    const header = document.getElementById("header");
    const backToTop = document.querySelector(".back-to-top");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    const fadeElements = document.querySelectorAll(
      ".section-header, .about-content, .skills-categories, .service-card, .portfolio-item, .testimonial-item, .contact-content",
    );

    const handleScroll = () => {
      if (window.scrollY > 50) {
        header?.classList.add("scrolled");
      } else {
        header?.classList.remove("scrolled");
      }

      if (window.scrollY > 300) {
        backToTop?.classList.add("active");
      } else {
        backToTop?.classList.remove("active");
      }
    };

    // Menu toggle
    mobileMenuIcon?.addEventListener("click", () => {
      navLinks?.classList.toggle("active");
      mobileMenuIcon.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks?.classList.remove("active");
        mobileMenuIcon?.classList.remove("active");
      });
    });

    // Portfolio filter
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");
        portfolioItems.forEach((item) => {
          const element = item as HTMLElement;

          if (filter === "all" || item.classList.contains(filter || "")) {
            element.style.display = "block";
          } else {
            element.style.display = "none";
          }
        });
      });
    });

    // Intersection observer
    const fadeIn = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            fadeIn.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 },
    );

    fadeElements.forEach((el) => fadeIn.observe(el));

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const faqItems = document.querySelectorAll(".faq-item");
      faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        question?.addEventListener("click", () => {
          const isActive = item.classList.contains("active");
          faqItems.forEach((i) => i.classList.remove("active"));
          if (!isActive) item.classList.add("active");
        });
      });
    }, 100); // Delay in milliseconds

    return () => clearTimeout(timeout);
  }, []);

  return null;
}
