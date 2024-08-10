import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaBell, FaEdit, FaTrash, FaUsers, FaPaperPlane } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { toast, Toaster } from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';

const NotificationsAlerts = () => {
  const [notifications, setNotifications] = useState([]);
  const [newNotification, setNewNotification] = useState({
    title: '',
    message: '',
    priority: 'normal',
    recipients: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userGroups, setUserGroups] = useState([]);
  const [selectedUserGroups, setSelectedUserGroups] = useState([]);

  useEffect(() => {
    fetchNotifications();
    fetchUserGroups();
  }, []);

  const fetchNotifications = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:8080/api/notifications');
      setNotifications(response.data);
    } catch (error) {
      console.error('Error fetching notifications:', error);
      toast.error('Failed to fetch notifications. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUserGroups = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/user-groups');
      setUserGroups(response.data);
    } catch (error) {
      console.error('Error fetching user groups:', error);
      toast.error('Failed to fetch user groups. Please try again.');
    }
  };

  const handleNotificationSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:8080/api/notifications', {
        ...newNotification,
        recipients: selectedUserGroups,
      });
      setNotifications([...notifications, response.data]);
      setNewNotification({
        title: '',
        message: '',
        priority: 'normal',
        recipients: [],
      });
      setSelectedUserGroups([]);
      setIsModalOpen(false);
      toast.success('Notification sent successfully!');
    } catch (error) {
      console.error('Error sending notification:', error);
      toast.error('Failed to send notification. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const deleteNotification = async (id) => {
    if (window.confirm('Are you sure you want to delete this notification?')) {
      setIsLoading(true);
      try {
        await axios.delete(`http://localhost:8080/api/notifications/${id}`);
        setNotifications(notifications.filter((notification) => notification.id !== id));
        toast.success('Notification deleted successfully!');
      } catch (error) {
        console.error('Error deleting notification:', error);
        toast.error('Failed to delete notification. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const priorityColors = {
    low: 'bg-green-100 text-green-800',
    normal: 'bg-blue-100 text-blue-800',
    high: 'bg-red-100 text-red-800',
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-600">Notifications & Alerts</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <FaBell className="inline-block mr-2" />
            Create New Notification
          </button>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <ClipLoader color="#4F46E5" size={50} />
          </div>
        ) : (
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {notifications.map((notification) => (
                <li key={notification.id}>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">{notification.title}</h3>
                      <div className="flex space-x-2">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${priorityColors[notification.priority]}`}>
                          {notification.priority}
                        </span>
                        <button
                          onClick={() => deleteNotification(notification.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">{notification.message}</p>
                    <div className="mt-2 text-sm text-gray-500">
                      Sent to: {notification.recipients.join(', ')}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

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
                className="bg-white rounded-xl p-8 w-full max-w-md max-h-[90vh] overflow-y-auto"
              >
                <h2 className="text-2xl font-semibold mb-4">Create New Notification</h2>
                <form onSubmit={handleNotificationSubmit}>
                  <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      value={newNotification.title}
                      onChange={(e) => setNewNotification({ ...newNotification, title: e.target.value })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={newNotification.message}
                      onChange={(e) => setNewNotification({ ...newNotification, message: e.target.value })}
                      rows="3"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
                      Priority
                    </label>
                    <select
                      id="priority"
                      value={newNotification.priority}
                      onChange={(e) => setNewNotification({ ...newNotification, priority: e.target.value })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="low">Low</option>
                      <option value="normal">Normal</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Recipients</label>
                    <div className="mt-2 space-y-2">
                      {userGroups.map((group) => (
                        <label key={group.id} className="inline-flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedUserGroups.includes(group.id)}
                            onChange={() => {
                              setSelectedUserGroups(
                                selectedUserGroups.includes(group.id)
                                  ? selectedUserGroups.filter((id) => id !== group.id)
                                  : [...selectedUserGroups, group.id]
                              );
                            }}
                            className="form-checkbox h-5 w-5 text-indigo-600"
                          />
                          <span className="ml-2 text-gray-700">{group.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2 mt-6">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <FaPaperPlane className="inline-block mr-2" />
                      Send Notification
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NotificationsAlerts;