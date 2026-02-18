import React, { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="quienes-somos" ref={sectionRef} className={`section about ${isVisible ? "about--visible" : ""}`}>
      <div className="about__inner">
        <div className="about__image-wrap">
          <div className="about__image-border-wrap">
            <img
              src="/estampado-creativo.png"
              alt="Estampado y papelería creativa Damaris"
              className="about__image"
            />
          </div>
        </div>
        <div className="about__content">
          <span className="about__watermark" aria-hidden="true">Que somos</span>
          <h2 className="about__subtitle">Nuestro negocio</h2>
          <p className="about__text">
          Todo comenzó el 04 de marzo de 2020, cuando quise hacer un estampado especial para mi hija. Lo que empezó como algo pequeño y lleno de amor, terminó convirtiéndose en este hermoso emprendimiento.
          <br/>Soy una mujer emprendedora que decidió transformar su creatividad en un proyecto real. Desde entonces realizo trabajos personalizados, poniendo dedicación en cada detalle y buscando siempre que cada diseño tenga significado.
          <br/>He tenido la oportunidad de trabajar con clientes particulares, la municipalidad e incluso empresas del rubro fotovoltaico, lo que me ha permitido crecer y asumir nuevos desafíos.
          <br/>Sigo aprendiendo cada día. Si no sé cómo hacer algo, lo estudio, lo practico y lo logro. Porque más que estampados, creo soluciones con cariño y compromiso. 
          </p>
        </div>
      </div>
    </section>
  );
}
