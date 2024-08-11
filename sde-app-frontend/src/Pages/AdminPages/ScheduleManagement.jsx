// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import Select from 'react-select/creatable';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Toaster, toast } from 'react-hot-toast';
// import { FaRegCalendarAlt, FaUserAlt, FaTag, FaFlag, FaTimes } from 'react-icons/fa';
// import { MdTitle, MdDescription } from 'react-icons/md';
// import { ClipLoader } from 'react-spinners';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const styles = `
//   .multi-day-event {
//     background-color: rgba(59, 130, 246, 0.1);
//     border-left: 3px solid #3B82F6;
//   }
// `;

// const ScheduleManagement = () => {
//   const [events, setEvents] = useState([]);
//   const [newTask, setNewTask] = useState({
//     title: '',
//     description: '',
//     assignees: [],
//     priority: '',
//     deadline: '',
//     tags: [],
//     start: '',
//     end: '',
//   });
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [assigneeOptions, setAssigneeOptions] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   const priorityOptions = [
//     { value: 'low', label: 'Low', color: '#10B981' },
//     { value: 'medium', label: 'Medium', color: '#F59E0B' },
//     { value: 'high', label: 'High', color: '#EF4444' },
//   ];

//   const tagOptions = [
//     { value: 'development', label: 'Development', color: '#3B82F6' },
//     { value: 'design', label: 'Design', color: '#EC4899' },
//     { value: 'marketing', label: 'Marketing', color: '#8B5CF6' },
//     { value: 'meeting', label: 'Meeting', color: '#F97316' },
//   ];

//   useEffect(() => {
//     fetchEvents();
//     fetchAssignees();
//   }, []);

//   const fetchEvents = async () => {
//     setIsLoading(true);
//     try {
//       const response = await axios.get('http://localhost:7770/api/events');
//       setEvents(response.data.map(event => ({
//         ...event,
//         extendedProps: {
//           ...event.extendedProps,
//           assignees: event.extendedProps?.assignees || []
//         },
//         color: priorityOptions.find(option => option.value === event.priority)?.color
//       })));
//     } catch (error) {
//       console.error('Error fetching events:', error);
//       toast.error('Failed to fetch events. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const fetchAssignees = async () => {
//     try {
//       const response = await axios.get('http://localhost:7770/users/staff');
//       setAssigneeOptions(response.data.map(user => ({
//         value: user.id,
//         label: user.name
//       })));
//     } catch (error) {
//       console.error('Error fetching assignees:', error);
//       toast.error('Failed to fetch assignees. Please try again.');
//     }
//   };

//   const handleDateSelect = (selectInfo) => {
//     setNewTask({
//       ...newTask,
//       start: selectInfo.startStr,
//       end: selectInfo.endStr,
//     });
//     setIsModalOpen(true);
//   };

//   const handleTaskSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       const response = await axios.post('http://localhost:7770/api/events', newTask);
//       const newEvent = {
//         ...response.data,
//         extendedProps: {
//           ...response.data.extendedProps,
//           assignees: response.data.extendedProps?.assignees || []
//         },
//         color: priorityOptions.find(option => option.value === response.data.priority)?.color
//       };
//       setEvents(prevEvents => [...prevEvents, newEvent]);
//       setNewTask({
//         title: '',
//         description: '',
//         assignees: [],
//         priority: '',
//         deadline: '',
//         tags: [],
//         start: '',
//         end: '',
//       });
//       setIsModalOpen(false);
//       toast.success('Task added successfully!');
//     } catch (error) {
//       console.error('Error creating task:', error);
//       toast.error('Failed to add task. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleEventClick = (clickInfo) => {
//     setSelectedEvent(clickInfo.event);
//   };

//   const handleDeleteEvent = async () => {
//     if (selectedEvent) {
//       setIsLoading(true);
//       try {
//         await axios.delete(`http://localhost:7770/api/events/${selectedEvent.id}`);
//         setEvents(prevEvents => prevEvents.filter(event => event.id !== selectedEvent.id));
//         await fetchEvents();
//         toast.success('Event deleted successfully!');
//         setSelectedEvent(null);
//       } catch (error) {
//         console.error('Error deleting event:', error);
//         toast.error('Failed to delete event. Please try again.');
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   };

