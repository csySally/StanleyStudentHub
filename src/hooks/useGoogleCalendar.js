import { useEffect, useState } from "react";

const API_KEY = "AIzaSyDW3g-YwOcxGIWLmUTrivEbai6BZKJrMTs";
const CALENDAR_ID =
  "de283db05f7707881ecdcd5125f8bcada8d24f22b798440406c7cfbaee41161f@group.calendar.google.com";

export default function useGoogleCalendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const now = new Date();
      const timeMin = new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        1
      ).toISOString();
      const timeMax = new Date(
        now.getFullYear(),
        now.getMonth() + 2,
        0
      ).toISOString();

      const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
        CALENDAR_ID
      )}/events?key=${API_KEY}&timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=true&orderBy=startTime&maxResults=50`;

      const res = await fetch(url);
      const data = await res.json();

      console.log("Response Data:", data);

      if (!res.ok) {
        if (res.status === 403) {
          console.error("403 Forbidden - Possible reasons:");
          console.error("1. API Key doesn't have Calendar API enabled");
          console.error("2. Calendar is not public");
          console.error("3. API Key restrictions");
          throw new Error(
            `Access denied (403). Check API key permissions and calendar visibility.`
          );
        } else if (res.status === 404) {
          console.error("404 Not Found - Calendar ID might be incorrect");
          throw new Error(
            `Calendar not found (404). Check calendar ID: ${CALENDAR_ID}`
          );
        } else {
          throw new Error(
            `API Error: ${res.status} - ${
              data.error?.message || "Unknown error"
            }`
          );
        }
      }

      if (data.error) {
        throw new Error(`Calendar API Error: ${data.error.message}`);
      }

      const items = data.items || [];
      console.log("✅ Success! Events found:", items.length);

      if (items.length > 0) {
        console.log("First event:", items[0]);
      } else {
        console.log("No events in the specified time range");
      }

      const formatted = data.items.map((item) => ({
        title: item.summary || "",
        start: new Date(item.start.dateTime || item.start.date),
        location: item.location || "Online",
        link: item.htmlLink,
        description: item.description || "",
        date: new Date(
          item.start.dateTime || item.start.date
        ).toLocaleDateString("en-AU", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        time: new Date(
          item.start.dateTime || item.start.date
        ).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      }));

      setEvents(formatted);
    };

    fetchEvents();
  }, []);

  return {
    events,
  };
}
