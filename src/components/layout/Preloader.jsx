import React from "react";

const FLOWERS = ["🌸", "🌺", "🌷", "🌸", "🌺", "🌷", "🌸", "🌺", "🌷", "🌸", "🌺", "🌷"];

function getFlowerPosition(i, total, radiusPercent = 42) {
  const angle = (-90 + (i / total) * 360) * (Math.PI / 180);
  const left = 50 + radiusPercent * Math.cos(angle);
  const top = 50 + radiusPercent * Math.sin(angle);
  return { left: `${left}%`, top: `${top}%` };
}

export default function Preloader() {
  return (
    <div id="preloader" className="preloader" aria-hidden="true">
      <div className="preloader-center">
        <img className="preloader-logo" src="/Logo.png" alt="Damaris Print" />
        <div className="preloader-flowers" aria-hidden="true">
          {FLOWERS.map((flower, i) => {
            const pos = getFlowerPosition(i, FLOWERS.length);
            return (
              <span
                key={i}
                className="preloader-flower"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  left: pos.left,
                  top: pos.top,
                  fontSize: `${1.2 + (i % 3) * 0.3}rem`,
                }}
              >
                {flower}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
