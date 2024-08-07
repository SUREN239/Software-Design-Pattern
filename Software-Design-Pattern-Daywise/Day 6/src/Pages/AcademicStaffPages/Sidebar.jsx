import React from 'react';
import { FaCalendar, FaUserClock, FaClipboardList, FaBookOpen, FaEnvelope } from 'react-icons/fa';

const Sidebar = ({ activeTab, setActiveTab, sidebarOpen }) => {
  return (
    <aside className={`bg-indigo-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out`}>
      <nav>
        <SidebarLink icon={FaCalendar} label="Schedule" tab="schedule" activeTab={activeTab} setActiveTab={setActiveTab} />
        <SidebarLink icon={FaUserClock} label="Availability" tab="availability" activeTab={activeTab} setActiveTab={setActiveTab} />
        <SidebarLink icon={FaClipboardList} label="Attendance & Grading" tab="attendance" activeTab={activeTab} setActiveTab={setActiveTab} />
        <SidebarLink icon={FaBookOpen} label="Resource Booking" tab="resources" activeTab={activeTab} setActiveTab={setActiveTab} />
        <SidebarLink icon={FaEnvelope} label="Communication" tab="communication" activeTab={activeTab} setActiveTab={setActiveTab} />
      </nav>
    </aside>
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

export default Sidebar;