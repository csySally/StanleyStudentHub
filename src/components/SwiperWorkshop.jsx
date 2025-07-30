import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "../styles/swiperworkshop.css";
import playIcon from "../assets/icons/play.svg";
import defaultBackgroundImage from "../assets/images/default_recording.png";
import useWorkshop from "../hooks/useWorkshop";

import { Pagination } from "swiper/modules";

export default function SwiperWorkshop() {
  const { workshopRecordings } = useWorkshop();

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="workshopSwiper"
      >
        {workshopRecordings.map((recording, index) => (
          <SwiperSlide key={index}>
            <div
              className="workshop-content"
              style={{
                backgroundImage: `url(${
                  recording.backgroundImage || defaultBackgroundImage
                })`,
              }}
            >
              <div className="workshop-mask">
                <p>{recording.title}</p>
              </div>
              <a
                href={recording.link || "#"}
                target="_blank"
                className="play-icon-link"
              >
                <img src={playIcon} alt="" className="play-icon" />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