//   const handleDateChange = (date) => {
//     setNewTask({ ...newTask, deadline: date });
//   };

//   const customStyles = {
//     option: (provided, state) => ({
//       ...provided,
//       backgroundColor: state.isSelected ? state.data.color : state.isFocused ? `${state.data.color}22` : null,
//       color: state.isSelected ? 'white' : 'black',
//     }),
//     singleValue: (provided, state) => ({
//       ...provided,
//       color: state.data.color,
//       fontWeight: 'bold',
//     }),
//   };

//   const renderEventContent = (eventInfo) => {
//     const isMultiDayEvent = !eventInfo.event.allDay &&
//       eventInfo.event.end.getDate() !== eventInfo.event.start.getDate();

//     return (
//       <div className={`p-1 ${isMultiDayEvent ? 'multi-day-event' : ''}`}>
//         <div className="font-semibold text-sm truncate">{eventInfo.event.title}</div>
//         {!isMultiDayEvent && (
//           <div className="text-xs truncate">
//             {eventInfo.event.extendedProps.assignees && eventInfo.event.extendedProps.assignees.length > 0
//               ? eventInfo.event.extendedProps.assignees.join(', ')
//               : 'No assignees'}
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-8">
//       <style>{styles}</style>
//       <Toaster position="top-right" />
//       <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
//         <div className="p-8">
//           <h2 className="text-4xl font-bold mb-6 text-indigo-600">Schedule Management</h2>

//           {isLoading ? (
//             <div className="flex justify-center items-center h-96">
//               <ClipLoader color="#4F46E5" size={50} />
//             </div>
//           ) : (
//             <div className="bg-white rounded-lg">
//               <FullCalendar
//                 key={events.length}
//                 plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//                 initialView="dayGridMonth"
//                 headerToolbar={{
//                   left: 'prev,next today',
//                   center: 'title',
//                   right: 'dayGridMonth,timeGridWeek,timeGridDay'
//                 }}
//                 events={events}
//                 selectable={true}
//                 select={handleDateSelect}
//                 eventClick={handleEventClick}
//                 height="auto"
//                 eventContent={renderEventContent}
//                 eventDisplay="block"
//                 displayEventEnd={true}
//               />
//             </div>
//           )}
//         </div>
//       </div>

//       <AnimatePresence>
//         {isModalOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
//           >
//             <motion.div
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 50, opacity: 0 }}
//               className="bg-white rounded-xl p-8 w-full max-w-md max-h-[90vh] overflow-y-auto modal-content"
//             >
//               <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Add New Task</h3>
//               <form onSubmit={handleTaskSubmit} className="space-y-4">
//                 <div className="flex items-center space-x-2">
//                   <MdTitle className="text-gray-400" />
//                   <input
//                     type="text"
//                     value={newTask.title}
//                     onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
//                     placeholder="Task title"
//                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                     required
//                   />
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <MdDescription className="text-gray-400" />
//                   <textarea
//                     value={newTask.description}
//                     onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
//                     placeholder="Task description"
//                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                     rows="3"
//                   />
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <FaUserAlt className="text-gray-400" />
//                   <Select
//                     isMulti
//                     isClearable
//                     isSearchable
//                     value={newTask.assignees.map(assignee => assigneeOptions.find(option => option.value === assignee))}
//                     onChange={(selectedOptions) => setNewTask({ ...newTask, assignees: selectedOptions.map(option => option.value) })}
//                     options={assigneeOptions}
//                     placeholder="Search and select assignees"
//                     className="react-select-container w-full"
//                     classNamePrefix="react-select"
//                   />
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <FaFlag className="text-gray-400" />
//                   <Select
//                     value={priorityOptions.find(option => option.value === newTask.priority)}
//                     onChange={(selectedOption) => setNewTask({ ...newTask, priority: selectedOption.value })}
//                     options={priorityOptions}
//                     placeholder="Select priority"
//                     className="react-select-container w-full"
//                     classNamePrefix="react-select"
//                     styles={customStyles}
//                   />
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <FaRegCalendarAlt className="text-gray-400" />
//                   <DatePicker
//                     selected={newTask.deadline}
//                     onChange={handleDateChange}
//                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                     placeholderText="Select deadline"
//                     dateFormat="MMMM d, yyyy"
//                     minDate={new Date()}
//                     showPopperArrow={false}
//                     customInput={
//                       <input
//                         type="text"
//                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                       />
//                     }
//                   />
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <FaTag className="text-gray-400" />
//                   <Select
//                     isMulti
//                     value={newTask.tags.map(tag => tagOptions.find(option => option.value === tag))}
//                     onChange={(selectedOptions) => setNewTask({ ...newTask, tags: selectedOptions.map(option => option.value) })}
//                     options={tagOptions}
//                     placeholder="Select tags"
//                     className="react-select-container w-full"
//                     classNamePrefix="react-select"
//                   />
//                 </div>
//                 <div className="flex justify-end space-x-2 pt-4">
//                   <button
//                     type="button"
//                     onClick={() => setIsModalOpen(false)}
//                     className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-300"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-md hover:shadow-lg"
//                     disabled={isLoading}
//                   >
//                     {isLoading ? (
//                       <ClipLoader color="#ffffff" size={20} />
//                     ) : (
//                       'Add Task'
//                     )}
//                   </button>
//                 </div>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <AnimatePresence>
//         {selectedEvent && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
//           >
//             <motion.div
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 50, opacity: 0 }}
//               className="bg-white rounded-xl p-8 w-full max-w-md max-h-[90vh] overflow-y-auto modal-content"
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-2xl font-semibold text-indigo-600">{selectedEvent.title}</h3>
//                 <button onClick={() => setSelectedEvent(null)} className="text-gray-500 hover:text-gray-700">
//                   <FaTimes />
//                 </button>
//               </div>
//               <div className="space-y-4">
//                 <p><strong>Description:</strong> {selectedEvent.extendedProps.description}</p>
//                 <p><strong>Assignees:</strong> {selectedEvent.extendedProps.assignees.join(', ') || 'None'}</p>
//                 <p><strong>Priority:</strong> {selectedEvent.extendedProps.priority}</p>
//                 <p><strong>Deadline:</strong> {new Date(selectedEvent.extendedProps.deadline).toLocaleDateString()}</p>
//                 <p><strong>Tags:</strong> {selectedEvent.extendedProps.tags.join(', ') || 'None'}</p>
//                 <p><strong>Start:</strong> {new Date(selectedEvent.start).toLocaleString()}</p>
//                 <p><strong>End:</strong> {new Date(selectedEvent.end).toLocaleString()}</p>
//               </div>
//               <div className="mt-6 flex justify-end">
//                 <button
//                   onClick={handleDeleteEvent}
//                   className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-md hover:shadow-lg"
//                 >
//                   Delete Event
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default ScheduleManagement;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Select from 'react-select/creatable';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast';
import { FaRegCalendarAlt, FaUserAlt, FaTag, FaFlag, FaTimes } from 'react-icons/fa';
import { MdTitle, MdDescription } from 'react-icons/md';
import { ClipLoader } from 'react-spinners';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const styles = `
  .multi-day-event {
    background-color: rgba(59, 130, 246, 0.1);
    border-left: 3px solid #3B82F6;
  }
`;

