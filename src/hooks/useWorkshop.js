import { useEffect, useState } from "react";
import defaultBackgroundImage from "../assets/images/default_recording.png";

export default function useWorkshop() {
  const [workshopRecordings, setWorkshopRecordings] = useState([]);

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const res = await fetch(
          "https://script.google.com/macros/s/AKfycbyOxrUFoqpOwHpsThdHYLeqTC_FYbAJ1DiR-HKxlrJAlOfOBlasmOIwJdSX9QMm6hUF/exec?sheet=workshop"
        );
        const data = await res.json();

        const checkImage = (url) =>
          new Promise((resolve) => {
            if (!url) return resolve(defaultBackgroundImage);
            const img = new Image();
            img.src = url;
            img.onload = () => resolve(url);
            img.onerror = () => resolve(defaultBackgroundImage);
          });

        const checkedRecordings = await Promise.all(
          data.map(async (recording) => ({
            ...recording,
            backgroundImage: await checkImage(recording.backgroundImage),
          }))
        );

        setWorkshopRecordings(checkedRecordings);
      } catch (err) {
        console.error("Error loading workshop data", err);
      }
    };

    fetchWorkshops();
  }, []);

  return { workshopRecordings };
}
