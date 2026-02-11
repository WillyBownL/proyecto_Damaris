import React from "react";
import PortfolioSlider from "../PortfolioSlider.jsx";
import { portfolioItems } from "../../data/portfolio.js";

export default function PortfolioSection() {
  return (
    <section id="portafolio" className="section portfolio">
      <div className="container">
        <div className="portfolio__header">
          <span className="portfolio__watermark" aria-hidden="true">Portafolio</span>
          <h2 className="portfolio__subtitle">Proyectos recientes que hablan por nosotros</h2>

        </div>
        <PortfolioSlider items={portfolioItems} />
      </div>
    </section>
  );
}
