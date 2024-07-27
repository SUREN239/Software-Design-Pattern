import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaCalendarAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AuthForm = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(isLogin ? 'Login attempt:' : 'Registration attempt:', { email, password });
        
        if (isLogin) {
            if (email === 'admin@staffscheduler.com') {
                onLogin('admin');
                navigate('/admin-dashboard');
            } else if (email.endsWith('@academic.staffscheduler.com')) {
                onLogin('academic');
                navigate('/academic-staff-dashboard');
            } else if (email.endsWith('@staffscheduler.com')) {
                onLogin('non-academic');
                navigate('/non-academic-staff-dashboard');
            } else {
                alert('Invalid credentials');
            }
        } else {
            // Handle registration logic here
            alert('Registration successful! Please login.');
            setIsLogin(true);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Left Section - Hidden on mobile, visible on medium screens and up */}
            <div className="hidden md:flex md:w-2/5 flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-600 via-teal-700 to-teal-800 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22none%22%20stroke%3D%22%23fff%22%3E%3Cpath%20d%3D%22M0%2016h32M16%200v32%22%2F%3E%3C%2Fsvg%3E')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                <div className="w-full max-w-md space-y-8 relative z-10">
                    <FaCalendarAlt className="text-6xl mx-auto" />
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-green-400">Staff Scheduler</h1>
                        <p className="text-lg text-gray-200">
                            Effortlessly Manage Your Team's Schedule
                        </p>
                        <p className="text-sm mt-4 italic text-gray-300">
                            Optimize Productivity, Enhance Collaboration
                        </p>
                    </div>
                    <div className="mt-8 p-6 bg-white bg-opacity-10 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm border border-gray-200 border-opacity-20">
                        <h2 className="text-xl font-semibold mb-4 text-teal-300">Why Choose Staff Scheduler?</h2>
                        <ul className="list-disc list-inside space-y-2 text-sm text-gray-200">
                            <li>Intuitive and user-friendly interface</li>
                            <li>Real-time schedule updates</li>
                            <li>Automated conflict resolution</li>
                            <li>Customizable shift patterns</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Right Section - Full width on mobile, 3/5 width on medium screens and up */}
            <div className="w-full md:w-3/5 flex items-center justify-center p-4 sm:p-8 bg-white relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 opacity-50"></div>
                <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%221%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20cx%3D%223%22%20cy%3D%223%22%20r%3D%223%22%2F%3E%3Ccircle%20cx%3D%2213%22%20cy%3D%2213%22%20r%3D%223%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                <div className="w-full max-w-md z-10 space-y-8">
                    {/* Visible only on mobile */}
                    <div className="md:hidden text-center mb-6">
                        <FaCalendarAlt className="text-5xl mx-auto text-teal-600 mb-2" />
                        <h1 className="text-3xl font-extrabold text-teal-900">Staff Scheduler</h1>
                        <p className="text-sm text-gray-600 mt-1">Effortlessly Manage Your Team's Schedule</p>
                    </div>
                    
                    {/* Header Section */}
                    <header className="text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-teal-900 font-serif">{isLogin ? 'Staff Login' : 'Staff Registration'}</h2>
                        <p className="mt-2 text-sm text-gray-600 font-sans">
                            {isLogin ? 'Access your Staff Scheduling Portal' : 'Create your Staff Scheduling Account'}
                        </p>
                    </header>

                    {/* Auth Form Section */}
                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                        <div className="relative">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="w-full px-4 py-2 md:py-3 rounded-lg text-gray-700 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 pl-10 font-sans text-sm md:text-base"
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
                                className="w-full px-4 py-2 md:py-3 rounded-lg text-gray-700 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 pl-10 pr-10 font-sans text-sm md:text-base"
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
                        {isLogin && (
                            <div className="flex items-center justify-between text-sm">
                                <a href="#" className="font-medium text-teal-600 hover:text-teal-500 font-sans">
                                    Forgot Password?
                                </a>
                            </div>
                        )}
                        <button
                            type="submit"
                            className="w-full py-2 md:py-3 px-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300 ease-in-out font-sans shadow-lg text-sm md:text-base"
                        >
                            {isLogin ? 'Login' : 'Register'}
                        </button>
                    </form>

                    {/* Toggle Login/Register Section */}
                    <div className="text-center">
                        <p className="text-sm text-gray-600 font-sans">
                            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="font-medium text-teal-600 hover:text-teal-500"
                            >
                                {isLogin ? 'Register here' : 'Login here'}
                            </button>
                        </p>
                    </div>

                    {/* Footer Section */}
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


// import React, { useState } from 'react';
// import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaCalendarAlt } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

// const AuthForm = ({ onLogin }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [isLogin, setIsLogin] = useState(true);
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(isLogin ? 'Login attempt:' : 'Registration attempt:', { email, password });
        
