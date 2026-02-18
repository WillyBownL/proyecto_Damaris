import React from "react";
import ServicesCarousel from "./ServicesCarousel.jsx";

export default function ServicesSection() {
  return (
    <section id="servicios" className="section services">
      <div className="custom-shape-divider-top-1771257450">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" className="shape-fill"></path>
        </svg>
      </div>
      <div className="container">
        <div className="section-header">
          <div className="services__header">
            <span className="services__watermark" aria-hidden="true">Servicios</span>
            <h2 className="services__subtitle">Soluciones completas de impresion y estampado.</h2>
          </div>
          
        </div>
        <ServicesCarousel />
      </div>
      <div className="custom-shape-divider-bottom-1771257708" aria-hidden="true">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
}
