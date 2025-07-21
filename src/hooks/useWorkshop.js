import { useEffect, useState } from "react";

export default function useWorkshop() {
  const [workshopRecordings, setWorkshopRecordings] = useState([]);

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbyOxrUFoqpOwHpsThdHYLeqTC_FYbAJ1DiR-HKxlrJAlOfOBlasmOIwJdSX9QMm6hUF/exec?sheet=workshop"
    )
      .then((res) => res.json())
      .then((data) => setWorkshopRecordings(data))
      .catch((err) => console.error("Error loading workshop data", err));
  }, []);

  return { workshopRecordings };
}
