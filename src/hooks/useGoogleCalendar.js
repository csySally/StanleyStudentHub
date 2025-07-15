import { useEffect, useState } from "react";

export default function useGoogleCalendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbyOxrUFoqpOwHpsThdHYLeqTC_FYbAJ1DiR-HKxlrJAlOfOBlasmOIwJdSX9QMm6hUF/exec?sheet=calendar"
    )
      .then((res) => res.json())
      .then((data) => {
        const formatted = data
          .map((item) => {
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
              image: item.image,
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
          .filter(Boolean)
          .sort((a, b) => a.start - b.start);

        setEvents(formatted);
      })
      .catch((error) => {
        console.error("Error fetching calendar data:", error);
      });
  }, []);

  return {
    events,
  };
}
