import React, { useState } from 'react';

const ScheduleManagement = () => {
  const [schedules, setSchedules] = useState([
    { id: 1, name: 'Morning Shift', startTime: '08:00', endTime: '16:00' },
    { id: 2, name: 'Evening Shift', startTime: '16:00', endTime: '00:00' },
    { id: 3, name: 'Night Shift', startTime: '00:00', endTime: '08:00' },
  ]);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-indigo-600">Schedule Management</h2>
      <div className="mb-6">
        <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
          Add New Schedule
        </button>
      </div>
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {schedules.map((schedule) => (
              <tr key={schedule.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap">{schedule.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{schedule.startTime}</td>
                <td className="px-6 py-4 whitespace-nowrap">{schedule.endTime}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-900 mr-2 transition-colors duration-150">Edit</button>
                  <button className="text-red-600 hover:text-red-900 transition-colors duration-150">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScheduleManagement;