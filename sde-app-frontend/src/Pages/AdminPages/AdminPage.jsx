// // // import React, { useState } from 'react';
// // // import UserManagement from './UserManagement';
// // // import ScheduleManagement from './ScheduleManagement';
// // // import ReportingAnalytics from './ReportingAnalytics';
// // // import NotificationsAlerts from './NotificationsAlerts';
// // // import IntegrationCustomization from './IntegrationCustomization';

// // // const AdminPage = () => {
// // //   const [activeTab, setActiveTab] = useState('users');
// // //   const [showProfileTooltip, setShowProfileTooltip] = useState(false);

// // //   const renderContent = () => {
// // //     switch (activeTab) {
// // //       case 'users':
// // //         return <UserManagement />;
// // //       case 'schedules':
// // //         return <ScheduleManagement />;
// // //       case 'reports':
// // //         return <ReportingAnalytics />;
// // //       case 'notifications':
// // //         return <NotificationsAlerts />;
// // //       case 'integration':
// // //         return <IntegrationCustomization />;
// // //       default:
// // //         return null;
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 flex flex-col">
// // //       <nav className="bg-white shadow-md z-10">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="flex justify-between h-16">
// // //             <div className="flex items-center">
// // //               <h1 className="text-2xl font-bold text-indigo-600">Staff Scheduling Admin</h1>
// // //             </div>
// // //             <div className="flex items-center">
// // //               <div className="relative">
// // //                 <button
// // //                   className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out flex items-center"
// // //                   onMouseEnter={() => setShowProfileTooltip(true)}
// // //                   onMouseLeave={() => setShowProfileTooltip(false)}
// // //                 >
// // //                   <img
// // //                     src="https://via.placeholder.com/40"
// // //                     alt="Profile"
// // //                     className="w-8 h-8 rounded-full mr-2"
// // //                   />
// // //                   Admin
// // //                 </button>
// // //                 {showProfileTooltip && (
// // //                   <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
// // //                     <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100">Profile</a>
// // //                     <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100">Settings</a>
// // //                     <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100">Logout</a>
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </nav>

// // //       <div className="flex flex-1 overflow-hidden">
// // //         <aside className="w-64 bg-white shadow-md overflow-y-auto">
// // //           <nav className="mt-5">
// // //             {['Users', 'Schedules', 'Reports', 'Notifications', 'Integration'].map((item) => (
// // //               <button
// // //                 key={item.toLowerCase()}
// // //                 className={`w-full text-left flex items-center px-6 py-3 text-sm font-medium ${
// // //                   activeTab === item.toLowerCase()
// // //                     ? 'bg-indigo-50 text-indigo-600 border-l-4 border-indigo-600'
// // //                     : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
// // //                 }`}
// // //                 onClick={() => setActiveTab(item.toLowerCase())}
// // //               >
// // //                 {item}
// // //               </button>
// // //             ))}
// // //           </nav>
// // //         </aside>
// // //         <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
// // //           <div className="container mx-auto px-6 py-8">
// // //             <div className="bg-white shadow-md rounded-lg p-6">
// // //               {renderContent()}
// // //             </div>
// // //           </div>
// // //         </main>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AdminPage;

// // // import React, { useState, useEffect } from 'react';
// // // import { FaUsers, FaCalendarAlt, FaChartBar, FaBell, FaCogs, FaUserCircle, FaBars, FaSignOutAlt } from 'react-icons/fa';
// // // import UserManagement from './UserManagement';
// // // import ScheduleManagement from './ScheduleManagement';
// // // import ReportingAnalytics from './ReportingAnalytics';
// // // import NotificationsAlerts from './NotificationsAlerts';
// // // import IntegrationCustomization from './IntegrationCustomization';

// // // const AdminPage = ({ onLogout }) => {
// // //   const [activeTab, setActiveTab] = useState('users');
// // //   const [sidebarOpen, setSidebarOpen] = useState(true);

// // //   useEffect(() => {
// // //     const handleResize = () => {
// // //       if (window.innerWidth < 768) {
// // //         setSidebarOpen(false);
// // //       } else {
// // //         setSidebarOpen(true);
// // //       }
// // //     };

