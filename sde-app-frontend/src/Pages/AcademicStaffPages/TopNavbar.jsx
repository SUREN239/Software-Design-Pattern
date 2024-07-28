import React from 'react';
import { FaBell, FaEnvelope, FaUserCircle, FaBars } from 'react-icons/fa';

const TopNavbar = ({ setSidebarOpen }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <button onClick={() => setSidebarOpen(prev => !prev)} className="text-gray-500 focus:outline-none focus:text-gray-700 md:hidden">
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
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;