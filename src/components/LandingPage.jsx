import React from "react";
import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import AboutSection from "./sections/AboutSection.jsx";
import ServicesSection from "./sections/ServicesSection.jsx";
import PortfolioSection from "./sections/PortfolioSection.jsx";
import ContactSection from "./sections/ContactSection.jsx";
import WhatsAppButton from "./WhatsAppButton.jsx";

export default function LandingPage() {
  return (
    <div className="page">
      <Header />
      <main className="page-main">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
