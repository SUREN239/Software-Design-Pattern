import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaClipboardList, FaUserFriends, FaTag } from 'react-icons/fa';
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { ClipLoader } from 'react-spinners';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({
    totalTasks: 0,
    completedTasks: 0,
    upcomingTasks: 0,
    totalAssignees: 0,
  });
  const [upcomingTasks, setUpcomingTasks] = useState([]);
  const [priorityData, setPriorityData] = useState({});
  const [tagData, setTagData] = useState({});

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    setIsLoading(true);
    try {
      const [statsResponse, tasksResponse, priorityResponse, tagResponse] = await Promise.all([
        axios.get('http://localhost:8080/api/dashboard/stats'),
        axios.get('http://localhost:8080/api/dashboard/upcoming-tasks'),
        axios.get('http://localhost:8080/api/dashboard/priority-distribution'),
        axios.get('http://localhost:8080/api/dashboard/tag-distribution'),
      ]);

      setStats(statsResponse.data);
      setUpcomingTasks(tasksResponse.data);
      setPriorityData(priorityResponse.data);
      setTagData(tagResponse.data);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const priorityChartData = {
    labels: ['High', 'Medium', 'Low'],
    datasets: [
      {
        data: [priorityData.high || 0, priorityData.medium || 0, priorityData.low || 0],
        backgroundColor: ['#EF4444', '#F59E0B', '#10B981'],
        hoverBackgroundColor: ['#DC2626', '#D97706', '#059669'],
      },
    ],
  };

  const tagChartData = {
    labels: Object.keys(tagData),
    datasets: [
      {
        label: 'Tasks per Tag',
        data: Object.values(tagData),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const tagChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Tasks Distribution by Tag',
      },
    },
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#4F46E5" size={50} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-indigo-600">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard icon={<FaClipboardList />} title="Total Tasks" value={stats.totalTasks} />
          <StatCard icon={<FaCalendarAlt />} title="Completed Tasks" value={stats.completedTasks} />
          <StatCard icon={<FaCalendarAlt />} title="Upcoming Tasks" value={stats.upcomingTasks} />
          <StatCard icon={<FaUserFriends />} title="Total Assignees" value={stats.totalAssignees} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Priority Distribution</h2>
            <Doughnut data={priorityChartData} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Tag Distribution</h2>
            <Bar data={tagChartData} options={tagChartOptions} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Upcoming Tasks</h2>
            <ul className="space-y-2">
              {upcomingTasks.map((task) => (
                <li key={task.id} className="flex items-center justify-between bg-gray-50 p-3 rounded">
                  <span>{task.title}</span>
                  <span className="text-sm text-gray-500">{new Date(task.deadline).toLocaleDateString()}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Mini Calendar</h2>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              headerToolbar={{
                left: 'prev,next',
                center: 'title',
                right: 'today',
              }}
              height="auto"
              events={upcomingTasks.map((task) => ({
                title: task.title,
                date: task.deadline,
                url: `/task/${task.id}`,
              }))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, title, value }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
    <div className="text-3xl text-indigo-500 mr-4">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

export default Dashboard;