import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaCalendarAlt, FaUser, FaBuilding, FaUserTag } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useUser } from './Web/UserContext';

const AuthForm = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [role, setRole] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const { setUsername } = useUser();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            console.log('Login attempt:', { email, password });
            if (email === 'admin@ski.ac.in') {
                setUsername('Admin');
                onLogin('admin');
            } else if (email.endsWith('@skct.edu.in')) {
                setUsername('Academic Staff');
                onLogin('academic');
            } else if (email.endsWith('@staffscheduler.com')) {
                setUsername('Non-Academic Staff');
                onLogin('non-academic');
            } else {
                alert('Invalid credentials');
            }
        } else {
            console.log('Registration attempt:', { name, email, password, department, role });
            alert('Registration functionality not implemented yet');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="min-h-screen flex bg-gray-100">
            <div className="hidden md:flex md:w-2/5 flex-col items-center justify-center p-8 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22none%22%20stroke%3D%22%23fff%22%3E%3Cpath%20d%3D%22M0%2016h32M16%200v32%22%2F%3E%3C%2Fsvg%3E')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                <div className="w-full max-w-md space-y-8 relative z-10">
                    <FaCalendarAlt className="text-6xl mx-auto" />
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-purple-400">Staff Scheduler</h1>
                        <p className="text-lg text-gray-200">
                            Effortlessly Manage Your Team's Schedule
                        </p>
                        <p className="text-sm mt-4 italic text-gray-300">
                            Optimize Productivity, Enhance Collaboration
                        </p>
                    </div>
                    <div className="mt-8 p-6 bg-white bg-opacity-10 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm border border-gray-200 border-opacity-20">
                        <h2 className="text-xl font-semibold mb-4 text-indigo-300">Why Choose Staff Scheduler?</h2>
                        <ul className="list-disc list-inside space-y-2 text-sm text-gray-200">
                            <li>Intuitive and user-friendly interface</li>
                            <li>Real-time schedule updates</li>
                            <li>Automated conflict resolution</li>
                            <li>Customizable shift patterns</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-3/5 flex items-center justify-center p-4 sm:p-8 bg-white relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-50"></div>
                <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%221%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20cx%3D%223%22%20cy%3D%223%22%20r%3D%223%22%2F%3E%3Ccircle%20cx%3D%2213%22%20cy%3D%2213%22%20r%3D%223%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                <div className="w-full max-w-md z-10 space-y-8">
                    <div className="text-center">
                        <div className="inline-block p-4 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full shadow-lg">
                            <FaCalendarAlt className="text-4xl text-white" />
                        </div>
                    </div>
                    <div className="md:hidden text-center mb-6">
                        <FaCalendarAlt className="text-5xl mx-auto text-indigo-600 mb-2" />
                        <h1 className="text-3xl font-extrabold text-indigo-900">Staff Scheduler</h1>
                        <p className="text-sm text-gray-600 mt-1">Effortlessly Manage Your Team's Schedule</p>
                    </div>
                    <header className="text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 font-serif">{isLogin ? 'Staff Login' : 'Staff Registration'}</h2>
                        <p className="mt-2 text-sm text-gray-600 font-sans">
                            {isLogin ? 'Access your Staff Scheduling Portal' : 'Create your Staff Scheduling Account'}
                        </p>
                    </header>

                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                        {!isLogin && (
                            <div className="relative">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="w-full px-4 py-2 md:py-3 rounded-lg text-gray-700 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 pl-10 font-sans text-sm md:text-base"
                                    placeholder="Full Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                            </div>
                        )}
                        <div className="relative">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="w-full px-4 py-2 md:py-3 rounded-lg text-gray-700 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 pl-10 font-sans text-sm md:text-base"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                        </div>
                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                required
                                className="w-full px-4 py-2 md:py-3 rounded-lg text-gray-700 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 pl-10 pr-10 font-sans text-sm md:text-base"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 focus:outline-none"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        {!isLogin && (
                            <>
                                <div className="relative">
                                    <select
                                        id="department"
                                        name="department"
                                        required
                                        className="w-full px-4 py-2 md:py-3 rounded-lg text-gray-700 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 pl-10 font-sans text-sm md:text-base"
                                        value={department}
                                        onChange={(e) => setDepartment(e.target.value)}
                                    >
                                        <option value="">Select Department</option>
                                        <option value="CSE">CSE</option>
                                        <option value="ECE">ECE</option>
                                        <option value="EEE">EEE</option>
                                        <option value="MECH">MECH</option>
                                        <option value="CIVIL">CIVIL</option>
                                        <option value="IT">IT</option>
                                    </select>
                                    <FaBuilding className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                                </div>
                                <div className="relative">
                                    <select
                                        id="role"
                                        name="role"
                                        required
                                        className="w-full px-4 py-2 md:py-3 rounded-lg text-gray-700 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 pl-10 font-sans text-sm md:text-base"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                    >
                                        <option value="">Select Role</option>
                                        <option value="USER">User</option>
                                        <option value="ADMIN">Admin</option>
                                        <option value="DEVELOPER">Developer</option>
                                    </select>
                                    <FaUserTag className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                                </div>
                            </>
                        )}
                        {isLogin && (
                            <div className="flex items-center justify-between text-sm">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 font-sans">
                                    Forgot Password?
                                </a>
                            </div>
                        )}
                        <button
                            type="submit"
                            className="w-full py-2 md:py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out font-sans shadow-lg text-sm md:text-base"
                        >
                            {isLogin ? 'Login' : 'Register'}
                        </button>
                    </form>

                    <div className="text-center">
                        <p className="text-sm text-gray-600 font-sans">
                            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                {isLogin ? 'Register here' : 'Login here'}
                            </button>
                        </p>
                    </div>

                    <footer className="pt-4 border-t border-gray-200">
                        <p className="text-xs text-center text-gray-500 font-sans">
                            © 2024 Staff Scheduler. All rights reserved.
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;