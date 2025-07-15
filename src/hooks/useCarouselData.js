import { useEffect, useState } from "react";

export default function useCarouselData() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbyOxrUFoqpOwHpsThdHYLeqTC_FYbAJ1DiR-HKxlrJAlOfOBlasmOIwJdSX9QMm6hUF/exec?sheet=carousel"
    )
      .then((res) => res.json())
      .then((data) => setSlides(data))
      .catch((err) => console.error("Error loading carousel data", err));
  }, []);

  return { slides };
}
