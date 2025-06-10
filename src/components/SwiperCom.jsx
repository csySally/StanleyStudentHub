import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/swiper.css";
import { Navigation } from "swiper/modules";

export default function SwiperCom({ slides }) {
  const [activeSlide, setActiveSlide] = useState(null);

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              onMouseEnter={() => setActiveSlide(index)}
              onMouseLeave={() => setActiveSlide(null)}
            >
              <div
                className="mask-content"
                style={{
                  opacity: activeSlide === index ? 1 : 0,
                  visibility: activeSlide === index ? "visible" : "hidden",
                }}
              >
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
              <div
                className="slide-bg"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
