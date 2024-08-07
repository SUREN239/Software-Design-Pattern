import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Login = ({ onToggle }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-80 w-full max-w-4xl flex rounded-3xl shadow-2xl overflow-hidden backdrop-filter backdrop-blur-lg">
        <motion.div 
          className="w-1/2 bg-gradient-to-br from-blue-400 to-blue-600 p-12 hidden lg:block relative"
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          <div className="absolute inset-0 bg-white opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-white text-6xl font-bold mb-6">Welcome Back</h2>
            <p className="text-blue-100 text-lg mb-8">
              Enter your details and start your journey with us
            </p>
            <button 
              onClick={onToggle} 
              className="bg-transparent border-2 border-white text-white py-3 px-6 rounded-full font-bold hover:bg-white hover:text-blue-600 transition duration-300 transform hover:scale-105"
            >
              Sign Up
            </button>
          </div>
        </motion.div>

        <motion.div 
          className="w-full lg:w-1/2 p-12 space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-5xl font-bold text-blue-800 mb-4">Sign In</h2>
          <p className="text-blue-600 mb-8">Sign in to your account to continue</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="text-sm font-bold text-blue-700 block mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-bold text-blue-700 block mb-2">Password</label>
              <input
                type="password"
                id="password"
                className="w-full p-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-blue-300 rounded" />
                <label htmlFor="remember" className="ml-2 block text-sm text-blue-700">Remember me</label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg font-bold hover:opacity-90 transition duration-300 transform hover:scale-105"
            >
              Sign In
            </button>
          </form>
          <div className="text-center">
            <p className="text-sm text-blue-600">
              Don't have an account?{' '}
              <button 
                onClick={onToggle} 
                className="text-blue-800 hover:text-blue-900 font-bold"
              >
                Sign up
              </button>
            </p>
          </div>
          {/* Social Login Options */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-blue-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-blue-500">Or continue with</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {['facebook', 'twitter', 'github'].map((social) => (
                <motion.button
                  key={social}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full inline-flex justify-center py-2 px-4 border border-blue-300 rounded-md shadow-sm bg-white text-sm font-medium text-blue-500 hover:bg-blue-50 transition-colors duration-300"
                >
                  <span className="sr-only">{`Sign in with ${social}`}</span>
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                  </svg>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;