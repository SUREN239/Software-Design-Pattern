// import React from 'react';

// const ReportingAnalytics = () => {
//   return (
//     <div className="p-6">
//       <h2 className="text-3xl font-bold mb-6 text-indigo-600">Reporting and Analytics</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//           <h3 className="text-xl font-semibold mb-3 text-gray-700">Total Staff</h3>
//           <p className="text-4xl font-bold text-blue-500">42</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//           <h3 className="text-xl font-semibold mb-3 text-gray-700">Shifts This Week</h3>
//           <p className="text-4xl font-bold text-green-500">156</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//           <h3 className="text-xl font-semibold mb-3 text-gray-700">Overtime Hours</h3>
//           <p className="text-4xl font-bold text-yellow-500">24</p>
//         </div>
//       </div>
//       <div className="mt-10">
//         <h3 className="text-2xl font-semibold mb-6 text-gray-700">Generate Reports</h3>
//         <div className="flex flex-wrap gap-4">
//           <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
//             Staff Attendance Report
//           </button>
//           <button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
//             Shift Distribution Report
//           </button>
//           <button className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
//             Overtime Report
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportingAnalytics;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { FaFileAlt, FaDownload, FaChartLine } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { ClipLoader } from 'react-spinners';
import { toast, Toaster } from 'react-hot-toast';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);

const ReportingAnalytics = () => {
  const [reportType, setReportType] = useState('taskCompletion');
  const [startDate, setStartDate] = useState(new Date(new Date().setMonth(new Date().getMonth() - 1)));
  const [endDate, setEndDate] = useState(new Date());
  const [reportData, setReportData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const reportTypes = [
    { value: 'taskCompletion', label: 'Task Completion' },
    { value: 'userPerformance', label: 'User Performance' },
    { value: 'departmentWorkload', label: 'Department Workload' },
    { value: 'priorityDistribution', label: 'Priority Distribution' },
  ];

  useEffect(() => {
    generateReport();
  }, [reportType, startDate, endDate]);

  const generateReport = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://localhost:8080/api/reports/${reportType}`, {
        params: {
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
        },
      });
      setReportData(response.data);
    } catch (error) {
      console.error('Error generating report:', error);
      toast.error('Failed to generate report. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const downloadReport = () => {
    // Implement report download functionality
    toast.success('Report downloaded successfully!');
  };

  const renderChart = () => {
    if (!reportData) return null;

    switch (reportType) {
      case 'taskCompletion':
        return (
          <Line
            data={{
              labels: reportData.labels,
              datasets: [
                {
                  label: 'Completed Tasks',
                  data: reportData.completedTasks,
                  borderColor: 'rgb(75, 192, 192)',
                  tension: 0.1,
                },
                {
                  label: 'Total Tasks',
                  data: reportData.totalTasks,
                  borderColor: 'rgb(255, 99, 132)',
                  tension: 0.1,
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: 'Task Completion Over Time',
                },
              },
            }}
          />
        );
      case 'userPerformance':
        return (
          <Bar
            data={{
              labels: reportData.users,
              datasets: [
                {
                  label: 'Tasks Completed',
                  data: reportData.tasksCompleted,
                  backgroundColor: 'rgba(75, 192, 192, 0.6)',
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: 'User Performance',
                },
              },
            }}
          />
        );
      case 'departmentWorkload':
        return (
          <Pie
            data={{
              labels: reportData.departments,
              datasets: [
                {
                  data: reportData.workload,
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                  ],
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: 'Department Workload Distribution',
                },
              },
            }}
          />
        );
      case 'priorityDistribution':
        return (
          <Bar
            data={{
              labels: reportData.priorities,
              datasets: [
                {
                  label: 'Number of Tasks',
                  data: reportData.taskCounts,
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                  ],
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: 'Task Priority Distribution',
                },
              },
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-indigo-600">Reports and Analytics</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-wrap items-center justify-between mb-6">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
              <select
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
                className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                {reportTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex space-x-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4 mb-6">
            <button
              onClick={generateReport}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <FaChartLine className="inline-block mr-2" />
              Generate Report
            </button>
            <button
              onClick={downloadReport}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <FaDownload className="inline-block mr-2" />
              Download Report
            </button>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <ClipLoader color="#4F46E5" size={50} />
            </div>
          ) : reportData ? (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">{reportTypes.find((type) => type.value === reportType)?.label} Report</h2>
              {renderChart()}
            </div>
          ) : (
            <div className="text-center text-gray-500">
              <FaFileAlt className="mx-auto text-4xl mb-2" />
              <p>No report data available. Please generate a report.</p>
            </div>
          )}
        </div>

        {reportData && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Report Summary</h2>
            <div className="prose max-w-none">
              {/* Add a summary of the report data here */}
              <p>This is a placeholder for the report summary. You can add more detailed analysis and insights about the generated report here.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportingAnalytics;