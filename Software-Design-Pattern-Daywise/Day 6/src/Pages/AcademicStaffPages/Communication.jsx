import React, { useState } from 'react';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Communication = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'System', content: 'Welcome to the communication center!', timestamp: '2024-07-28 09:00:00' },
    { id: 2, sender: 'John Doe', content: 'Hello, is the lecture for CS101 still scheduled for tomorrow?', timestamp: '2024-07-28 10:15:00' },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim() === '') return;

    const newMsg = {
      id: messages.length + 1,
      sender: 'You',
      content: newMessage,
      timestamp: new Date().toLocaleString(),
    };

    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <FaEnvelope className="mr-2" />
        Communication Center
      </h2>
      <div className="bg-white shadow sm:rounded-lg overflow-hidden">
        <div className="p-4 max-h-96 overflow-y-auto">
          {messages.map((message) => (
            <div key={message.id} className={`mb-4 ${message.sender === 'You' ? 'text-right' : ''}`}>
              <div className={`inline-block p-2 rounded-lg ${message.sender === 'You' ? 'bg-indigo-100' : 'bg-gray-100'}`}>
                <p className="font-semibold">{message.sender}</p>
                <p>{message.content}</p>
                <p className="text-xs text-gray-500 mt-1">{message.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t p-4">
          <div className="flex">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message here..."
              className="flex-grow mr-2 p-2 border rounded"
            />
            <button
              onClick={sendMessage}
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 flex items-center"
            >
              <FaPaperPlane className="mr-2" />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communication;