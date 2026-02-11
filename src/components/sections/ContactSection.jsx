import React from "react";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3528.387346494521!2d-70.10515!3d-27.828623099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96983732d9567f3b%3A0x90cad4848c3e0dcb!2sEstampados%20Damaris!5e0!3m2!1ses!2scl!4v1770387871880!5m2!1ses!2scl";

export default function ContactSection() {
  return (
    <section id="contacto" className="section contact">
      <div className="container contact-map">
        <p className="eyebrow">Contacto</p>
        <h2>Encuentranos en nuestra ubicacion.</h2>
        <div className="map-frame">
          <iframe
            title="Ubicacion Estampados Damaris"
            src={MAP_EMBED_URL}
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
  );
}
