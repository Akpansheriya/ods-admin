import React, { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_blue.css'; 
import "./datePicker.scss";
function SingleInputDateRangePicker() {
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateChange = (selectedDates) => {
    setSelectedDates(selectedDates);
  };

  return (
    <>
      <div className="picker">
      <Flatpickr
        options={{
          mode: 'range', // Enables date range selection
          dateFormat: 'Y-m-d', // Specify the date format you want
        }}
        value={selectedDates}
        onChange={handleDateChange}
      />
        <span className="fa-regular fa-calendar icon"></span>
      </div>
    </>
  );
}

export default SingleInputDateRangePicker;