import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { FaCalendar } from 'react-icons/fa';

const localizer = momentLocalizer(moment);

const ScheduleView = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated API call
    setTimeout(() => {
      setEvents([
        {
          id: 1,
          title: 'Introduction to Computer Science',
          start: new Date(2024, 6, 29, 9, 0), // July 29, 2024, 09:00 AM
          end: new Date(2024, 6, 29, 10, 30), // July 29, 2024, 10:30 AM
          room: 'CS-101'
        },
        {
          id: 2,
          title: 'Data Structures',
          start: new Date(2024, 6, 29, 11, 0), // July 29, 2024, 11:00 AM
          end: new Date(2024, 6, 29, 12, 30), // July 29, 2024, 12:30 PM
          room: 'CS-102'
        },
        {
          id: 3,
          title: 'Algorithms',
          start: new Date(2024, 6, 29, 14, 0), // July 29, 2024, 02:00 PM
          end: new Date(2024, 6, 29, 15, 30), // July 29, 2024, 03:30 PM
          room: 'CS-103'
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#4F46E5',
      borderRadius: '5px',
      opacity: 0.8,
      color: 'white',
      border: '0px',
      display: 'block'
    };
    return {
      style: style
    };
  };

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading schedule...</div>;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4 bg-indigo-600 text-white flex items-center justify-between">
        <h2 className="text-2xl font-semibold flex items-center">
          <FaCalendar className="mr-2" />
          Your Schedule
        </h2>
      </div>
      <div className="p-4">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          eventPropGetter={eventStyleGetter}
          views={['month', 'week', 'day']}
          defaultView='week'
        />
      </div>
    </div>
  );
};

export default ScheduleView;