// // //     window.addEventListener('resize', handleResize);
// // //     handleResize(); // Call once to set initial state

// // //     return () => window.removeEventListener('resize', handleResize);
// // //   }, []);

// // //   const toggleSidebar = () => {
// // //     setSidebarOpen(!sidebarOpen);
// // //   };

// // //   const renderContent = () => {
// // //     switch (activeTab) {
// // //       case 'users':
// // //         return <UserManagement />;
// // //       case 'schedules':
// // //         return <ScheduleManagement />;
// // //       case 'reports':
// // //         return <ReportingAnalytics />;
// // //       case 'notifications':
// // //         return <NotificationsAlerts />;
// // //       case 'integration':
// // //         return <IntegrationCustomization />;
// // //       default:
// // //         return <UserManagement />;
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex h-screen bg-gray-100">
// // //       {/* Sidebar */}
// // //       <aside className={`bg-indigo-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out z-20`}>
// // //         {/* Logo */}
// // //         <div className="flex items-center justify-center mb-8">
// // //           <img src="https://mis.skct.edu.in/assets/images/skibudget/logo-removebg-preview.png" alt="Company Logo" className="h-10" />
// // //         </div>
// // //         <nav>
// // //           <SidebarLink icon={FaUsers} label="Users" tab="users" activeTab={activeTab} setActiveTab={setActiveTab} />
// // //           <SidebarLink icon={FaCalendarAlt} label="Schedules" tab="schedules" activeTab={activeTab} setActiveTab={setActiveTab} />
// // //           <SidebarLink icon={FaChartBar} label="Reports" tab="reports" activeTab={activeTab} setActiveTab={setActiveTab} />
// // //           <SidebarLink icon={FaBell} label="Notifications" tab="notifications" activeTab={activeTab} setActiveTab={setActiveTab} />
// // //           <SidebarLink icon={FaCogs} label="Integration" tab="integration" activeTab={activeTab} setActiveTab={setActiveTab} />
// // //         </nav>
// // //       </aside>

// // //       <div className="flex-1 flex flex-col overflow-hidden">
// // //         {/* Top Navbar */}
// // //         <header className="bg-white shadow-md">
// // //           <div className="flex items-center justify-between px-4 py-3">
// // //             <div className="flex items-center">
// // //               <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none focus:text-gray-700 md:hidden">
// // //                 <FaBars className="h-6 w-6" />
// // //               </button>
// // //               <h1 className="text-xl font-semibold text-gray-700 ml-2">Staff Scheduling Admin</h1>
// // //             </div>
// // //             <div className="flex items-center space-x-4">
// // //               <button className="text-gray-500 hover:text-gray-700">
// // //                 <FaBell className="h-6 w-6" />
// // //               </button>
// // //               <button className="flex items-center text-gray-700 hover:text-gray-900">
// // //                 <FaUserCircle className="h-8 w-8 mr-2" />
// // //                 <span>Admin</span>
// // //               </button>
// // //               <button onClick={onLogout} className="text-gray-500 hover:text-gray-700">
// // //                 <FaSignOutAlt className="h-6 w-6" />
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </header>

// // //         {/* Main Content */}
// // //         <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">
// // //           <div className="container mx-auto px-4 py-8">
// // //             {renderContent()}
// // //           </div>
// // //         </main>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const SidebarLink = ({ icon: Icon, label, tab, activeTab, setActiveTab }) => (
// // //   <a
// // //     href="#"
// // //     className={`flex items-center space-x-2 py-2.5 px-4 rounded transition duration-200 ${
// // //       activeTab === tab ? 'bg-indigo-700 text-white' : 'hover:bg-indigo-700 hover:text-white'
// // //     }`}
// // //     onClick={() => setActiveTab(tab)}
// // //   >
// // //     <Icon className="h-5 w-5" />
// // //     <span>{label}</span>
// // //   </a>
// // // );

// // // export default AdminPage;

// // import React, { useState, useEffect } from 'react';
// // import { FaUsers, FaCalendarAlt, FaChartBar, FaBell, FaCogs, FaUserCircle, FaBars, FaSignOutAlt, FaSearch } from 'react-icons/fa';
// // import UserManagement from './UserManagement';
// // import ScheduleManagement from './ScheduleManagement';
// // import ReportingAnalytics from './ReportingAnalytics';
// // import NotificationsAlerts from './NotificationsAlerts';
// // import IntegrationCustomization from './IntegrationCustomization';

// // const AdminPage = ({ onLogout }) => {
// //   const [activeTab, setActiveTab] = useState('users');
// //   const [sidebarOpen, setSidebarOpen] = useState(true);

// //   useEffect(() => {
// //     const handleResize = () => {
// //       if (window.innerWidth < 1024) {
// //         setSidebarOpen(false);
// //       } else {
// //         setSidebarOpen(true);
// //       }
// //     };

// //     window.addEventListener('resize', handleResize);
// //     handleResize();

// //     return () => window.removeEventListener('resize', handleResize);
// //   }, []);

// //   const toggleSidebar = () => {
// //     setSidebarOpen(!sidebarOpen);
// //   };

// //   const renderContent = () => {
// //     switch (activeTab) {
// //       case 'users':
// //         return <UserManagement />;
// //       case 'schedules':
// //         return <ScheduleManagement />;
// //       case 'reports':
// //         return <ReportingAnalytics />;
// //       case 'notifications':
// //         return <NotificationsAlerts />;
// //       case 'integration':
// //         return <IntegrationCustomization />;
// //       default:
// //         return <UserManagement />;
// //     }
// //   };

// //   return (
// //     <div className="flex h-screen bg-gray-100">
// //       {/* Sidebar */}
// //       <aside className={`bg-gradient-to-b from-purple-700 to-indigo-800 text-white w-72 space-y-6 py-7 px-4 absolute inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition duration-200 ease-in-out z-20`}>
// //         {/* Logo */}
// //         <div className="flex items-center justify-center mb-8">
// //           <img src="https://mis.skct.edu.in/assets/images/skibudget/logo-removebg-preview.png" alt="Company Logo" className="h-24 w-auto" />
// //         </div>
// //         <nav className="space-y-1">
// //           <SidebarLink icon={FaUsers} label="Users" tab="users" activeTab={activeTab} setActiveTab={setActiveTab} />
// //           <SidebarLink icon={FaCalendarAlt} label="Schedules" tab="schedules" activeTab={activeTab} setActiveTab={setActiveTab} />
// //           <SidebarLink icon={FaChartBar} label="Reports" tab="reports" activeTab={activeTab} setActiveTab={setActiveTab} />
// //           <SidebarLink icon={FaBell} label="Notifications" tab="notifications" activeTab={activeTab} setActiveTab={setActiveTab} />
// //           <SidebarLink icon={FaCogs} label="Integration" tab="integration" activeTab={activeTab} setActiveTab={setActiveTab} />
// //         </nav>
// //       </aside>

// //       <div className="flex-1 flex flex-col overflow-hidden">
// //         {/* Top Navbar */}
// //         <header className="bg-white shadow-sm">
// //           <div className="flex items-center justify-between px-6 py-4">
// //             <div className="flex items-center">
// //               <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none focus:text-gray-700 lg:hidden">
// //                 <FaBars className="h-6 w-6" />
// //               </button>
// //               <h1 className="text-2xl font-bold text-gray-800 ml-4">Staff Scheduling Admin</h1>
// //             </div>
// //             <div className="flex items-center space-x-4">
// //               <div className="relative">
// //                 <input
// //                   type="text"
// //                   placeholder="Search..."
// //                   className="bg-gray-100 text-gray-800 placeholder-gray-500 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
// //                 />
// //                 <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
// //               </div>
// //               <button className="text-gray-500 hover:text-purple-600 transition duration-150">
// //                 <FaBell className="h-6 w-6" />
// //               </button>
// //               <button className="flex items-center text-gray-700 hover:text-purple-600 transition duration-150">
// //                 <FaUserCircle className="h-8 w-8 mr-2" />
// //                 <span className="font-medium">Admin</span>
// //               </button>
// //               <button onClick={onLogout} className="text-gray-500 hover:text-purple-600 transition duration-150">
// //                 <FaSignOutAlt className="h-6 w-6" />
// //               </button>
// //             </div>
// //           </div>
// //         </header>

