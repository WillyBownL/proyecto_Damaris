import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export default function PortfolioSlider({ items }) {
  return (
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
            <div className="portfolio-badge">{item.label}</div>
            <h3>{item.title}</h3>
            <p>Produccion integral con acabados premium.</p>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
