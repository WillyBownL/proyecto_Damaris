import React from "react";

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
  {
    title: "Coleccion Urbana 2025",
    label: "Moda",
  },
  {
    title: "Campaña Sabor Andino",
    label: "Retail",
  },
  {
    title: "Uniformes Equipo Alpha",
    label: "Corporativo",
  },
  {
    title: "Festival Luz de Barrio",
    label: "Eventos",
  },
  {
    title: "Coleccion Kids Color",
    label: "Infantil",
  },
  {
    title: "Packaging Eco Print",
    label: "Packaging",
  },
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

      <main>
        <section id="hero" className="hero">
          <div className="container hero-content">
            <div className="hero-text">
              <p className="eyebrow">Estampados e impresiones</p>
              <h1>
                Impulsamos tu marca con prendas y piezas que se ven y se sienten
                increibles.
              </h1>
              <p className="lead">
                Somos especialistas en estampado textil, impresion digital y
                personalizacion corporativa. Produccion rapida, acabados
                premium y asesoria creativa para cada proyecto.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#servicios">
                  Ver servicios
                </a>
                <a className="btn btn-ghost" href="#portafolio">
                  Ver portafolio
                </a>
              </div>
              <div className="hero-metrics">
                <div>
                  <strong>+12</strong>
                  <span>Años de experiencia</span>
                </div>
                <div>
                  <strong>+850</strong>
                  <span>Proyectos al año</span>
                </div>
                <div>
                  <strong>48h</strong>
                  <span>Entregas express</span>
                </div>
              </div>
            </div>
            <div className="hero-card">
              <div className="card-top">
                <span>Produccion 360</span>
                <span>Calidad certificada</span>
              </div>
              <h3>Tu idea, nuestra impresion.</h3>
              <p>
                Desde una pieza unica hasta lotes grandes, acompanamos todo el
                proceso: diseño, pruebas de color, seleccion de telas y
                acabados.
              </p>
              <div className="card-list">
                <div>
                  <strong>Serigrafia</strong>
                  <span>Textura y durabilidad</span>
                </div>
                <div>
                  <strong>DTF y Sublimado</strong>
                  <span>Color y detalle</span>
                </div>
                <div>
                  <strong>Vinil y Bordado</strong>
                  <span>Acabado premium</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="quienes-somos" className="section about">
          <div className="container about-grid">
            <div>
              <p className="eyebrow">Quien somos</p>
              <h2>Un equipo creativo con enfoque en resultados.</h2>
              <p className="lead">
                En Damaris Print ayudamos a marcas, agencias y emprendedores a
                transformar ideas en piezas tangibles. Nuestra combinacion de
                tecnologia, talento y control de calidad asegura consistencia en
                cada entrega.
              </p>
              <div className="about-highlights">
                <div>
                  <strong>Calidad</strong>
                  <span>Colores fieles y telas seleccionadas.</span>
                </div>
                <div>
                  <strong>Agilidad</strong>
                  <span>Procesos claros y entregas a tiempo.</span>
                </div>
                <div>
                  <strong>Asesoria</strong>
                  <span>Acompanamiento desde el brief.</span>
                </div>
              </div>
            </div>
            <div className="about-panel">
              <h3>Nuestro compromiso</h3>
              <p>
                Trabajamos con materiales responsables y proveedores locales
                para reducir tiempos y huella ambiental. Cada proyecto incluye
                pruebas de color y control final antes de la entrega.
              </p>
              <ul>
                <li>Control de calidad en cada lote.</li>
                <li>Prototipos rapidos para aprobacion.</li>
                <li>Equipo tecnico dedicado.</li>
              </ul>
            </div>
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
            <div className="portfolio-grid">
              {portfolioItems.map((item) => (
                <article className="portfolio-card" key={item.title}>
                  <div className="portfolio-badge">{item.label}</div>
                  <h3>{item.title}</h3>
                  <p>Produccion integral con acabados premium.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="section contact">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">Contacto</p>
              <h2>Listos para tu siguiente proyecto.</h2>
              <p className="lead">
                Cuentanos el tipo de prenda, cantidades y fechas. Responderemos
                en menos de 24 horas con una propuesta clara.
              </p>
              <div className="contact-info">
                <div>
                  <strong>Correo</strong>
                  <span>ventas@damarisprint.com</span>
                </div>
                <div>
                  <strong>Telefono</strong>
                  <span>+57 310 000 0000</span>
                </div>
                <div>
                  <strong>Direccion</strong>
                  <span>Zona Industrial, Bogota</span>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <label>
                Nombre
                <input name="name" type="text" placeholder="Tu nombre" />
              </label>
              <label>
                Correo
                <input name="email" type="email" placeholder="tucorreo@mail" />
              </label>
              <label>
                Proyecto
                <input
                  name="project"
                  type="text"
                  placeholder="Camisetas, flyers, merch..."
                />
              </label>
              <label>
                Detalles
                <textarea
                  name="details"
                  rows="4"
                  placeholder="Cantidades, fecha, referencias"
                />
              </label>
              <button className="btn btn-primary" type="submit">
                Enviar solicitud
              </button>
              <p className="form-note">
                Al enviar aceptas nuestra politica de tratamiento de datos.
              </p>
            </form>
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
