// NotificationsAlerts.js
import React, { useState } from 'react';
import { FaEnvelope, FaSms } from 'react-icons/fa';

const NotificationsAlerts = () => {
  const [notification, setNotification] = useState({ title: '', message: '', recipients: '' });

  const sendNotification = () => {
    console.log('Sending notification:', notification);
    setNotification({ title: '', message: '', recipients: '' });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Notifications & Alerts</h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Notification Title"
          value={notification.title}
          onChange={(e) => setNotification({ ...notification, title: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Notification Message"
          value={notification.message}
          onChange={(e) => setNotification({ ...notification, message: e.target.value })}
          className="w-full border p-2 rounded"
          rows="4"
        />
        <input
          type="text"
          placeholder="Recipients (comma-separated emails)"
          value={notification.recipients}
          onChange={(e) => setNotification({ ...notification, recipients: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <div>
          <button onClick={sendNotification} className="bg-blue-500 text-white p-2 rounded mr-2 flex items-center">
            <FaEnvelope className="mr-2" /> Send Email
          </button>
          <button onClick={sendNotification} className="bg-green-500 text-white p-2 rounded flex items-center">
            <FaSms className="mr-2" /> Send SMS
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationsAlerts;