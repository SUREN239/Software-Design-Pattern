import React, { useState } from 'react';
import { FaCalendar, FaUserClock, FaClipboardList, FaBookOpen, FaEnvelope, FaBell, FaUserCircle, FaBars, FaSignOutAlt } from 'react-icons/fa';
import ScheduleView from './ScheduleView';
import AvailabilityManagement from './AvailabilityManagement';
import AttendanceGrading from './AttendanceGrading';
import ResourceBooking from './ResourceBooking';
import Communication from './Communication';

const AcademicStaffPage = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('schedule');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'schedule':
        return <ScheduleView />;
      case 'availability':
        return <AvailabilityManagement />;
      case 'attendance':
        return <AttendanceGrading />;
      case 'resources':
        return <ResourceBooking />;
      case 'communication':
        return <Communication />;
      default:
        return <ScheduleView />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-indigo-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out z-20`}>
        <nav>
          <SidebarLink icon={FaCalendar} label="Schedule" tab="schedule" activeTab={activeTab} setActiveTab={setActiveTab} />
          <SidebarLink icon={FaUserClock} label="Availability" tab="availability" activeTab={activeTab} setActiveTab={setActiveTab} />
          <SidebarLink icon={FaClipboardList} label="Attendance & Grading" tab="attendance" activeTab={activeTab} setActiveTab={setActiveTab} />
          <SidebarLink icon={FaBookOpen} label="Resource Booking" tab="resources" activeTab={activeTab} setActiveTab={setActiveTab} />
          <SidebarLink icon={FaEnvelope} label="Communication" tab="communication" activeTab={activeTab} setActiveTab={setActiveTab} />
        </nav>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="bg-white shadow-md">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-500 focus:outline-none focus:text-gray-700 md:hidden">
                <FaBars className="h-6 w-6" />
              </button>
              <h1 className="text-xl font-semibold text-gray-700 ml-2">Academic Staff Portal</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700">
                <FaBell className="h-6 w-6" />
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <FaEnvelope className="h-6 w-6" />
              </button>
              <button className="flex items-center text-gray-700 hover:text-gray-900">
                <FaUserCircle className="h-8 w-8 mr-2" />
                <span>Prof. Smith</span>
              </button>
              <button onClick={onLogout} className="text-gray-500 hover:text-gray-700">
                <FaSignOutAlt className="h-6 w-6" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">
          <div className="container mx-auto px-4 py-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

const SidebarLink = ({ icon: Icon, label, tab, activeTab, setActiveTab }) => (
    <a
  
    href="#"
    className={`flex items-center space-x-2 py-2.5 px-4 rounded transition duration-200 ${
      activeTab === tab ? 'bg-indigo-700 text-white' : 'hover:bg-indigo-700 hover:text-white'
    }`}
    onClick={() => setActiveTab(tab)}
  >
    <Icon className="h-5 w-5" />
    <span>{label}</span>
  </a>
);

export default AcademicStaffPage;