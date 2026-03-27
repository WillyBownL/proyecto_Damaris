import React from "react";
import PortfolioSlider from "../PortfolioSlider.jsx";
import { portfolioItems } from "../../data/portfolio.js";

export default function PortfolioSection() {
  return (
    <section id="portafolio" className="section portfolio">
      <div className="container">
        <div className="portfolio__header">
          <h2 className="portfolio__title">Portafolio</h2>
          <p className="portfolio__subtitle">Proyectos recientes que hablan por nosotros</p>
        </div>
        <PortfolioSlider items={portfolioItems} />
      </div>
    </section>
  );
}
