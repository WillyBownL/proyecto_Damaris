import React from "react";

export default function AboutSection() {
  return (
    <section id="quienes-somos" className="section about">
      <div className="about__inner">
        <div className="about__image-wrap">
          <img
            src="/estampado-creativo.png"
            alt="Estampado y papelería creativa Damaris"
            className="about__image"
          />
        </div>
        <div className="about__content">
          <span className="about__watermark" aria-hidden="true">Que somos</span>
          <h2 className="about__subtitle">Nuestro negocio</h2>
          <p className="about__text">
            Somos una empresa dedicada a la creación de productos de papelería y estampado creativo.
          </p>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1770824331" aria-hidden="true">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" className="shape-fill" />
        </svg>
      </div>
    </section>
  );
}
