import { useState } from 'react';

const TimeSelector = ({ onChange }) => {
  const [selectedTime, setSelectedTime] = useState('1w');

  const handleChange = (event) => {
    const newTime = event.target.value;
    setSelectedTime(newTime);
    onChange(newTime);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6 max-w-xs mx-auto">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Select Time Period</h3>
      <select 
        value={selectedTime} 
        onChange={handleChange} 
        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 ease-in-out"
      >
        <option value="1d">1 Day</option>
        <option value="1w">1 Week</option>
        <option value="1m">1 Month</option>
        <option value="1y">1 Year</option>
      </select>
    </div>
  );
};

export default TimeSelector;
