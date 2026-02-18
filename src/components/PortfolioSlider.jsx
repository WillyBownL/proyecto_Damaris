import React, { useEffect, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export default function PortfolioSlider({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const activeItem = activeIndex !== null ? items[activeIndex] : null;

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : i === 0 ? items.length - 1 : i - 1));
  }, [items.length]);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % items.length));
  }, [items.length]);

  const close = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (activeIndex !== null) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, close, goPrev, goNext]);

  return (
    <>
      <Swiper
        slidesPerView={1.1}
        spaceBetween={16}
        freeMode
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          900: { slidesPerView: 3, spaceBetween: 24 },
        }}
        modules={[FreeMode, Pagination]}
        className="portfolio-swiper"
      >
        {items.map((item, index) => (
          <SwiperSlide key={item.title}>
            <div className="portfolio-card-wrap">
              <article className="portfolio-card">
                <button
                  type="button"
                  className="portfolio-image"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Ver ${item.title}`}
                >
                  <div className="portfolio-image-border-wrap">
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </div>
                </button>
                <h3>{item.title}</h3>
              </article>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {activeItem && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada de imagen"
          onClick={(e) => e.target === e.currentTarget && close()}
        >
          <button
            type="button"
            className="lightbox-close"
            aria-label="Cerrar imagen"
            onClick={close}
          >
            ×
          </button>

          {items.length > 1 && (
            <>
              <button
                type="button"
                className="lightbox-prev"
                aria-label="Imagen anterior"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
              >
                ‹
              </button>
              <button
                type="button"
                className="lightbox-next"
                aria-label="Imagen siguiente"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
              >
                ›
              </button>
            </>
          )}

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div
              className="lightbox-carousel-track"
              style={{ transform: `translateX(-${activeIndex * 100}vw)` }}
            >
              {items.map((item) => (
                <div key={item.title} className="lightbox-slide">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="lightbox-image"
                  />
                  <p className="lightbox-title">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
