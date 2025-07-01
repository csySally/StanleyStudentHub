import { React } from "react";
import DatePicker from "react-datepicker";
import Calendar from "../../assets/icons/Calendar.png";
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/datepicker.css";

export default function DatePickerComponent({ selectedDate, onDateSelect }) {
  const handleDateChange = (date) => {
    if (onDateSelect) {
      onDateSelect(date);
    }
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      customInput={
        <button className="date-picker-button">
          <img src={Calendar} alt="Calendar Icon" />
          {selectedDate ? selectedDate.toLocaleDateString() : "Select Date"}
        </button>
      }
    />
  );
}
