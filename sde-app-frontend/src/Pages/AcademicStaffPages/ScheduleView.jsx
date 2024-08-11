// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import { Toaster, toast } from 'react-hot-toast';
// import { ClipLoader } from 'react-spinners'; // Import the new TaskBoard component
// import TaskBoard from './TaskBoard';

// const ScheduleView = () => {
//   const [events, setEvents] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [activeView, setActiveView] = useState('calendar'); // New state to toggle between calendar and board views

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = async () => {
//     setIsLoading(true);
//     try {
//       const response = await axios.get('http://localhost:8080/api/events', {
//         params: { isPublic: true }
//       });
//       setEvents(response.data.map(event => ({
//         ...event,
//         color: getPriorityColor(event.priority)
//       })));
//     } catch (error) {
//       console.error('Error fetching events:', error);
//       toast.error('Failed to fetch schedule. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const getPriorityColor = (priority) => {
//     switch (priority) {
//       case 'low':
//         return '#10B981';
//       case 'medium':
//         return '#F59E0B';
//       case 'high':
//         return '#EF4444';
//       default:
//         return '#3B82F6';
//     }
//   };

//   const renderEventContent = (eventInfo) => {
//     return (
//       <div className="p-1">
//         <div className="font-semibold text-sm truncate">{eventInfo.event.title}</div>
//         <div className="text-xs truncate">{eventInfo.event.extendedProps.description}</div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 p-8">
//       <Toaster position="top-right" />
//       <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
//         <div className="p-8">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-4xl font-bold text-indigo-600">Your Schedule</h2>
//             <div className="space-x-4">
//               <button
//                 onClick={() => setActiveView('calendar')}
//                 className={`px-4 py-2 rounded-lg ${
//                   activeView === 'calendar' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'
//                 }`}
//               >
//                 Calendar View
//               </button>
//               <button
//                 onClick={() => setActiveView('board')}
//                 className={`px-4 py-2 rounded-lg ${
//                   activeView === 'board' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'
//                 }`}
//               >
//                 Board View
//               </button>
//             </div>
//           </div>
          
//           {isLoading ? (
//             <div className="flex justify-center items-center h-96">
//               <ClipLoader color="#4F46E5" size={50} />
//             </div>
//           ) : activeView === 'calendar' ? (
//             <div className="bg-white rounded-lg">
//               <FullCalendar
//                 plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//                 initialView="dayGridMonth"
//                 headerToolbar={{
//                   left: 'prev,next today',
//                   center: 'title',
//                   right: 'dayGridMonth,timeGridWeek,timeGridDay'
//                 }}
//                 events={events}
//                 eventContent={renderEventContent}
//                 height="auto"
//               />
//             </div>
//           ) : (
//             <TaskBoard />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScheduleView;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import { Toaster, toast } from 'react-hot-toast';
// import { ClipLoader } from 'react-spinners';
// import TaskBoard from './TaskBoard';
// import { FaCalendar, FaColumns, FaList } from 'react-icons/fa';

// const ScheduleView = () => {
//   const [events, setEvents] = useState([]);
//   const [tasks, setTasks] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [activeView, setActiveView] = useState('calendar');

//   useEffect(() => {
//     fetchEvents();
//     fetchTasks();
//   }, []);

//   const fetchEvents = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/events', {
//         params: { isPublic: true }
//       });
//       setEvents(response.data.map(event => ({
//         ...event,
//         color: getPriorityColor(event.priority)
//       })));
//     } catch (error) {
//       console.error('Error fetching events:', error);
//       toast.error('Failed to fetch schedule. Please try again.');
//     }
//   };

//   const fetchTasks = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/tasks');
//       setTasks(response.data);
//     } catch (error) {
//       console.error('Error fetching tasks:', error);
//       toast.error('Failed to fetch tasks. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const getPriorityColor = (priority) => {
//     switch (priority) {
//       case 'low':
//         return '#10B981';
//       case 'medium':
//         return '#F59E0B';
//       case 'high':
//         return '#EF4444';
//       default:
//         return '#3B82F6';
//     }
//   };

//   const renderEventContent = (eventInfo) => {
//     return (
//       <div className="p-1">
//         <div className="font-semibold text-sm truncate">{eventInfo.event.title}</div>
//         <div className="text-xs truncate">{eventInfo.event.extendedProps.description}</div>
//       </div>
//     );
//   };

//   const renderListView = () => {
//     return (
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             {tasks.map((task) => (
//               <tr key={task.id}>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{task.title}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.description}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                     task.status === 'completed' ? 'bg-green-100 text-green-800' :
//                     task.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
//                     'bg-red-100 text-red-800'
//                   }`}>
//                     {task.status}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                     task.priority === 'high' ? 'bg-red-100 text-red-800' :
//                     task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
//                     'bg-green-100 text-green-800'
//                   }`}>
//                     {task.priority}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(task.dueDate).toLocaleDateString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 p-8">
//       <Toaster position="top-right" />
//       <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
//         <div className="p-8">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-4xl font-bold text-indigo-600">Your Schedule</h2>
//             <div className="flex space-x-4">
//               <button
//                 onClick={() => setActiveView('calendar')}
//                 className={`flex items-center px-4 py-2 rounded-lg ${
//                   activeView === 'calendar' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'
//                 }`}
//               >
//                 <FaCalendar className="mr-2" /> Calendar
//               </button>
//               <button
//                 onClick={() => setActiveView('board')}
//                 className={`flex items-center px-4 py-2 rounded-lg ${
//                   activeView === 'board' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'
//                 }`}
//               >
//                 <FaColumns className="mr-2" /> Board
//               </button>
//               <button
//                 onClick={() => setActiveView('list')}
//                 className={`flex items-center px-4 py-2 rounded-lg ${
//                   activeView === 'list' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'
//                 }`}
//               >
//                 <FaList className="mr-2" /> List
//               </button>
//             </div>
//           </div>
          
//           {isLoading ? (
//             <div className="flex justify-center items-center h-96">
//               <ClipLoader color="#4F46E5" size={50} />
//             </div>
//           ) : activeView === 'calendar' ? (
//             <div className="bg-white rounded-lg">
//               <FullCalendar
//                 plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//                 initialView="dayGridMonth"
//                 headerToolbar={{
//                   left: 'prev,next today',
//                   center: 'title',
//                   right: 'dayGridMonth,timeGridWeek,timeGridDay'
//                 }}
//                 events={events}
//                 eventContent={renderEventContent}
//                 height="auto"
//               />
//             </div>
//           ) : activeView === 'board' ? (
//             <TaskBoard tasks={tasks} onTaskUpdate={fetchTasks} />
//           ) : (
//             renderListView()
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScheduleView;

import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Toaster, toast } from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';
import TaskBoard from './TaskBoard';
import { FaCalendar, FaColumns, FaList } from 'react-icons/fa';
import { fetchEvents, fetchTasks } from '../../services/api';

const ScheduleView = () => {
  const [events, setEvents] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeView, setActiveView] = useState('calendar');

  useEffect(() => {
    fetchScheduleData();
  }, []);

  const fetchScheduleData = async () => {
    try {
      const [eventsData, tasksData] = await Promise.all([fetchEvents(), fetchTasks()]);
      setEvents(eventsData.map(event => ({
        ...event,
        color: getPriorityColor(event.priority)
      })));
      setTasks(tasksData);
    } catch (error) {
      console.error('Error fetching schedule data:', error);
      toast.error('Failed to fetch schedule. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'low':
        return '#10B981';
      case 'medium':
        return '#F59E0B';
      case 'high':
        return '#EF4444';
      default:
        return '#3B82F6';
    }
  };

  const renderEventContent = (eventInfo) => {
    return (
      <div className="p-1">
        <div className="font-semibold text-sm truncate">{eventInfo.event.title}</div>
        <div className="text-xs truncate">{eventInfo.event.extendedProps.description}</div>
      </div>
    );
  };

  const renderListView = () => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tasks.map((task) => (
              <tr key={task.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{task.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    task.status === 'completed' ? 'bg-green-100 text-green-800' :
                    task.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {task.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    task.priority === 'high' ? 'bg-red-100 text-red-800' :
                    task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {task.priority}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(task.dueDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 p-8">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-4xl font-bold text-indigo-600">Your Schedule</h2>
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveView('calendar')}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  activeView === 'calendar' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                <FaCalendar className="mr-2" /> Calendar
              </button>
              <button
                onClick={() => setActiveView('board')}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  activeView === 'board' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                <FaColumns className="mr-2" /> Board
              </button>
              <button
                onClick={() => setActiveView('list')}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  activeView === 'list' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                <FaList className="mr-2" /> List
              </button>
            </div>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center items-center h-96">
              <ClipLoader color="#4F46E5" size={50} />
            </div>
          ) : activeView === 'calendar' ? (
            <div className="bg-white rounded-lg">
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                  left: 'prev,next today',
                  center: 'title',
                  right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                events={events}
                eventContent={renderEventContent}
                height="auto"
              />
            </div>
          ) : activeView === 'board' ? (
            <TaskBoard tasks={tasks} onTaskUpdate={fetchScheduleData} />
          ) : (
            renderListView()
          )}
        </div>
      </div>
    </div>
  );
};

export default ScheduleView;