// //         {/* Main Content */}
// //         <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
// //           <div className="max-w-7xl mx-auto">
// //             <div className="bg-white rounded-lg shadow-md p-6">
// //               {renderContent()}
// //             </div>
// //           </div>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };

// // const SidebarLink = ({ icon: Icon, label, tab, activeTab, setActiveTab }) => (
// //   <a
// //     href="#"
// //     className={`flex items-center space-x-3 py-3 px-4 rounded-lg transition duration-200 ${
// //       activeTab === tab
// //         ? 'bg-white bg-opacity-10 text-white'
// //         : 'text-gray-300 hover:bg-white hover:bg-opacity-5 hover:text-white'
// //     }`}
// //     onClick={() => setActiveTab(tab)}
// //   >
// //     <Icon className="h-5 w-5" />
// //     <span className="font-medium">{label}</span>
// //   </a>
// // );

// // export default AdminPage;

// import React, { useState, useEffect } from 'react';
// import { FaUsers, FaCalendarAlt, FaChartBar, FaBell, FaCogs, FaUserCircle, FaBars, FaSignOutAlt, FaSearch, FaTachometerAlt } from 'react-icons/fa';
// import UserManagement from './UserManagement';
// import ScheduleManagement from './ScheduleManagement';
// import ReportingAnalytics from './ReportingAnalytics';
// import NotificationsAlerts from './NotificationsAlerts';
// import IntegrationCustomization from './IntegrationCustomization';
// import Dashboard from './Dashboard';

// const AdminPage = ({ onLogout }) => {
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [sidebarOpen, setSidebarOpen] = useState(true);

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

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'dashboard':
//         return <Dashboard />;
//       case 'users':
//         return <UserManagement />;
//       case 'schedules':
//         return <ScheduleManagement />;
//       case 'reports':
//         return <ReportingAnalytics />;
//       case 'notifications':
//         return <NotificationsAlerts />;
//       case 'integration':
//         return <IntegrationCustomization />;
//       default:
//         return <Dashboard />;
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className={`bg-gradient-to-b from-purple-700 to-indigo-800 text-white w-72 space-y-6 py-7 px-4 absolute inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition duration-200 ease-in-out z-20`}>
//         {/* Logo */}
//         <div className="flex items-center justify-center mb-8">
//           <img src="https://mis.skct.edu.in/assets/images/skibudget/logo-removebg-preview.png" alt="Company Logo" className="h-24 w-auto" />
//         </div>
//         <nav className="space-y-1">
//           <SidebarLink icon={FaTachometerAlt} label="Dashboard" tab="dashboard" activeTab={activeTab} setActiveTab={setActiveTab} />
//           <SidebarLink icon={FaUsers} label="Users" tab="users" activeTab={activeTab} setActiveTab={setActiveTab} />
//           <SidebarLink icon={FaCalendarAlt} label="Schedules" tab="schedules" activeTab={activeTab} setActiveTab={setActiveTab} />
//           <SidebarLink icon={FaChartBar} label="Reports" tab="reports" activeTab={activeTab} setActiveTab={setActiveTab} />
//           <SidebarLink icon={FaBell} label="Notifications" tab="notifications" activeTab={activeTab} setActiveTab={setActiveTab} />
//           <SidebarLink icon={FaCogs} label="Integration" tab="integration" activeTab={activeTab} setActiveTab={setActiveTab} />
//         </nav>
//       </aside>

