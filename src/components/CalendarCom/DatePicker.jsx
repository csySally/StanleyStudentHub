import { React, useState } from "react";
import DatePicker from "react-datepicker";
import Calendar from "../../assets/icons/Calendar.png";

import "react-datepicker/dist/react-datepicker.css";
import "../../styles/datepicker.css";

export default function DatePickerComponent() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      customInput={
        <button className="date-picker-button">
          <img src={Calendar} alt="Calendar Icon" />
          {selectedDate ? selectedDate.toLocaleDateString() : "Select Date"}
        </button>
      }
    />
  );
}
