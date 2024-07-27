import React from 'react';
import { FaUsers, FaCalendarAlt, FaChartBar, FaBell, FaCogs } from 'react-icons/fa';

const AdminDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Administrator Dashboard</h1>
                </div>
            </header>
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <DashboardCard icon={<FaUsers />} title="User Management" description="Manage user accounts and permissions" />
                    <DashboardCard icon={<FaCalendarAlt />} title="Schedule Management" description="Oversee and modify schedules" />
                    <DashboardCard icon={<FaChartBar />} title="Reporting & Analytics" description="Generate and analyze reports" />
                    <DashboardCard icon={<FaBell />} title="Notifications" description="Manage system-wide notifications" />
                    <DashboardCard icon={<FaCogs />} title="System Settings" description="Configure application settings" />
                </div>
            </main>
        </div>
    );
};

const DashboardCard = ({ icon, title, description }) => {
    return (
        <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
                <div className="flex items-center">
                    <div className="flex-shrink-0 text-blue-500 text-3xl">
                        {icon}
                    </div>
                    <div className="ml-5 w-0 flex-1">
                        <dl>
                            <dt className="text-lg font-medium text-gray-900 truncate">
                                {title}
                            </dt>
                            <dd className="mt-1 text-sm text-gray-500">
                                {description}
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 px-5 py-3">
                <div className="text-sm">
                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                        View details
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;