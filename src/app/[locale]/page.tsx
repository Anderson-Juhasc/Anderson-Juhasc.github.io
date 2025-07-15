import { use } from "react";
import { setRequestLocale } from "next-intl/server";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

type Params = Promise<{ locale: string }>;

export default function HomePage({ params }: { params: Params }) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <Header />

      <Hero />

      <About />

      <Skills />

      <Services />

      <Portfolio />

      <Testimonials />

      <Faq />

      <Contact />

      <Footer />

      <a href="#home" className="back-to-top">
        <i className="fas fa-arrow-up"></i>
      </a>
    </>
  );
}
