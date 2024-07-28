// ScheduleManagement.js
import React, { useState } from 'react';
import { FaCalendarPlus, FaExclamationTriangle } from 'react-icons/fa';

const ScheduleManagement = () => {
  const [schedules, setSchedules] = useState([
    { id: 1, title: 'Math 101', room: 'A101', start: '2024-03-01T09:00', end: '2024-03-01T10:30' },
    { id: 2, title: 'English 201', room: 'B205', start: '2024-03-01T11:00', end: '2024-03-01T12:30' },
  ]);

  const [newSchedule, setNewSchedule] = useState({ title: '', room: '', start: '', end: '' });

  const addSchedule = () => {
    setSchedules([...schedules, { ...newSchedule, id: schedules.length + 1 }]);
    setNewSchedule({ title: '', room: '', start: '', end: '' });
  };

  const resolveConflict = (id) => {
    console.log(`Resolving conflict for schedule ${id}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Schedule Management</h2>
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            placeholder="Title"
            value={newSchedule.title}
            onChange={(e) => setNewSchedule({ ...newSchedule, title: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Room"
            value={newSchedule.room}
            onChange={(e) => setNewSchedule({ ...newSchedule, room: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            type="datetime-local"
            value={newSchedule.start}
            onChange={(e) => setNewSchedule({ ...newSchedule, start: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            type="datetime-local"
            value={newSchedule.end}
            onChange={(e) => setNewSchedule({ ...newSchedule, end: e.target.value })}
            className="border p-2 rounded"
          />
          <button onClick={addSchedule} className="bg-green-500 text-white p-2 rounded flex items-center">
            <FaCalendarPlus className="mr-2" /> Add Schedule
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Schedule List</h3>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Room</th>
              <th className="py-2 px-4 border-b">Start</th>
              <th className="py-2 px-4 border-b">End</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map(schedule => (
              <tr key={schedule.id}>
                <td className="py-2 px-4 border-b">{schedule.title}</td>
                <td className="py-2 px-4 border-b">{schedule.room}</td>
                <td className="py-2 px-4 border-b">{new Date(schedule.start).toLocaleString()}</td>
                <td className="py-2 px-4 border-b">{new Date(schedule.end).toLocaleString()}</td>
                <td className="py-2 px-4 border-b">
                  <button onClick={() => resolveConflict(schedule.id)} className="text-yellow-500">
                    <FaExclamationTriangle />
                  </button>
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