import React, { useState } from 'react';

const NotificationsAlerts = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New shift assignment for John Doe', date: '2023-05-01', read: false },
    { id: 2, message: 'Schedule change request from Jane Smith', date: '2023-05-02', read: true },
    { id: 3, message: 'Overtime alert for night shift', date: '2023-05-03', read: false },
  ]);

  const toggleRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? {...notif, read: !notif.read} : notif
    ));
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-indigo-600">Notifications and Alerts</h2>
      <div className="mb-6">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
          Send New Notification
        </button>
      </div>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div 
            key={notification.id} 
            className={`bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer ${
              notification.read ? 'opacity-60' : 'border-l-4 border-blue-500'
            }`}
            onClick={() => toggleRead(notification.id)}
          >
            <p className={`text-gray-800 ${notification.read ? '' : 'font-semibold'}`}>{notification.message}</p>
            <p className="text-sm text-gray-500 mt-2">{notification.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsAlerts;