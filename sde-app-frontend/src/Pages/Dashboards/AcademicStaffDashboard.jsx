import React from 'react';
import { FaCalendarAlt, FaClock, FaBook, FaDesktop, FaEnvelope } from 'react-icons/fa';

const AcademicStaffDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Academic Staff Dashboard</h1>
                </div>
            </header>
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <DashboardCard icon={<FaCalendarAlt />} title="Teaching Schedule" description="View your class assignments" />
                    <DashboardCard icon={<FaClock />} title="Availability Management" description="Set office hours and availability" />
                    <DashboardCard icon={<FaBook />} title="Attendance & Grading" description="Manage student attendance and grades" />
                    <DashboardCard icon={<FaDesktop />} title="Resource Booking" description="Reserve rooms and equipment" />
                    <DashboardCard icon={<FaEnvelope />} title="Communication" description="Message students and colleagues" />
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

export default AcademicStaffDashboard;