import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-4">
      <div className="bg-white w-full max-w-4xl flex rounded-3xl shadow-2xl overflow-hidden">
        <div className="w-1/2 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-12 hidden lg:block">
          <div className="text-white text-3xl font-bold mb-6">Welcome Back</div>
          <div className="text-white mb-8">
            Enter your personal details and start your journey with us
          </div>
          <div className="relative">
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-300 rounded-full opacity-50"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-pink-300 rounded-full opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-64 h-64 text-white opacity-10" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 p-12 space-y-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Sign In</h2>
          <p className="text-gray-600 mb-8">Sign in to your account to continue</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="text-sm font-bold text-gray-700 block mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-bold text-gray-700 block mb-2">Password</label>
              <input
                type="password"
                id="password"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="h-4 w-4 text-purple-500 focus:ring-purple-400 border-gray-300 rounded" />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">Remember me</label>
              </div>
              <a href="#" className="text-sm text-purple-600 hover:text-purple-800">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg font-bold hover:opacity-90 transition duration-300"
            >
              Sign In
            </button>
          </form>
          <div className="text-center">
            <p className="text-sm text-gray-600">Don't have an account? 
              <a href="#" className="text-purple-600 hover:text-purple-800 ml-1 font-bold">Sign up</a>
            </p>
          </div>
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </div>
              <div className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import React, { useState } from 'react';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Login attempt with:', email, password);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 p-4">
//       <div className="bg-white w-full max-w-4xl flex rounded-3xl shadow-2xl overflow-hidden">
//         {/* Left Section - Decorative */}
//         <div className="w-1/2 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 p-12 hidden lg:block relative">
//           <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
//             <svg className="absolute top-0 left-0 w-full h-full text-white opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
//               <path d="M0,0 C40,33 66,52 75,100 H0 V0 Z" fill="currentColor" />
//               <path d="M100,0 C60,33 34,52 25,100 H100 V0 Z" fill="currentColor" />
//             </svg>
//           </div>
//           <div className="relative z-10">
//             <h2 className="text-white text-5xl font-bold mb-6">Welcome Back</h2>
//             <p className="text-pink-200 mb-8 text-lg">
//               Enter your personal details and start your colorful journey with us
//             </p>
//             <a href="#" className="inline-block bg-transparent border-2 border-white text-white py-3 px-6 rounded-full font-bold hover:bg-white hover:text-purple-600 transition duration-300">
//               Learn More
//             </a>
//           </div>
//         </div>

//         {/* Right Section - Login Form */}
//         <div className="w-full lg:w-1/2 p-12 space-y-8">
//           <h2 className="text-4xl font-bold text-gray-800 mb-4">Sign In</h2>
//           <p className="text-gray-600 mb-8">Sign in to your account to continue</p>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="email" className="text-sm font-bold text-gray-700 block mb-2">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
//                 placeholder="your@email.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="text-sm font-bold text-gray-700 block mb-2">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
//                 placeholder="••••••••"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input type="checkbox" id="remember" className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
//                 <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">Remember me</label>
//               </div>
//               <a href="#" className="text-sm text-purple-600 hover:text-purple-800">Forgot password?</a>
//             </div>
//             <button
//               type="submit"
//               className="w-full py-3 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 text-white rounded-lg font-bold hover:opacity-90 transition duration-300"
//             >
//               Sign In
//             </button>
//           </form>
//           <div className="text-center">
//             <p className="text-sm text-gray-600">Don't have an account? 
//               <a href="#" className="text-purple-600 hover:text-purple-800 ml-1 font-bold">Sign up</a>
//             </p>
//           </div>
//           {/* Social Login Options */}
//           <div className="mt-8">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">Or continue with</span>
//               </div>
//             </div>
//             <div className="mt-6 grid grid-cols-3 gap-3">
//               {['facebook', 'twitter', 'github'].map((social) => (
//                 <button
//                   key={social}
//                   className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-purple-600 transition-colors duration-300"
//                 >
//                   <span className="sr-only">{`Sign in with ${social}`}</span>
//                   <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
//                   </svg>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