//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Top Navbar */}
//         <header className="bg-white shadow-sm">
//           <div className="flex items-center justify-between px-6 py-4">
//             <div className="flex items-center">
//               <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none focus:text-gray-700 lg:hidden">
//                 <FaBars className="h-6 w-6" />
//               </button>
//               <h1 className="text-2xl font-bold text-gray-800 ml-4">Staff Scheduling Admin</h1>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="bg-gray-100 text-gray-800 placeholder-gray-500 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 />
//                 <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//               </div>
//               <button className="text-gray-500 hover:text-purple-600 transition duration-150">
//                 <FaBell className="h-6 w-6" />
//               </button>
//               <button className="flex items-center text-gray-700 hover:text-purple-600 transition duration-150">
//                 <FaUserCircle className="h-8 w-8 mr-2" />
//                 <span className="font-medium">Admin</span>
//               </button>
//               <button onClick={onLogout} className="text-gray-500 hover:text-purple-600 transition duration-150">
//                 <FaSignOutAlt className="h-6 w-6" />
//               </button>
//             </div>
//           </div>
//         </header>

//         {/* Main Content */}
//         <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
//           <div className="max-w-7xl mx-auto">
//             <div className="bg-white rounded-lg shadow-md p-6">
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

// export default AdminPage;


// import React, { useState, useEffect } from 'react';
// import { FaUsers, FaCalendarAlt, FaChartBar, FaBell, FaCogs, FaUserCircle, FaBars, FaSignOutAlt, FaSearch, FaTachometerAlt, FaSun, FaMoon } from 'react-icons/fa';
// import UserManagement from './UserManagement';
// import ScheduleManagement from './ScheduleManagement';
// import ReportingAnalytics from './ReportingAnalytics';
// import NotificationsAlerts from './NotificationsAlerts';
// import IntegrationCustomization from './IntegrationCustomization';
// import Dashboard from './Dashboard';

// const AdminPage = ({ onLogout }) => {
//   const [activeTab, setActiveTab] = useState('dashboard');
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
//       case 'dashboard':
//         return <Dashboard />;
//       case 'users':
//         return <UserManagement />;
//       case 'schedules':
//         return <ScheduleManagement />;
//       case 'reports':
//         return <ReportingAnalytics />;
//       case 'notifications':
//         return <NotificationsAlerts />;
//       case 'integration':
//         return <IntegrationCustomization />;
//       default:
//         return <Dashboard />;
//     }
//   };

//   return (
//     <div className={`flex h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
//       {/* Sidebar */}
//       <aside className={`${darkMode ? 'bg-gray-800' : 'bg-gradient-to-b from-blue-600 to-indigo-800'} text-white w-72 space-y-6 py-7 px-4 absolute inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition duration-200 ease-in-out z-20`}>
//         {/* Logo */}
//         <div className="flex items-center justify-center mb-8">
//           <img src="https://mis.skct.edu.in/assets/images/skibudget/logo-removebg-preview.png" alt="Company Logo" className="h-24 w-auto" />
//         </div>
//         <nav className="space-y-1">
//           <SidebarLink icon={FaTachometerAlt} label="Dashboard" tab="dashboard" activeTab={activeTab} setActiveTab={setActiveTab} />
//           <SidebarLink icon={FaUsers} label="Users" tab="users" activeTab={activeTab} setActiveTab={setActiveTab} />
//           <SidebarLink icon={FaCalendarAlt} label="Schedules" tab="schedules" activeTab={activeTab} setActiveTab={setActiveTab} />
//           <SidebarLink icon={FaChartBar} label="Reports" tab="reports" activeTab={activeTab} setActiveTab={setActiveTab} />
//           <SidebarLink icon={FaBell} label="Notifications" tab="notifications" activeTab={activeTab} setActiveTab={setActiveTab} />
//           <SidebarLink icon={FaCogs} label="Integration" tab="integration" activeTab={activeTab} setActiveTab={setActiveTab} />
//         </nav>
//       </aside>

