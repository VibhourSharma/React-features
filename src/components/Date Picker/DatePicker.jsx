import { useState } from "react";
import "./DatePicker.css";

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (e) => {
    const selectedDateString = e.target.value;
    setSelectedDate(selectedDateString);
  };

  return (
    <div className="date-picker-container">
      <h3>Date Picker</h3>
      <div className="date-picker">
        <label htmlFor="date">Select a date:</label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>
    </div>
  );
};

export default DatePicker;
