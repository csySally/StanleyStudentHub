import { useEffect, useState } from "react";
import defaultSlideImage from "../assets/images/default-welcome.png";

export default function useCarouselData() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res = await fetch(
          "https://script.google.com/macros/s/AKfycbyOxrUFoqpOwHpsThdHYLeqTC_FYbAJ1DiR-HKxlrJAlOfOBlasmOIwJdSX9QMm6hUF/exec?sheet=carousel"
        );
        const data = await res.json();

        const checkImage = (url) =>
          new Promise((resolve) => {
            if (!url) return resolve(defaultSlideImage);
            const img = new Image();
            img.src = url;
            img.onload = () => resolve(url);
            img.onerror = () => resolve(defaultSlideImage);
          });

        const checkedSlides = await Promise.all(
          data.map(async (slide) => ({
            ...slide,
            imageUrl: await checkImage(slide.imageUrl),
          }))
        );

        setSlides(checkedSlides);
      } catch (err) {
        console.error("Error loading carousel data", err);
      }
    };

    fetchSlides();
  }, []);

  return { slides };
}