//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Top Navbar */}
//         <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
//           <div className="flex items-center justify-between px-6 py-4">
//             <div className="flex items-center">
//               <button onClick={toggleSidebar} className={`${darkMode ? 'text-gray-300' : 'text-gray-500'} focus:outline-none focus:text-blue-500 lg:hidden`}>
//                 <FaBars className="h-6 w-6" />
//               </button>
//               <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} ml-4`}>Staff Scheduling Admin</h1>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'} placeholder-gray-500 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                 />
//                 <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//               </div>
//               <button className={`${darkMode ? 'text-gray-300' : 'text-gray-500'} hover:text-blue-500 transition duration-150`}>
//                 <FaBell className="h-6 w-6" />
//               </button>
//               <button className={`flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-700'} hover:text-blue-500 transition duration-150`}>
//                 <FaUserCircle className="h-8 w-8 mr-2" />
//                 <span className="font-medium">Admin</span>
//               </button>
//               <button onClick={onLogout} className={`${darkMode ? 'text-gray-300' : 'text-gray-500'} hover:text-blue-500 transition duration-150`}>
//                 <FaSignOutAlt className="h-6 w-6" />
//               </button>
//               <button onClick={toggleDarkMode} className={`${darkMode ? 'text-gray-300' : 'text-gray-500'} hover:text-blue-500 transition duration-150`}>
//                 {darkMode ? <FaSun className="h-6 w-6" /> : <FaMoon className="h-6 w-6" />}
//               </button>
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

// export default AdminPage;


import React, { useState, useEffect } from 'react';
import { FaUsers, FaCalendarAlt, FaChartBar, FaBell, FaCogs, FaUserCircle, FaBars, FaSignOutAlt, FaSearch, FaTachometerAlt, FaSun, FaMoon } from 'react-icons/fa';
import UserManagement from './UserManagement';
import ScheduleManagement from './ScheduleManagement';
import ReportingAnalytics from './ReportingAnalytics';
import NotificationsAlerts from './NotificationsAlerts';
import IntegrationCustomization from './IntegrationCustomization';
import Dashboard from './Dashboard';

const AdminPage = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
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
      case 'dashboard':
        return <Dashboard />;
      case 'users':
        return <UserManagement />;
      case 'schedules':
        return <ScheduleManagement />;
      case 'reports':
        return <ReportingAnalytics />;
      case 'notifications':
        return <NotificationsAlerts />;
      case 'integration':
        return <IntegrationCustomization />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
      {/* Sidebar */}
      <aside className={`${darkMode ? 'bg-gray-800' : 'bg-gradient-to-b from-blue-600 to-indigo-800'} text-white w-72 space-y-6 py-7 px-4 absolute inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition duration-200 ease-in-out z-20`}>
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <img src="https://mis.skct.edu.in/assets/images/skibudget/logo-removebg-preview.png" alt="Company Logo" className="h-24 w-auto" />
        </div>
        <nav className="space-y-1">
          <SidebarLink icon={FaTachometerAlt} label="Dashboard" tab="dashboard" activeTab={activeTab} setActiveTab={setActiveTab} />
          <SidebarLink icon={FaUsers} label="Users" tab="users" activeTab={activeTab} setActiveTab={setActiveTab} />
          <SidebarLink icon={FaCalendarAlt} label="Schedules" tab="schedules" activeTab={activeTab} setActiveTab={setActiveTab} />
          <SidebarLink icon={FaChartBar} label="Reports" tab="reports" activeTab={activeTab} setActiveTab={setActiveTab} />
          <SidebarLink icon={FaBell} label="Notifications" tab="notifications" activeTab={activeTab} setActiveTab={setActiveTab} />
          <SidebarLink icon={FaCogs} label="Integration" tab="integration" activeTab={activeTab} setActiveTab={setActiveTab} />
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
              <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} ml-4`}>Staff Scheduling Admin</h1>
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
                    <span className="font-medium">Admin</span>
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
    className={`flex items-center space-x-3 py-3 px-4 rounded-lg transition duration-200 ${
      activeTab === tab
        ? 'bg-white bg-opacity-10 text-white'
        : 'text-gray-300 hover:bg-white hover:bg-opacity-5 hover:text-white'
    }`}
    onClick={() => setActiveTab(tab)}
  >
    <Icon className="h-5 w-5" />
    <span className="font-medium">{label}</span>
  </a>
);

export default AdminPage;