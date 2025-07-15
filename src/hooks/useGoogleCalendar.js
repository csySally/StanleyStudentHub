import { useEffect, useState } from "react";

export default function useGoogleCalendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbyOxrUFoqpOwHpsThdHYLeqTC_FYbAJ1DiR-HKxlrJAlOfOBlasmOIwJdSX9QMm6hUF/exec?sheet=calendar"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const formatted = data.map((item) => {
          // 使用原始的 start 字段创建 Date 对象
          const startDate = new Date(item.start);

          return {
            title: item.title,
            description: item.description,
            location: item.location,
            link: item.link,
            image: item.image,
            // 格式化显示用的日期和时间
            date: startDate.toLocaleDateString("en-AU", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }),
            time: startDate.toLocaleTimeString("en-AU", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false, // 使用24小时制，更符合澳洲习惯
            }),
            // 保留原始的 Date 对象供排序和其他操作使用
            start: startDate,
          };
        });

        // 可以按时间排序
        formatted.sort((a, b) => a.start - b.start);

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
