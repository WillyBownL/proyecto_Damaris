import React from "react";
import PortfolioSlider from "./PortfolioSlider.jsx";

const services = [
  {
    title: "Estampado textil",
    description:
      "Serigrafia, DTF y vinil para camisetas, hoodies y uniformes.",
  },
  {
    title: "Impresion digital",
    description:
      "Impresiones full color en pequeño y gran formato para campañas.",
  },
  {
    title: "Personalizacion corporativa",
    description:
      "Merch, kits de bienvenida y regalos empresariales con tu marca.",
  },
  {
    title: "Produccion express",
    description:
      "Entregas rapidas para eventos, activaciones y lanzamientos.",
  },
];

const portfolioItems = [
  { title: "Estampado textil", image: "/Portfolio (1).jpg" },
  { title: "Adhesivos", image: "/Portfolio (2).jpg" },
  { title: "Tazas", image: "/Portfolio (3).jpg" },
  { title: "Tarjetas", image: "/Portfolio (4).jpg" },
  { title: "Invitaciones", image: "/Portfolio (5).jpg" },
  { title: "Poleras ", image: "/Portfolio (6).jpg" },
  { title: "Botellas", image: "/Portfolio (7).jpg" },
  { title: "Medallas", image: "/Portfolio (8).jpg" },
  { title: "Gorros", image: "/Portfolio (9).jpg" },
  { title: "Arreglos Conmemorativos", image: "/Portfolio (10).jpg" },
];

export default function LandingPage() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="container header-content">
          <a className="logo" href="#hero" aria-label="Damaris Print">
            <img src="/Logo.png" alt="Damaris Print" />
          </a>
          <nav className="nav">
            <a href="#quienes-somos">Quien Somos</a>
            <a href="#servicios">Servicios</a>
            <a href="#portafolio">Portafolio</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <a className="btn btn-primary" href="#contacto">
            Cotiza ahora
          </a>
        </div>
      </header>

      <main className="page-main">
        <section id="hero" className="hero">
          <video
            className="hero-video"
            src="/hero_background.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="hero-overlay" aria-hidden="true"></div>
          <div className="hero-logo">
            <img src="/Logo.png" alt="Damaris Print" />
          </div>
        </section>

        <section id="quienes-somos" className="section about">
          <div className="container about-content">
            <p className="eyebrow">Quien somos</p>
            <h2>Un equipo creativo con enfoque en resultados.</h2>
            <p className="lead">
              En Damaris Print ayudamos a marcas, agencias y emprendedores a
              transformar ideas en piezas tangibles. Nuestra combinacion de
              tecnologia, talento y control de calidad asegura consistencia en
              cada entrega.
            </p>
          </div>
        </section>

        <section id="servicios" className="section services">
          <div className="container">
            <div className="section-header">
              <div>
                <p className="eyebrow">Servicios</p>
                <h2>Soluciones completas de impresion y estampado.</h2>
              </div>
              <p className="lead">
                Atendemos proyectos de marketing, eventos y colecciones de moda
                con equipos propios y procesos automatizados.
              </p>
            </div>
            <div className="cards">
              {services.map((service) => (
                <article className="card" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#contacto">Solicitar informacion</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="portafolio" className="section portfolio">
          <div className="container">
            <div className="section-header">
              <div>
                <p className="eyebrow">Portafolio</p>
                <h2>Proyectos recientes que hablan por nosotros.</h2>
              </div>
              <p className="lead">
                Cada entrega refleja la identidad de nuestros clientes, desde
                marcas emergentes hasta campañas nacionales.
              </p>
            </div>
            <PortfolioSlider items={portfolioItems} />
          </div>
        </section>

        <section id="contacto" className="section contact">
          <div className="container contact-map">
            <p className="eyebrow">Contacto</p>
            <h2>Encuentranos en nuestra ubicacion.</h2>
            <div className="map-frame">
              <iframe
                title="Ubicacion Estampados Damaris"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3528.387346494521!2d-70.10515!3d-27.828623099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96983732d9567f3b%3A0x90cad4848c3e0dcb!2sEstampados%20Damaris!5e0!3m2!1ses!2scl!4v1770387871880!5m2!1ses!2scl"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <div>
            <strong>Damaris Print</strong>
            <p>Estampados e impresiones con enfoque creativo.</p>
          </div>
          <div className="footer-links">
            <a href="#hero">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#portafolio">Portafolio</a>
          </div>
          <span>© 2026 Damaris Print. Todos los derechos reservados.</span>
        </div>
      </footer>
    </div>
  );
}
