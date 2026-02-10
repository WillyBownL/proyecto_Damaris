import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export default function PortfolioSlider({ items }) {
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    if (activeItem) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [activeItem]);
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
        {items.map((item) => (
          <SwiperSlide key={item.title}>
            <article className="portfolio-card">
              <button
                type="button"
                className="portfolio-image"
                onClick={() => setActiveItem(item)}
                aria-label={`Ver ${item.title}`}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
              </button>
              <h3>{item.title}</h3>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      {activeItem && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveItem(null)}
        >
          <button
            type="button"
            className="lightbox-close"
            aria-label="Cerrar imagen"
            onClick={() => setActiveItem(null)}
          >
            ×
          </button>
          <img
            src={activeItem.image}
            alt={activeItem.title}
            className="lightbox-image"
          />
        </div>
      )}
    </>
  );
}
