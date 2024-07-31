// import React, { useState } from 'react';
// import { FaUsers, FaCalendarAlt, FaChartBar, FaBell, FaCogs, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
// import UserManagement from './UserManagement';
// import ScheduleManagement from './ScheduleManagement';
// import ReportingAnalytics from './ReportingAnalytics';
// import NotificationsAlerts from './NotificationsAlerts';
// import IntegrationCustomization from './IntegrationCustomization';

// // Simulated user context
// const useUser = () => ({
//   username: 'John Doe',
//   email: 'john.doe@example.com',
//   avatar: 'https://i.pravatar.cc/150?img=3',
//   logout: () => console.log('Logout clicked'),
// });

// // Tooltip component
// const Tooltip = ({ content, children }) => {
//   return (
//     <div className="group relative inline-block">
//       {children}
//       <div className="absolute z-10 w-auto p-2 min-w-max bottom-full left-1/2 -translate-x-1/2 translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-sm rounded-md shadow-lg">
//         {content}
//         <svg className="absolute text-gray-800 h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
//       </div>
//     </div>
//   );
// };

// // Avatar component
// const Avatar = ({ src, alt, children }) => {
//   return (
//     <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300">
//       {src ? (
//         <img src={src} alt={alt} className="w-full h-full object-cover" />
//       ) : (
//         children
//       )}
//     </div>
//   );
// };

// // Card component
// const Card = ({ children, className = '' }) => {
//   return (
//     <div className={`bg-white rounded-xl shadow-md ${className}`}>
//       {children}
//     </div>
//   );
// };

// // NavItem component
// const NavItem = ({ icon: Icon, title, onClick, active }) => {
//   return (
//     <Tooltip content={title}>
//       <button
//         onClick={onClick}
//         className={`p-3 rounded-xl transition-all duration-200 ${
//           active
//             ? 'bg-indigo-700 text-white shadow-lg'
//             : 'text-indigo-300 hover:bg-indigo-800'
//         }`}
//       >
//         <Icon className="w-6 h-6" />
//       </button>
//     </Tooltip>
//   );
// };


// const AdminPage = () => {
//   const { username, email, avatar, logout } = useUser();
//   const [activeTab, setActiveTab] = useState('userManagement');

//   const navItems = [
//     { icon: FaUsers, title: 'User Management', id: 'userManagement' },
//     { icon: FaCalendarAlt, title: 'Schedule', id: 'scheduleManagement' },
//     { icon: FaChartBar, title: 'Analytics', id: 'reportingAnalytics' },
//     { icon: FaBell, title: 'Notifications', id: 'notificationsAlerts' },
//     { icon: FaCogs, title: 'Settings', id: 'integrationCustomization' },
//   ];

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'userManagement':
//         return <UserManagement />;
//       case 'scheduleManagement':
//         return <ScheduleManagement />;
//       case 'reportingAnalytics':
//         return <ReportingAnalytics />;
//       case 'notificationsAlerts':
//         return <NotificationsAlerts />;
//       case 'integrationCustomization':
//         return <IntegrationCustomization />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-20 bg-indigo-900 text-white flex flex-col items-center py-8">
//         <div className="mb-8">
//           <Tooltip content={
//             <div className="p-2">
//               <p className="font-semibold">{username}</p>
//               <p className="text-sm text-gray-300">{email}</p>
//             </div>
//           }>
//             <Avatar src={avatar} alt={username}>
//               <FaUserCircle className="w-12 h-12" />
//             </Avatar>
//           </Tooltip>
//         </div>
//         <nav className="flex-1 flex flex-col items-center space-y-8">
//           {navItems.map((item) => (
//             <NavItem
//               key={item.id}
//               icon={item.icon}
//               title={item.title}
//               onClick={() => setActiveTab(item.id)}
//               active={activeTab === item.id}
//             />
//           ))}
//         </nav>
//         <Tooltip content="Logout">
//           <button
//             onClick={logout}
//             className="p-3 text-red-400 hover:text-red-300 transition-colors duration-200"
//           >
//             <FaSignOutAlt className="w-6 h-6" />
//           </button>
//         </Tooltip>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 overflow-hidden flex flex-col">
//         <header className="bg-white shadow-sm z-10 px-8 py-6">
//           <h1 className="text-3xl font-bold text-gray-800">
//             {navItems.find(item => item.id === activeTab)?.title}
//           </h1>
//         </header>
//         <main className="flex-1 overflow-y-auto bg-gray-100 p-8">
//           <Card className="w-full h-full p-6">
//             {renderContent()}
//           </Card>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminPage;

