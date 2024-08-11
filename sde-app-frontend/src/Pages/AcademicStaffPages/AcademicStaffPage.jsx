// import React, { useState, useEffect } from 'react';
// import { FaCalendar, FaUserClock, FaClipboardList, FaBookOpen, FaEnvelope, FaBell, FaUserCircle, FaBars, FaSignOutAlt, FaSearch, FaSun, FaMoon } from 'react-icons/fa';
// import ScheduleView from './ScheduleView';
// import AvailabilityManagement from './AvailabilityManagement';
// import AttendanceGrading from './AttendanceGrading';
// import ResourceBooking from './ResourceBooking';
// import Communication from './Communication';

// const AcademicStaffPage = ({ onLogout }) => {
//   const [activeTab, setActiveTab] = useState('schedule');
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 1024) {
//         setSidebarOpen(false);
//       } else {
//         setSidebarOpen(true);
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     handleResize();

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'schedule':
//         return <ScheduleView />;
//       case 'availability':
//         return <AvailabilityManagement />;
//       case 'attendance':
//         return <AttendanceGrading />;
//       case 'resources':
//         return <ResourceBooking />;
//       case 'communication':
//         return <Communication />;
//       default:
//         return <ScheduleView />;
//     }
//   };

//   return (
//     <div className={`flex h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
//       {/* Sidebar */}
//       <aside className={`${darkMode ? 'bg-gray-800' : 'bg-gradient-to-b from-blue-600 to-indigo-800'} text-white w-72 space-y-6 py-7 px-4 absolute inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition duration-200 ease-in-out z-20`}>
//         {/* Logo */}
//         <div className="flex items-center justify-center mb-8">
//           <img src="https://mis.skct.edu.in/assets/images/skibudget/logo-removebg-preview.png" alt="University Logo" className="h-24 w-auto" />
//         </div>
//         <nav className="space-y-1">
//           <SidebarLink icon={FaCalendar} label="Schedule" tab="schedule" activeTab={activeTab} setActiveTab={setActiveTab} />
//           <SidebarLink icon={FaUserClock} label="Availability" tab="availability" activeTab={activeTab} setActiveTab={setActiveTab} />
//           <SidebarLink icon={FaClipboardList} label="Attendance & Grading" tab="attendance" activeTab={activeTab} setActiveTab={setActiveTab} />
//           <SidebarLink icon={FaBookOpen} label="Resource Booking" tab="resources" activeTab={activeTab} setActiveTab={setActiveTab} />
//           <SidebarLink icon={FaEnvelope} label="Communication" tab="communication" activeTab={activeTab} setActiveTab={setActiveTab} />
//         </nav>
//       </aside>

//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Top Navbar */}
//         <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
//           <div className="flex items-center justify-between px-6 py-3">
//             <div className="flex items-center">
//               <button onClick={toggleSidebar} className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} focus:outline-none focus:text-gray-900 lg:hidden`}>
//                 <FaBars className="h-6 w-6" />
//               </button>
//               <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} ml-4`}>Academic Staff Portal</h1>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'} placeholder-gray-500 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 transition-all duration-300 ease-in-out`}
//                 />
//                 <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//               </div>
//               <div className="flex items-center space-x-3">
//                 <button className={`${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} p-2 rounded-full transition duration-150 ease-in-out`}>
//                   <FaBell className="h-5 w-5" />
//                 </button>
//                 <button onClick={toggleDarkMode} className={`${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} p-2 rounded-full transition duration-150 ease-in-out`}>
//                   {darkMode ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
//                 </button>
//                 <div className="relative group">
//                   <button className={`flex items-center ${darkMode ? 'text-white' : 'text-gray-700'} focus:outline-none`}>
//                     <FaUserCircle className="h-8 w-8 mr-2" />
//                     <span className="font-medium">Prof. Smith</span>
//                     <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                       <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                     </svg>
//                   </button>
//                   <div className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 ${darkMode ? 'bg-gray-700' : 'bg-white'} ring-1 ring-black ring-opacity-5 hidden group-hover:block`}>
//                     <a href="#" className={`block px-4 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-100'}`}>Your Profile</a>
//                     <a href="#" className={`block px-4 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-100'}`}>Settings</a>
//                     <a href="#" onClick={onLogout} className={`block px-4 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-100'}`}>Sign out</a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Main Content */}
//         <main className={`flex-1 overflow-x-hidden overflow-y-auto ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} p-6`}>
//           <div className="max-w-7xl mx-auto">
//             <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg shadow-lg p-6`}>
//               {renderContent()}
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// const SidebarLink = ({ icon: Icon, label, tab, activeTab, setActiveTab }) => (
//   <a
//     href="#"
//     className={`flex items-center space-x-3 py-3 px-4 rounded-lg transition duration-200 ${
//       activeTab === tab
//         ? 'bg-white bg-opacity-10 text-white'
//         : 'text-gray-300 hover:bg-white hover:bg-opacity-5 hover:text-white'
//     }`}
//     onClick={() => setActiveTab(tab)}
//   >
//     <Icon className="h-5 w-5" />
//     <span className="font-medium">{label}</span>
//   </a>
// );

// export default AcademicStaffPage;

import React, { useState, useEffect } from 'react';
import { FaCalendar, FaUserClock, FaClipboardList, FaBookOpen, FaEnvelope, FaBell, FaUserCircle, FaBars, FaSignOutAlt, FaSearch, FaSun, FaMoon, FaPlane } from 'react-icons/fa';
import ScheduleView from './ScheduleView';
import AvailabilityManagement from './AvailabilityManagement';
import AttendanceGrading from './AttendanceGrading';
import ResourceBooking from './ResourceBooking';
import Communication from './Communication';
import TimeOffRequest from './TimeOffRequest';

const AcademicStaffPage = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('schedule');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

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
      case 'timeoff':
        return <TimeOffRequest onRequestSubmitted={() => setActiveTab('schedule')} />;
      default:
        return <ScheduleView />;
    }
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
      {/* Sidebar */}
      <aside className={`${darkMode ? 'bg-gray-800' : 'bg-gradient-to-b from-blue-600 to-indigo-800'} text-white w-72 space-y-6 py-7 px-4 absolute inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition duration-200 ease-in-out z-20`}>
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <img src="https://mis.skct.edu.in/assets/images/skibudget/logo-removebg-preview.png" alt="University Logo" className="h-24 w-auto" />
        </div>
        <nav className="space-y-1">
          <SidebarLink icon={FaCalendar} label="Schedule" tab="schedule" activeTab={activeTab} setActiveTab={setActiveTab} />
          <SidebarLink icon={FaUserClock} label="Availability" tab="availability" activeTab={activeTab} setActiveTab={setActiveTab} />
          <SidebarLink icon={FaClipboardList} label="Attendance & Grading" tab="attendance" activeTab={activeTab} setActiveTab={setActiveTab} />
          <SidebarLink icon={FaBookOpen} label="Resource Booking" tab="resources" activeTab={activeTab} setActiveTab={setActiveTab} />
          <SidebarLink icon={FaEnvelope} label="Communication" tab="communication" activeTab={activeTab} setActiveTab={setActiveTab} />
          <SidebarLink icon={FaPlane} label="Time Off Request" tab="timeoff" activeTab={activeTab} setActiveTab={setActiveTab} />
        </nav>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
          <div className="flex items-center justify-between px-6 py-3">
            <div className="flex items-center">
              <button onClick={toggleSidebar} className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} focus:outline-none focus:text-gray-900 lg:hidden`}>
                <FaBars className="h-6 w-6" />
              </button>
              <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} ml-4`}>Academic Staff Portal</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'} placeholder-gray-500 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 transition-all duration-300 ease-in-out`}
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
              <div className="flex items-center space-x-3">
                <button className={`${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} p-2 rounded-full transition duration-150 ease-in-out`}>
                  <FaBell className="h-5 w-5" />
                </button>
                <button onClick={toggleDarkMode} className={`${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} p-2 rounded-full transition duration-150 ease-in-out`}>
                  {darkMode ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
                </button>
                <div className="relative group">
                  <button className={`flex items-center ${darkMode ? 'text-white' : 'text-gray-700'} focus:outline-none`}>
                    <FaUserCircle className="h-8 w-8 mr-2" />
                    <span className="font-medium">Prof. Smith</span>
                    <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 ${darkMode ? 'bg-gray-700' : 'bg-white'} ring-1 ring-black ring-opacity-5 hidden group-hover:block`}>
                    <a href="#" className={`block px-4 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-100'}`}>Your Profile</a>
                    <a href="#" className={`block px-4 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-100'}`}>Settings</a>
                    <a href="#" onClick={onLogout} className={`block px-4 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-100'}`}>Sign out</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className={`flex-1 overflow-x-hidden overflow-y-auto ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} p-6`}>
          <div className="max-w-7xl mx-auto">
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg shadow-lg p-6`}>
              {renderContent()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const SidebarLink = ({ icon: Icon, label, tab, activeTab, setActiveTab }) => (
  <a
    href="#"
    className={`flex items-center space-x-3 py-3 px-4 rounded-lg transition duration-200 ${activeTab === tab
        ? 'bg-white bg-opacity-10 text-white'
        : 'text-gray-300 hover:bg-white hover:bg-opacity-5 hover:text-white'
      }`}
    onClick={() => setActiveTab(tab)}
  >
    <Icon className="h-5 w-5" />
    <span className="font-medium">{label}</span>
  </a>
);

export default AcademicStaffPage;