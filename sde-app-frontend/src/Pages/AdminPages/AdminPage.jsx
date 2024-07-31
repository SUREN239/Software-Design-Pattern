import React, { useState } from 'react';
import UserManagement from './UserManagement';
import ScheduleManagement from './ScheduleManagement';
import ReportingAnalytics from './ReportingAnalytics';
import NotificationsAlerts from './NotificationsAlerts';
import IntegrationCustomization from './IntegrationCustomization';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('users');
  const [showProfileTooltip, setShowProfileTooltip] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
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
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="bg-white shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">Staff Scheduling Admin</h1>
            </div>
            <div className="flex items-center">
              <div className="relative">
                <button
                  className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out flex items-center"
                  onMouseEnter={() => setShowProfileTooltip(true)}
                  onMouseLeave={() => setShowProfileTooltip(false)}
                >
                  <img
                    src="https://via.placeholder.com/40"
                    alt="Profile"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  Admin
                </button>
                {showProfileTooltip && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100">Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100">Settings</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100">Logout</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 bg-white shadow-md overflow-y-auto">
          <nav className="mt-5">
            {['Users', 'Schedules', 'Reports', 'Notifications', 'Integration'].map((item) => (
              <button
                key={item.toLowerCase()}
                className={`w-full text-left flex items-center px-6 py-3 text-sm font-medium ${
                  activeTab === item.toLowerCase()
                    ? 'bg-indigo-50 text-indigo-600 border-l-4 border-indigo-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab(item.toLowerCase())}
              >
                {item}
              </button>
            ))}
          </nav>
        </aside>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              {renderContent()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPage;