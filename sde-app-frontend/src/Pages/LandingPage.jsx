import React, { useState } from 'react';
import { FaBars, FaTimes, FaUser, FaCalendarAlt, FaCog, FaSignOutAlt } from 'react-icons/fa';

const LandingPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            
            <div className={`bg-teal-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out`}>
                <a href="#" className="text-white flex items-center space-x-2 px-4">
                    <FaCalendarAlt className="w-8 h-8"/>
                    <span className="text-2xl font-extrabold">StaffScheduler</span>
                </a>
                <nav>
                    <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-teal-700 hover:text-white">
                        Dashboard
                    </a>
                    <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-teal-700 hover:text-white">
                        Schedule
                    </a>
                    <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-teal-700 hover:text-white">
                        Employees
                    </a>
                    <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-teal-700 hover:text-white">
                        Reports
                    </a>
                </nav>
            </div>

            
            <div className="flex-1 flex flex-col overflow-hidden">
               
                <header className="bg-white shadow-md">
                    <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                        <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none focus:text-gray-700 md:hidden">
                            <FaBars className="h-6 w-6" />
                        </button>
                        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                        <div className="flex items-center">
                            <button className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none mr-4">
                                <FaCog className="h-6 w-6" />
                            </button>
                            <button className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none">
                                <FaUser className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </header>

                
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        
                        <div className="px-4 py-6 sm:px-0">
                            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
                                <p className="text-2xl text-gray-500">Welcome to StaffScheduler Dashboard</p>
                            </div>
                        </div>
                       
                    </div>
                </main>
            </div>
        </div>
    );
};

export default LandingPage;