//         // Simulated authentication logic
//         if (isLogin) {
//             if (email === 'admin@staffscheduler.com') {
//                 onLogin('admin');
//                 navigate('/admin-dashboard');
//             } else if (email.endsWith('@staffscheduler.com')) {
//                 onLogin('staff');
//                 navigate('/staff-dashboard');
//             } else {
//                 // Handle invalid login
//                 alert('Invalid credentials');
//             }
//         } else {
//             // Handle registration logic here
//             alert('Registration successful! Please login.');
//             setIsLogin(true);
//         }
//     };

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     return (
//         <div className="min-h-screen flex bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
//             {/* Left Section - Hidden on mobile, visible on medium screens and up */}
//             <div className="hidden md:flex md:w-2/5 flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
//                 <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22none%22%20stroke%3D%22%23ffd700%22%3E%3Cpath%20d%3D%22M16%204l4%204-4%204%204%204-4%204%204%204-4%204M4%2016l4-4%204%204-4%204%204%204-4%204M28%2016l-4-4-4%204%204%204-4%204%204%204%22%2F%3E%3C%2Fsvg%3E')] bg-center"></div>
//                 <div className="w-full max-w-md space-y-8 relative z-10">
//                     <FaCalendarAlt className="text-6xl mx-auto text-yellow-400" />
//                     <div className="text-center">
//                         <h1 className="text-4xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">Staff Scheduler</h1>
//                         <p className="text-lg text-blue-200">
//                             Effortlessly Manage Your Team's Schedule
//                         </p>
//                         <p className="text-sm mt-4 italic text-yellow-100">
//                             Optimize Productivity, Enhance Collaboration
//                         </p>
//                     </div>
//                     <div className="mt-8 p-6 bg-blue-800 bg-opacity-50 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm border border-blue-400 border-opacity-20">
//                         <h2 className="text-xl font-semibold mb-4 text-yellow-300">Why Choose Staff Scheduler?</h2>
//                         <ul className="list-disc list-inside space-y-2 text-sm text-blue-100">
//                             <li>Intuitive and user-friendly interface</li>
//                             <li>Real-time schedule updates</li>
//                             <li>Automated conflict resolution</li>
//                             <li>Customizable shift patterns</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>

//             {/* Right Section - Full width on mobile, 3/5 width on medium screens and up */}
//             <div className="w-full md:w-3/5 flex items-center justify-center p-4 sm:p-8 bg-blue-100 bg-opacity-10 backdrop-filter backdrop-blur-md relative">
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-100 opacity-30"></div>
//                 <div className="absolute inset-0 opacity-[0.05] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23ffd700%22%20fill-opacity%3D%221%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20cx%3D%223%22%20cy%3D%223%22%20r%3D%223%22%2F%3E%3Ccircle%20cx%3D%2213%22%20cy%3D%2213%22%20r%3D%223%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
//                 <div className="w-full max-w-md z-10 space-y-8">
//                     {/* Visible only on mobile */}
//                     <div className="md:hidden text-center mb-6">
//                         <FaCalendarAlt className="text-5xl mx-auto text-yellow-400 mb-2" />
//                         <h1 className="text-3xl font-extrabold text-blue-900">Staff Scheduler</h1>
//                         <p className="text-sm text-yellow-600 mt-1">Effortlessly Manage Your Team's Schedule</p>
//                     </div>
                    
//                     {/* Header Section */}
//                     <header className="text-center">
//                         <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 font-serif">{isLogin ? 'Staff Login' : 'Staff Registration'}</h2>
//                         <p className="mt-2 text-sm text-blue-200 font-sans">
//                             {isLogin ? 'Access your Staff Scheduling Portal' : 'Create your Staff Scheduling Account'}
//                         </p>
//                     </header>

//                     {/* Auth Form Section */}
//                     <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
//                         <div className="relative">
//                             <input
//                                 id="email"
//                                 name="email"
//                                 type="email"
//                                 required
//                                 className="w-full px-4 py-2 md:py-3 rounded-lg text-blue-900 bg-blue-50 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 pl-10 font-sans text-sm md:text-base"
//                                 placeholder="Email Address"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                             <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-blue-400" />
//                         </div>
//                         <div className="relative">
//                             <input
//                                 id="password"
//                                 name="password"
//                                 type={showPassword ? "text" : "password"}
//                                 required
//                                 className="w-full px-4 py-2 md:py-3 rounded-lg text-blue-900 bg-blue-50 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 pl-10 pr-10 font-sans text-sm md:text-base"
//                                 placeholder="Password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                             <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-blue-400" />
//                             <button
//                                 type="button"
//                                 onClick={togglePasswordVisibility}
//                                 className="absolute top-1/2 right-3 transform -translate-y-1/2 text-blue-400 focus:outline-none"
//                             >
//                                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//                             </button>
//                         </div>
//                         {isLogin && (
//                             <div className="flex items-center justify-between text-sm">
//                                 <a href="#" className="font-medium text-yellow-400 hover:text-yellow-300 font-sans">
//                                     Forgot Password?
//                                 </a>
//                             </div>
//                         )}
//                         <button
//                             type="submit"
//                             className="w-full py-2 md:py-3 px-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-semibold rounded-lg hover:from-yellow-500 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 transition duration-300 ease-in-out font-sans shadow-lg text-sm md:text-base"
//                         >
//                             {isLogin ? 'Login' : 'Register'}
//                         </button>
//                     </form>

//                     {/* Toggle Login/Register Section */}
//                     <div className="text-center">
//                         <p className="text-sm text-blue-200 font-sans">
//                             {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
//                             <button
//                                 onClick={() => setIsLogin(!isLogin)}
//                                 className="font-medium text-yellow-400 hover:text-yellow-300"
//                             >
//                                 {isLogin ? 'Register here' : 'Login here'}
//                             </button>
//                         </p>
//                     </div>

//                     {/* Footer Section */}
//                     <footer className="pt-4 border-t border-blue-400 border-opacity-30">
//                         <p className="text-xs text-center text-blue-300 font-sans">
//                             © 2024 Staff Scheduler. All rights reserved.
//                         </p>
//                     </footer>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AuthForm;