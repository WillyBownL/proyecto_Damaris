import React from "react";

export default function Preloader() {
  return (
    <div id="preloader" className="preloader" aria-hidden="true">
      <img className="preloader-logo" src="/Logo.png" alt="Damaris Print" />
      <div className="preloader-spinner" aria-hidden="true"></div>
    </div>
  );
}
