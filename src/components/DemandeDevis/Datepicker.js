import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = ({ selectedDate, handleDateChange }) => {
  const [startDate, setStartDate] = useState(selectedDate);

  const handleChange = date => {
    setStartDate(date);
    handleDateChange(date);
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={handleChange}
      dateFormat="yyyy-MM-dd"
      placeholderText="Select a date"
    />
  );
};

export default CustomDatePicker;