import React, { useState, useEffect } from 'react';
import { FaUsers, FaCalendarAlt, FaChartBar, FaBell, FaCogs, FaSignOutAlt, FaUserCircle, FaMoon, FaSun, FaSearch, FaBars, FaEnvelope, FaQuestionCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../Web/UserContext';
import UserManagement from './UserManagement';
import ScheduleManagement from './ScheduleManagement';
import ReportingAnalytics from './ReportingAnalytics';
import NotificationsAlerts from './NotificationsAlerts';
import IntegrationCustomization from './IntegrationCustomization';

// Tooltip component
const Tooltip = ({ content, children }) => {
  return (
    <div className="group relative inline-block">
      {children}
      <div className="absolute z-10 w-auto p-2 min-w-max bottom-full left-1/2 -translate-x-1/2 translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-sm rounded-md shadow-lg">
        {content}
        <svg className="absolute text-gray-800 h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
      </div>
    </div>
  );
};

// Avatar component
const Avatar = ({ src, alt, children }) => {
  return (
    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300 hover:ring-2 hover:ring-indigo-500 transition-all duration-300">
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        children
      )}
    </div>
  );
};

// Card component
const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-md transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
};

// NavItem component
const NavItem = ({ icon: Icon, title, onClick, active }) => {
  return (
    <Tooltip content={title}>
      <button
        onClick={onClick}
        className={`p-3 rounded-xl transition-all duration-300 ${
          active
            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-110'
            : 'text-indigo-300 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white hover:scale-105'
        }`}
      >
        <Icon className="w-6 h-6" />
      </button>
    </Tooltip>
  );
};

const AdminPage = () => {
  const { username, setUsername } = useUser();
  const [activeTab, setActiveTab] = useState('userManagement');
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const navItems = [
    { icon: FaUsers, title: 'User Management', id: 'userManagement' },
    { icon: FaCalendarAlt, title: 'Schedule', id: 'scheduleManagement' },
    { icon: FaChartBar, title: 'Analytics', id: 'reportingAnalytics' },
    { icon: FaBell, title: 'Notifications', id: 'notificationsAlerts' },
    { icon: FaCogs, title: 'Settings', id: 'integrationCustomization' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'userManagement':
        return <UserManagement/>;
      case 'scheduleManagement':
        return <ScheduleManagement/>;
      case 'reportingAnalytics':
        return <ReportingAnalytics/>;
      case 'notificationsAlerts':
        return <NotificationsAlerts/>;
      case 'integrationCustomization':
        return <IntegrationCustomization/>;
      default:
        return null;
    }
  };

  const handleLogout = () => {
    setUsername('');
    navigate('/');
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'dark' : ''}`}>
      {/* Sidebar */}
      <div className="w-16 md:w-20 bg-gradient-to-b from-indigo-800 via-purple-800 to-indigo-800 text-white flex flex-col items-center py-8 transition-all duration-300">
        <div className="mb-8">
          <img src="https://mis.skct.edu.in/assets/images/skibudget/logo.png" alt="Staff Scheduler Logo" className="w-12 h-12" />
        </div>
        <nav className="flex-1 flex flex-col items-center space-y-6 md:space-y-8">
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              icon={item.icon}
              title={item.title}
              onClick={() => setActiveTab(item.id)}
              active={activeTab === item.id}
            />
          ))}
        </nav>
        
        <Tooltip content="Logout">
          <button
            onClick={handleLogout}
            className="p-3 text-red-400 hover:text-red-300 transition-colors duration-200"
          >
            <FaSignOutAlt className="w-6 h-6" />
          </button>
        </Tooltip>
      </div>

      <div className="flex-1 flex flex-col bg-gray-100 dark:bg-gray-800 transition-all duration-300 overflow-hidden">
        <header className="bg-white dark:bg-gray-900 shadow-md z-20 transition-all duration-300">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-2 md:mb-0">
                <h1 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  {navItems.find(item => item.id === activeTab)?.title}
                </h1>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 w-full md:w-auto"
                  />
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                </div>
                <Tooltip content="Messages">
                  <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                    <FaEnvelope className="w-6 h-6" />
                  </button>
                </Tooltip>
                <Tooltip content="Help">
                  <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                    <FaQuestionCircle className="w-6 h-6" />
                  </button>
                </Tooltip>
                <Tooltip content={username}>
                  <Avatar src={`https://ui-avatars.com/api/?name=${username}&background=random`} alt={username} />
                </Tooltip>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <Card className="w-full h-full p-4 md:p-6 overflow-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            {renderContent()}
          </Card>
        </main>
      </div>
    </div>
  );
};

export default AdminPage;