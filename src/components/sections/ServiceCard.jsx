import React from "react";

export default function ServiceCard({ title, description }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#contacto">Solicitar informacion</a>
    </article>
  );
}
