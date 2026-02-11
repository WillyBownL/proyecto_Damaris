import React, { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "#quienes-somos", label: "Quien Somos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  // Sincronizar link activo con el hash de la URL
  useEffect(() => {
    const updateActiveHash = () => setActiveHash(window.location.hash);

    updateActiveHash();
    window.addEventListener("hashchange", updateActiveHash);

    return () => window.removeEventListener("hashchange", updateActiveHash);
  }, []);

  // Bloquear scroll del body cuando el menú mobile está abierto
  useEffect(() => {
    document.body.classList.toggle("no-scroll", isMenuOpen);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar__container">
        <a className="navbar__logo" href="#hero" aria-label="Damaris Print" onClick={closeMenu}>
          <img src="/Logo.png" alt="Damaris Print" />
        </a>

        <nav className={`navbar__nav ${isMenuOpen ? "navbar__nav--open" : ""}`} aria-label="Navegación principal">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`navbar__link ${activeHash === href ? "navbar__link--active" : ""}`}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
          <a
            className="navbar__btn-cotizar navbar__btn-cotizar--mobile"
            href="#contacto"
            onClick={closeMenu}
          >
            Cotizar
          </a>
        </nav>

        <div className="navbar__actions">
          <a
            className="navbar__btn-cotizar navbar__btn-cotizar--desktop"
            href="#contacto"
            onClick={closeMenu}
          >
            Cotizar
          </a>

          <button
            type="button"
            className={`navbar__hamburger ${isMenuOpen ? "navbar__hamburger--open" : ""}`}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="navbar__hamburger-line" />
            <span className="navbar__hamburger-line" />
            <span className="navbar__hamburger-line" />
          </button>
        </div>
      </div>
    </header>
  );
}
