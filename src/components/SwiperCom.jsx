import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/swiper.css";
import { Navigation } from "swiper/modules";
import useCarouselData from "../hooks/useCarouselData";
import defaultSlideImage from "../assets/images/default-welcome.png";

export default function SwiperCom() {
  const [activeSlide, setActiveSlide] = useState(null);
  const { slides } = useCarouselData();

  return (
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
              {slide.description.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
            <div className="slide-bg">
              <img
                src={slide.imageUrl || defaultSlideImage}
                alt={slide.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = defaultSlideImage;
                }}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
