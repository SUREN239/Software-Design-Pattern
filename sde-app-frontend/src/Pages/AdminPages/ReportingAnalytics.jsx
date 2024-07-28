// ReportingAnalytics.js
import React from 'react';
import { FaFileAlt, FaChartBar, FaPrint } from 'react-icons/fa';

const ReportingAnalytics = () => {
  const generateReport = (type) => {
    console.log(`Generating ${type} report`);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Reporting & Analytics</h2>
      <div className="grid grid-cols-2 gap-4">
        <button onClick={() => generateReport('staff schedules')} className="bg-blue-500 text-white p-4 rounded flex items-center justify-center">
          <FaFileAlt className="mr-2" /> Staff Schedules Report
        </button>
        <button onClick={() => generateReport('room utilization')} className="bg-green-500 text-white p-4 rounded flex items-center justify-center">
          <FaFileAlt className="mr-2" /> Room Utilization Report
        </button>
        <button onClick={() => generateReport('attendance')} className="bg-yellow-500 text-white p-4 rounded flex items-center justify-center">
          <FaFileAlt className="mr-2" /> Attendance Report
        </button>
        <button onClick={() => generateReport('efficiency')} className="bg-purple-500 text-white p-4 rounded flex items-center justify-center">
          <FaChartBar className="mr-2" /> Scheduling Efficiency Analysis
        </button>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Quick Actions</h3>
        <button className="bg-gray-200 text-gray-800 p-2 rounded mr-2">
          <FaPrint /> Print Reports
        </button>
        <button className="bg-gray-200 text-gray-800 p-2 rounded">
          <FaFileAlt /> Export Data
        </button>
      </div>
    </div>
  );
};

export default ReportingAnalytics;