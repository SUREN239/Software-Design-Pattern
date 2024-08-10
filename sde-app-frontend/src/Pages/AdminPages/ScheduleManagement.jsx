import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Select from 'react-select/creatable';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast';
import { FaRegCalendarAlt, FaUserAlt, FaTag, FaFlag } from 'react-icons/fa';
import { MdTitle, MdDescription } from 'react-icons/md';
import { ClipLoader } from 'react-spinners';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
      const response = await axios.get('http://localhost:8080/api/events');
      setEvents(response.data.map(event => ({
        ...event,
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
      const response = await axios.get('http://localhost:8080/api/v/users/staff');
      setAssigneeOptions(response.data.map(user => ({
        value: user.id,
        label: `${user.firstName} ${user.lastName}`
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
      const response = await axios.post('http://localhost:8080/api/events', newTask);
      const newEvent = {
        ...response.data,
        color: priorityOptions.find(option => option.value === response.data.priority)?.color
      };
      setEvents([...events, newEvent]);
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

  const handleEventClick = async (clickInfo) => {
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'?`)) {
      setIsLoading(true);
      try {
        await axios.delete(`http://localhost:8080/api/events/${clickInfo.event.id}`);
        setEvents(events.filter(event => event.id !== clickInfo.event.id));
        toast.success('Event deleted successfully!');
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-8">
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
    </div>
  );
};

const renderEventContent = (eventInfo) => {
  return (
    <div className="p-1">
      <div className="font-semibold text-sm truncate">{eventInfo.event.title}</div>
      <div className="text-xs truncate">{eventInfo.event.extendedProps.assignees.join(', ')}</div>
    </div>
  )
}

export default ScheduleManagement;