const ScheduleManagement = () => {
  const [events, setEvents] = useState([]);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    assignees: [],
    priority: '',
    deadline: '',
    tags: [],
    start: '',
    end: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [assigneeOptions, setAssigneeOptions] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const priorityOptions = [
    { value: 'low', label: 'Low', color: '#10B981' },
    { value: 'medium', label: 'Medium', color: '#F59E0B' },
    { value: 'high', label: 'High', color: '#EF4444' },
  ];

  const tagOptions = [
    { value: 'development', label: 'Development', color: '#3B82F6' },
    { value: 'design', label: 'Design', color: '#EC4899' },
    { value: 'marketing', label: 'Marketing', color: '#8B5CF6' },
    { value: 'meeting', label: 'Meeting', color: '#F97316' },
  ];

  useEffect(() => {
    fetchEvents();
    fetchAssignees();
  }, []);

  const fetchEvents = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:7770/api/events');
      setEvents(response.data.map(event => ({
        ...event,
        extendedProps: {
          ...event.extendedProps,
          assignees: event.extendedProps?.assignees || []
        },
        color: priorityOptions.find(option => option.value === event.priority)?.color
      })));
    } catch (error) {
      console.error('Error fetching events:', error);
      toast.error('Failed to fetch events. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchAssignees = async () => {
    try {
      const response = await axios.get('http://localhost:7770/users/staff');
      setAssigneeOptions(response.data.map(user => ({
        value: user.id,
        label: user.name
      })));
    } catch (error) {
      console.error('Error fetching assignees:', error);
      toast.error('Failed to fetch assignees. Please try again.');
    }
  };

  const handleDateSelect = (selectInfo) => {
    setNewTask({
      ...newTask,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
    });
    setIsModalOpen(true);
  };

  const handleTaskSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formattedTask = {
        title: newTask.title,
        description: newTask.description,
        assignees: newTask.assignees.map(assigneeId => ({ id: assigneeId })),
        priority: newTask.priority.toUpperCase(),
        deadline: newTask.deadline.toISOString(),
        tags: newTask.tags,
      };

      const response = await axios.post('http://localhost:7770/api/events', formattedTask);
      const newEvent = {
        ...response.data,
        extendedProps: {
          ...response.data.extendedProps,
          assignees: response.data.extendedProps?.assignees || []
        },
        color: priorityOptions.find(option => option.value === response.data.priority)?.color
      };
      setEvents(prevEvents => [...prevEvents, newEvent]);
      setNewTask({
        title: '',
        description: '',
        assignees: [],
        priority: '',
        deadline: '',
        tags: [],
        start: '',
        end: '',
      });
      setIsModalOpen(false);
      toast.success('Task added successfully!');
    } catch (error) {
      console.error('Error creating task:', error);
      toast.error('Failed to add task. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event);
  };

  const handleDeleteEvent = async () => {
    if (selectedEvent) {
      setIsLoading(true);
      try {
        await axios.delete(`http://localhost:7770/api/events/${selectedEvent.id}`);
        setEvents(prevEvents => prevEvents.filter(event => event.id !== selectedEvent.id));
        await fetchEvents();
        toast.success('Event deleted successfully!');
        setSelectedEvent(null);
      } catch (error) {
        console.error('Error deleting event:', error);
        toast.error('Failed to delete event. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleDateChange = (date) => {
    setNewTask({ ...newTask, deadline: date });
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? state.data.color : state.isFocused ? `${state.data.color}22` : null,
      color: state.isSelected ? 'white' : 'black',
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.data.color,
      fontWeight: 'bold',
    }),
  };

  const renderEventContent = (eventInfo) => {
    const isMultiDayEvent = !eventInfo.event.allDay &&
      eventInfo.event.end.getDate() !== eventInfo.event.start.getDate();

    return (
      <div className={`p-1 ${isMultiDayEvent ? 'multi-day-event' : ''}`}>
        <div className="font-semibold text-sm truncate">{eventInfo.event.title}</div>
        {!isMultiDayEvent && (
          <div className="text-xs truncate">
            {eventInfo.event.extendedProps.assignees && eventInfo.event.extendedProps.assignees.length > 0
              ? eventInfo.event.extendedProps.assignees.join(', ')
              : 'No assignees'}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-8">
      <style>{styles}</style>
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-4xl font-bold mb-6 text-indigo-600">Schedule Management</h2>

          {isLoading ? (
            <div className="flex justify-center items-center h-96">
              <ClipLoader color="#4F46E5" size={50} />
            </div>
          ) : (
            <div className="bg-white rounded-lg">
              <FullCalendar
                key={events.length}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                  left: 'prev,next today',
                  center: 'title',
                  right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                events={events}
                selectable={true}
                select={handleDateSelect}
                eventClick={handleEventClick}
                height="auto"
                eventContent={renderEventContent}
                eventDisplay="block"
                displayEventEnd={true}
              />
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white rounded-xl p-8 w-full max-w-md max-h-[90vh] overflow-y-auto modal-content"
            >
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Add New Task</h3>
              <form onSubmit={handleTaskSubmit} className="space-y-4">
                <div className="flex items-center space-x-2">
                  <MdTitle className="text-gray-400" />
                  <input
                    type="text"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    placeholder="Task title"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <MdDescription className="text-gray-400" />
                  <textarea
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                    placeholder="Task description"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    rows="3"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <FaUserAlt className="text-gray-400" />
                  <Select
                    isMulti
                    isClearable
                    isSearchable
                    value={newTask.assignees.map(assignee => assigneeOptions.find(option => option.value === assignee))}
                    onChange={(selectedOptions) => setNewTask({ ...newTask, assignees: selectedOptions.map(option => option.value) })}
                    options={assigneeOptions}
                    placeholder="Search and select assignees"
                    className="react-select-container w-full"
                    classNamePrefix="react-select"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <FaFlag className="text-gray-400" />
                  <Select
                    value={priorityOptions.find(option => option.value === newTask.priority)}
                    onChange={(selectedOption) => setNewTask({ ...newTask, priority: selectedOption.value })}
                    options={priorityOptions}
                    placeholder="Select priority"
                    className="react-select-container w-full"
                    classNamePrefix="react-select"
                    styles={customStyles}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <FaRegCalendarAlt className="text-gray-400" />
                  <DatePicker
                    selected={newTask.deadline}
                    onChange={handleDateChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholderText="Select deadline"
                    dateFormat="MMMM d, yyyy"
                    minDate={new Date()}
                    showPopperArrow={false}
                    customInput={
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    }
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <FaTag className="text-gray-400" />
                  <Select
                    isMulti
                    value={newTask.tags.map(tag => tagOptions.find(option => option.value === tag))}
                    onChange={(selectedOptions) => setNewTask({ ...newTask, tags: selectedOptions.map(option => option.value) })}
                    options={tagOptions}
                    placeholder="Select tags"
                    className="react-select-container w-full"
                    classNamePrefix="react-select"
                  />
                </div>
                <div className="flex justify-end space-x-2 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <ClipLoader color="#ffffff" size={20} />
                    ) : (
                      'Add Task'
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white rounded-xl p-8 w-full max-w-md max-h-[90vh] overflow-y-auto modal-content"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold text-indigo-600">{selectedEvent.title}</h3>
                <button onClick={() => setSelectedEvent(null)} className="text-gray-500 hover:text-gray-700">
                  <FaTimes />
                </button>
              </div>
              <div className="space-y-4">
                <p><strong>Description:</strong> {selectedEvent.extendedProps.description}</p>
                <p><strong>Assignees:</strong> {selectedEvent.extendedProps.assignees.join(', ') || 'None'}</p>
                <p><strong>Priority:</strong> {selectedEvent.extendedProps.priority}</p>
                <p><strong>Deadline:</strong> {new Date(selectedEvent.extendedProps.deadline).toLocaleDateString()}</p>
                <p><strong>Tags:</strong> {selectedEvent.extendedProps.tags.join(', ') || 'None'}</p>
                <p><strong>Start:</strong> {new Date(selectedEvent.start).toLocaleString()}</p>
                <p><strong>End:</strong> {new Date(selectedEvent.end).toLocaleString()}</p>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleDeleteEvent}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  Delete Event
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScheduleManagement;