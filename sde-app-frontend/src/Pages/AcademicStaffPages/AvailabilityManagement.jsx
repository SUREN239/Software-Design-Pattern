import React, { useState } from 'react';
import { FaUserClock } from 'react-icons/fa';

const AvailabilityManagement = () => {
  const [availability, setAvailability] = useState([
    { day: 'Monday', start: '09:00', end: '17:00' },
    { day: 'Tuesday', start: '09:00', end: '17:00' },
    { day: 'Wednesday', start: '09:00', end: '17:00' },
    { day: 'Thursday', start: '09:00', end: '17:00' },
    { day: 'Friday', start: '09:00', end: '17:00' },
  ]);

  const handleAvailabilityChange = (index, field, value) => {
    const newAvailability = [...availability];
    newAvailability[index][field] = value;
    setAvailability(newAvailability);
  };

  const saveAvailability = () => {
    // Here you would typically send the availability data to your backend
    console.log('Saving availability:', availability);
    alert('Availability saved successfully!');
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <FaUserClock className="mr-2" />
        Manage Availability
      </h2>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          {availability.map((day, index) => (
            <div key={day.day} className="flex items-center mb-4">
              <span className="w-24 font-medium">{day.day}</span>
              <input
                type="time"
                value={day.start}
                onChange={(e) => handleAvailabilityChange(index, 'start', e.target.value)}
                className="mx-2 p-2 border rounded"
              />
              <span>to</span>
              <input
                type="time"
                value={day.end}
                onChange={(e) => handleAvailabilityChange(index, 'end', e.target.value)}
                className="mx-2 p-2 border rounded"
              />
            </div>
          ))}
          <button
            onClick={saveAvailability}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Save Availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityManagement;