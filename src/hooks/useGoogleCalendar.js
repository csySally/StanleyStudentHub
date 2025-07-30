import { useEffect, useState } from "react";
import defaultEventImage from "../assets/images/default-poster.png";

export default function useGoogleCalendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(
          "https://script.google.com/macros/s/AKfycbyOxrUFoqpOwHpsThdHYLeqTC_FYbAJ1DiR-HKxlrJAlOfOBlasmOIwJdSX9QMm6hUF/exec?sheet=calendar"
        );
        const data = await res.json();

        const checkImage = (url) =>
          new Promise((resolve) => {
            if (!url) return resolve(defaultEventImage);
            const img = new Image();
            img.src = url;
            img.onload = () => resolve(url);
            img.onerror = () => resolve(defaultEventImage);
          });

        const formatted = await Promise.all(
          data.map(async (item) => {
            const iso = item.start?.endsWith("Z")
              ? item.start
              : item.start + "Z";
            const startDate = new Date(iso);
            if (isNaN(startDate)) return null;

            return {
              title: item.title,
              description: item.description,
              location: item.location,
              link: item.link,
              image: await checkImage(item.image),
              date: startDate.toLocaleDateString("en-AU", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              }),
              time: startDate.toLocaleTimeString("en-AU", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              }),
              start: startDate,
            };
          })
        );

        setEvents(formatted.filter(Boolean).sort((a, b) => a.start - b.start));
      } catch (error) {
        console.error("Error fetching calendar data:", error);
      }
    };

    fetchEvents();
  }, []);

  return { events };
}
