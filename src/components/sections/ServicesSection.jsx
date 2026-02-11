import React from "react";
import ServiceCard from "./ServiceCard.jsx";
import { services } from "../../data/services.js";

export default function ServicesSection() {
  return (
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
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
