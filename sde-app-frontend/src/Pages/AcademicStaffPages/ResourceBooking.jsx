import React, { useState } from 'react';
import { FaBookOpen } from 'react-icons/fa';

const ResourceBooking = () => {
  const [resources, setResources] = useState([
    { id: 1, name: 'Lecture Hall A', available: true },
    { id: 2, name: 'Computer Lab 1', available: false },
    { id: 3, name: 'Projector', available: true },
  ]);

  const [selectedResource, setSelectedResource] = useState('');
  const [bookingDate, setBookingDate] = useState('');

  const handleBooking = () => {
    if (!selectedResource || !bookingDate) {
      alert('Please select a resource and date');
      return;
    }

    // Here you would typically send the booking request to your backend
    console.log('Booking:', { resource: selectedResource, date: bookingDate });
    alert('Booking request sent successfully!');

    // Reset form
    setSelectedResource('');
    setBookingDate('');
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <FaBookOpen className="mr-2" />
        Resource Booking
      </h2>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
      <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Select Resource</label>
          <select
            value={selectedResource}
            onChange={(e) => setSelectedResource(e.target.value)}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Choose a resource</option>
            {resources.map((resource) => (
              <option key={resource.id} value={resource.name} disabled={!resource.available}>
                {resource.name} {!resource.available && '(Unavailable)'}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Booking Date</label>
          <input
            type="date"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          onClick={handleBooking}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Book Resource
        </button>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-medium text-gray-900">Available Resources</h3>
        <ul className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
          {resources.map((resource) => (
            <li key={resource.id} className="py-4 flex items-center justify-between">
              <div className="flex items-center">
                <span className={`h-2 w-2 rounded-full ${resource.available ? 'bg-green-400' : 'bg-red-400'} mr-2`}></span>
                <span className="text-sm font-medium text-gray-900">{resource.name}</span>
              </div>
              <span className={`text-sm ${resource.available ? 'text-green-600' : 'text-red-600'}`}>
                {resource.available ? 'Available' : 'Unavailable'}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResourceBooking;