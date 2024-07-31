import React from 'react';

const ReportingAnalytics = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-indigo-600">Reporting and Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-3 text-gray-700">Total Staff</h3>
          <p className="text-4xl font-bold text-blue-500">42</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-3 text-gray-700">Shifts This Week</h3>
          <p className="text-4xl font-bold text-green-500">156</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-3 text-gray-700">Overtime Hours</h3>
          <p className="text-4xl font-bold text-yellow-500">24</p>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-6 text-gray-700">Generate Reports</h3>
        <div className="flex flex-wrap gap-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
            Staff Attendance Report
          </button>
          <button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
            Shift Distribution Report
          </button>
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
            Overtime Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportingAnalytics;