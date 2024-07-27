// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaCalendarAlt, FaUsers, FaClock, FaMobileAlt, FaChartLine, FaShieldAlt } from 'react-icons/fa';

// const Landing = () => {
//   return (
//     <div className="bg-gray-50">
//       {/* Navigation */}
//       <nav className="bg-white shadow-lg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center">
//               <FaCalendarAlt className="h-8 w-8 text-teal-600" />
//               <span className="ml-2 text-xl font-bold text-gray-800">Staff Scheduler</span>
//             </div>
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-4">
//                 <a href="#features" className="text-gray-500 hover:bg-gray-100 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium">Features</a>
//                 <a href="#testimonials" className="text-gray-500 hover:bg-gray-100 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium">Testimonials</a>
//                 <a href="#pricing" className="text-gray-500 hover:bg-gray-100 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
//                 <Link to="/auth" className="bg-teal-600 text-white hover:bg-teal-700 px-4 py-2 rounded-md text-sm font-medium transition duration-300">Sign In</Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <header className="bg-gradient-to-r from-teal-500 to-blue-600 text-white">
//         <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
//           <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
//             Effortlessly Manage Your Team's Schedule
//           </h1>
//           <p className="mt-6 text-xl max-w-3xl">
//             Staff Scheduler streamlines your workforce management, enhances productivity, and simplifies shift planning.
//           </p>
//           <Link to="/auth" className="mt-8 bg-white text-teal-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 inline-block transition duration-300">
//             Get Started
//           </Link>
//         </div>
//       </header>

//       {/* Features Section */}
//       <section id="features" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
//             Powerful Features for Efficient Scheduling
//           </h2>
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {[
//               { icon: <FaUsers />, title: "Team Management", description: "Easily organize and manage your staff members." },
//               { icon: <FaClock />, title: "Shift Planning", description: "Create and adjust shifts with intuitive drag-and-drop interface." },
//               { icon: <FaMobileAlt />, title: "Mobile Access", description: "Access schedules on-the-go with our mobile app." },
//               { icon: <FaChartLine />, title: "Analytics", description: "Gain insights into scheduling patterns and efficiency." },
//               { icon: <FaShieldAlt />, title: "Compliance", description: "Ensure labor law compliance with built-in rules." },
//               { icon: <FaCalendarAlt />, title: "Calendar Integration", description: "Sync with popular calendar apps for seamless planning." },
//             ].map((feature, index) => (
//               <div key={index} className="flex flex-col items-center text-center">
//                 <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
//                   {feature.icon}
//                 </div>
//                 <h3 className="mt-6 text-lg font-medium text-gray-900">{feature.title}</h3>
//                 <p className="mt-2 text-base text-gray-500">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section id="testimonials" className="bg-gray-100 py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
//             What Our Customers Say
//           </h2>
//           <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
//             {[
//               { name: "John Doe", role: "HR Manager", quote: "Staff Scheduler has revolutionized our scheduling process. It's a game-changer!" },
//               { name: "Jane Smith", role: "Restaurant Owner", quote: "The ease of use and flexibility of Staff Scheduler is unmatched. Highly recommended!" },
//               { name: "Mike Johnson", role: "Retail Store Manager", quote: "We've seen a significant increase in productivity since implementing Staff Scheduler." },
//             ].map((testimonial, index) => (
//               <div key={index} className="bg-white shadow-lg rounded-lg p-6">
//                 <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
//                 <div className="font-medium text-gray-900">{testimonial.name}</div>
//                 <div className="text-gray-500">{testimonial.role}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section id="pricing" className="bg-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
//             Simple, Transparent Pricing
//           </h2>
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {[
//               { name: "Basic", price: "$29", features: ["Up to 10 employees", "Basic scheduling", "Email support"] },
//               { name: "Pro", price: "$79", features: ["Up to 50 employees", "Advanced scheduling", "Priority support", "Analytics"] },
//               { name: "Enterprise", price: "Custom", features: ["Unlimited employees", "Custom features", "Dedicated account manager", "24/7 support"] },
//             ].map((plan, index) => (
//               <div key={index} className="border border-gray-200 rounded-lg p-6 bg-gray-50 hover:shadow-lg transition-shadow duration-300">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">{plan.name}</h3>
//                 <p className="text-3xl font-bold text-gray-900 mb-6">{plan.price}<span className="text-base font-normal text-gray-500">/month</span></p>
//                 <ul className="space-y-3 mb-6">
//                   {plan.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="flex items-center">
//                       <FaCalendarAlt className="h-5 w-5 text-teal-500 mr-2" />
//                       <span className="text-gray-600">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <Link to="/auth" className="w-full bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors duration-300 inline-block text-center">
//                   Choose Plan
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white">
//         <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-sm font-semibold uppercase tracking-wider">Product</h3>
//               <ul className="mt-4 space-y-4">
//                 <li><a href="#features" className="text-base text-gray-300 hover:text-white">Features</a></li>
//                 <li><a href="#pricing" className="text-base text-gray-300 hover:text-white">Pricing</a></li>
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">FAQ</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
//               <ul className="mt-4 space-y-4">
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">About</a></li>
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">Blog</a></li>
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">Jobs</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
//               <ul className="mt-4 space-y-4">
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy</a></li>
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">Terms</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-sm font-semibold uppercase tracking-wider">Connect</h3>
//               <ul className="mt-4 space-y-4">
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">Twitter</a></li>
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">Facebook</a></li>
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">LinkedIn</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="mt-8 border-t border-gray-700 pt-8 flex justify-between items-center">
//             <p className="text-base text-gray-400">
//               © 2024 Staff Scheduler. All rights reserved.
//             </p>
//             <FaCalendarAlt className="h-8 w-8 text-teal-500" />
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Landing;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FaCalendarAlt, FaUsers, FaClock, FaMobileAlt, FaChartLine, FaShieldAlt, FaBars, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
// import { useInView } from 'react-intersection-observer';

// const Landing = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [typedText, setTypedText] = useState('');
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);
//   const [isYearly, setIsYearly] = useState(false);
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const fullText = " Effortlessly Manage Your Team's Schedule";

//   useEffect(() => {
//     let i = 0;
//     const typingEffect = setInterval(() => {
//       if (i < fullText.length) {
//         setTypedText(prev => prev + fullText.charAt(i));
//         i++;
//       } else {
//         clearInterval(typingEffect);
//       }
//     }, 100);

//     return () => clearInterval(typingEffect);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const features = [
//     { icon: <FaUsers />, title: "Team Management", description: "Easily organize and manage your staff members." },
//     { icon: <FaClock />, title: "Shift Planning", description: "Create and adjust shifts with intuitive drag-and-drop interface." },
//     { icon: <FaMobileAlt />, title: "Mobile Access", description: "Access schedules on-the-go with our mobile app." },
//     { icon: <FaChartLine />, title: "Analytics", description: "Gain insights into scheduling patterns and efficiency." },
//     { icon: <FaShieldAlt />, title: "Compliance", description: "Ensure labor law compliance with built-in rules." },
//     { icon: <FaCalendarAlt />, title: "Calendar Integration", description: "Sync with popular calendar apps for seamless planning." },
//   ];

//   const testimonials = [
//     { name: "John Doe", role: "HR Manager", quote: "Staff Scheduler has revolutionized our scheduling process. It's a game-changer!", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
//     { name: "Jane Smith", role: "Restaurant Owner", quote: "The ease of use and flexibility of Staff Scheduler is unmatched. Highly recommended!", avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
//     { name: "Mike Johnson", role: "Retail Store Manager", quote: "We've seen a significant increase in productivity since implementing Staff Scheduler.", avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
//   ];

//   const pricingPlans = [
//     { name: "Basic", price: isYearly ? "$290" : "$29", period: isYearly ? "/year" : "/month", features: ["Up to 10 employees", "Basic scheduling", "Email support"] },
//     { name: "Pro", price: isYearly ? "$790" : "$79", period: isYearly ? "/year" : "/month", features: ["Up to 50 employees", "Advanced scheduling", "Priority support", "Analytics"] },
//     { name: "Enterprise", price: "Custom", period: "", features: ["Unlimited employees", "Custom features", "Dedicated account manager", "24/7 support"] },
//   ];

//   return (
//     <div className="bg-gray-50">
//       {/* Navigation */}
//       <nav className="bg-white shadow-lg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center">
//               <FaCalendarAlt className="h-8 w-8 text-teal-600 animate-pulse" />
//               <span className="ml-2 text-xl font-bold text-gray-800">Staff Scheduler</span>
//             </div>
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-4">
//                 <a href="#features" className="text-gray-500 hover:bg-gray-100 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium">Features</a>
//                 <a href="#testimonials" className="text-gray-500 hover:bg-gray-100 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium">Testimonials</a>
//                 <a href="#pricing" className="text-gray-500 hover:bg-gray-100 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
//                 <Link to="/auth" className="bg-teal-600 text-white hover:bg-teal-700 px-4 py-2 rounded-md text-sm font-medium transition duration-300">Sign In</Link>
//               </div>
//             </div>
//             <div className="md:hidden">
//               <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-500 hover:text-teal-600">
//                 <FaBars className="h-6 w-6" />
//               </button>
//             </div>
//           </div>
//         </div>
//         {isMenuOpen && (
//           <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50">Features</a>
//               <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50">Testimonials</a>
//               <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50">Pricing</a>
//               <Link to="/auth" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-teal-600 hover:bg-teal-700">Sign In</Link>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <header className="bg-gradient-to-r from-teal-500 to-blue-600 text-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-pattern opacity-10"></div>
//         <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 relative z-10">
//           <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
//             {typedText}
//           </h1>
//           <p className="mt-6 text-xl max-w-3xl">
//             Staff Scheduler streamlines your workforce management, enhances productivity, and simplifies shift planning.
//           </p>
//           <Link to="/auth" className="mt-8 bg-white text-teal-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 inline-block transition duration-300">
//             Get Started
//           </Link>
//         </div>
//       </header>

//       {/* Features Section */}
//       <section ref={ref} id="features" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
//             Powerful Features for Efficient Scheduling
//           </h2>
//           <div className={`grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
//             {features.map((feature, index) => (
//               <div key={index} className="flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-lg p-6 rounded-lg">
//                 <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
//                   {feature.icon}
//                 </div>
//                 <h3 className="mt-6 text-lg font-medium text-gray-900">{feature.title}</h3>
//                 <p className="mt-2 text-base text-gray-500">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section id="testimonials" className="bg-gray-100 py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
//             What Our Customers Say
//           </h2>
//           <div className="relative h-64">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className={`absolute top-0 left-0 w-full transition-opacity duration-500 ${
//                   index === currentTestimonial ? 'opacity-100' : 'opacity-0'
//                 }`}
//               >
//                 <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
//                   <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4" />
//                   <div>
//                     <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
//                     <div className="font-medium text-gray-900">{testimonial.name}</div>
//                     <div className="text-gray-500">{testimonial.role}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section id="pricing" className="bg-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
//             Simple, Transparent Pricing
//           </h2>
//           <div className="mb-8 flex justify-center">
//             <button
//               onClick={() => setIsYearly(false)}
//               className={`px-4 py-2 rounded-l-md ${!isYearly ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-700'}`}
//             >
//               Monthly
//             </button>
//             <button
//               onClick={() => setIsYearly(true)}
//               className={`px-4 py-2 rounded-r-md ${isYearly ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-700'}`}
//             >
//               Yearly
//             </button>
//           </div>
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {pricingPlans.map((plan, index) => (
//               <div key={index} className={`border border-gray-200 rounded-lg p-6 bg-gray-50 hover:shadow-lg transition-shadow duration-300 ${index === 1 ? 'border-teal-500 border-2' : ''}`}>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">{plan.name}</h3>
//                 <p className="text-3xl font-bold text-gray-900 mb-6">{plan.price}<span className="text-base font-normal text-gray-500">{plan.period}</span></p>
//                 <ul className="space-y-3 mb-6">
//                   {plan.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="flex items-center">
//                       <FaCalendarAlt className="h-5 w-5 text-teal-500 mr-2" />
//                       <span className="text-gray-600">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <Link to="/auth" className="w-full bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors duration-300 inline-block text-center">
//                   Choose Plan
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white">
//         <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-sm font-semibold uppercase tracking-wider">Product</h3>
//               <ul className="mt-4 space-y-4">
//                 <li><a href="#features" className="text-base text-gray-300 hover:text-white">Features</a></li>
//                 <li><a href="#pricing" className="text-base text-gray-300 hover:text-white">Pricing</a></li>
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">FAQ</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
//               <ul className="mt-4 space-y-4">
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">About</a></li>
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">Blog</a></li>
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">Jobs</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
//               <ul className="mt-4 space-y-4">
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy</a></li>
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">Terms</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-sm font-semibold uppercase tracking-wider">Connect</h3>
//               <ul className="mt-4 space-y-4">
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">Twitter</a></li>
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">Facebook</a></li>
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">LinkedIn</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="mt-8">
//             <h3 className="text-sm font-semibold uppercase tracking-wider">Subscribe to our newsletter</h3>
//             <form className="mt-4 sm:flex sm:max-w-md">
//               <input
//                 type="email"
//                 required
//                 className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
//                 placeholder="Enter your email"
//               />
//               <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
//                 <button type="submit" className="w-full bg-teal-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-teal-500">
//                   Subscribe
//                 </button>
//               </div>
//             </form>
//           </div>
//           <div className="mt-8 border-t border-gray-700 pt-8 flex justify-between items-center">
//             <p className="text-base text-gray-400">
//               © 2024 Staff Scheduler. All rights reserved.
//             </p>
//             <div className="flex space-x-6">
//               <a href="#" className="text-gray-400 hover:text-gray-300">
//                 <span className="sr-only">Twitter</span>
//                 <FaTwitter className="h-6 w-6" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-gray-300">
//                 <span className="sr-only">Facebook</span>
//                 <FaFacebook className="h-6 w-6" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-gray-300">
//                 <span className="sr-only">LinkedIn</span>
//                 <FaLinkedin className="h-6 w-6" />
//               </a>
//             </div>
//             <FaCalendarAlt className="h-8 w-8 text-teal-500" />
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Landing;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FaCalendar, FaUsers, FaClock, FaMobile, FaChartLine, FaShieldAlt, FaBars, FaTimes, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

// const Landing = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeTestimonial, setActiveTestimonial] = useState(0);
//   const [isYearlyBilling, setIsYearlyBilling] = useState(false);

//   const features = [
//     { icon: <FaUsers />, title: "Team Management", description: "Easily organize and manage your staff members." },
//     { icon: <FaClock />, title: "Shift Planning", description: "Create and adjust shifts with an intuitive interface." },
//     { icon: <FaMobile />, title: "Mobile Access", description: "Access schedules on-the-go with our mobile app." },
//     { icon: <FaChartLine />, title: "Analytics", description: "Gain insights into scheduling patterns and efficiency." },
//     { icon: <FaShieldAlt />, title: "Compliance", description: "Ensure labor law compliance with built-in rules." },
//     { icon: <FaCalendar />, title: "Calendar Integration", description: "Sync with popular calendar apps for seamless planning." },
//   ];

//   const testimonials = [
//     { name: "John Doe", role: "HR Manager", quote: "Staff Scheduler has revolutionized our scheduling process. It's a game-changer!", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
//     { name: "Jane Smith", role: "Restaurant Owner", quote: "The ease of use and flexibility of Staff Scheduler is unmatched. Highly recommended!", avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
//     { name: "Mike Johnson", role: "Retail Store Manager", quote: "We've seen a significant increase in productivity since implementing Staff Scheduler.", avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
//   ];

//   const pricingPlans = [
//     { name: "Basic", monthlyPrice: 29, yearlyPrice: 290, features: ["Up to 10 employees", "Basic scheduling", "Email support"] },
//     { name: "Pro", monthlyPrice: 79, yearlyPrice: 790, features: ["Up to 50 employees", "Advanced scheduling", "Priority support", "Analytics"] },
//     { name: "Enterprise", price: "Custom", features: ["Unlimited employees", "Custom features", "Dedicated account manager", "24/7 support"] },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const MotionLink = motion(Link);

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Navigation */}
//       <nav className="bg-white shadow-lg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex items-center">
//               <FaCalendar className="h-8 w-8 text-blue-600" />
//               <span className="ml-2 text-xl font-bold text-gray-800">Staff Scheduler</span>
//             </div>
//             <div className="hidden md:flex items-center space-x-4">
//               <a href="#features" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Features</a>
//               <a href="#testimonials" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Testimonials</a>
//               <a href="#pricing" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
//               <MotionLink
//                 to="/auth"
//                 className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Sign In
//               </MotionLink>
//             </div>
//             <div className="md:hidden flex items-center">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="text-gray-600 hover:text-blue-600 focus:outline-none"
//               >
//                 {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
//               </button>
//             </div>
//           </div>
//         </div>
//         {isMenuOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//               <a href="#features" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Features</a>
//               <a href="#testimonials" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Testimonials</a>
//               <a href="#pricing" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
//               <Link to="/auth" className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium">Sign In</Link>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <header className="bg-gradient-to-r from-blue-600 to-teal-400 text-white">
//         <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
//           <motion.h1
//             className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             Effortlessly Manage Your Team's Schedule
//           </motion.h1>
//           <motion.p
//             className="mt-6 text-xl max-w-3xl"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             Staff Scheduler streamlines your workforce management, enhances productivity, and simplifies shift planning.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             <MotionLink
//               to="/auth"
//               className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold inline-block"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Get Started
//             </MotionLink>
//           </motion.div>
//         </div>
//       </header>

//       {/* Features Section */}
//       <section id="features" className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
//             Powerful Features for Efficient Scheduling
//           </h2>
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white rounded-lg shadow-lg p-6"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
//                 <p className="text-base text-gray-500">{feature.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section id="testimonials" className="bg-gray-100 py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
//             What Our Customers Say
//           </h2>
//           <div className="relative h-64">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 className="absolute top-0 left-0 w-full"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: index === activeTestimonial ? 1 : 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
//                   <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4" />
//                   <div>
//                     <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
//                     <div className="font-medium text-gray-900">{testimonial.name}</div>
//                     <div className="text-gray-500">{testimonial.role}</div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section id="pricing" className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
//             Simple, Transparent Pricing
//           </h2>
//           <div className="flex justify-center mb-8">
//             <button
//               onClick={() => setIsYearlyBilling(false)}
//               className={`px-4 py-2 rounded-l-md ${!isYearlyBilling ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
//             >
//               Monthly
//             </button>
//             <button
//               onClick={() => setIsYearlyBilling(true)}
//               className={`px-4 py-2 rounded-r-md ${isYearlyBilling ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
//             >
//               Yearly
//             </button>
//           </div>
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {pricingPlans.map((plan, index) => (
//               <motion.div
//                 key={index}
//                 className="border border-gray-200 rounded-lg p-6 bg-white"
//                 whileHover={{ scale: 1.05 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">{plan.name}</h3>
//                 <p className="text-3xl font-bold text-gray-900 mb-6">
//                   {plan.price ? plan.price : isYearlyBilling ? `$${plan.yearlyPrice}` : `$${plan.monthlyPrice}`}
//                   <span className="text-base font-normal text-gray-500">
//                     {plan.price ? '' : isYearlyBilling ? '/year' : '/month'}
//                   </span>
//                 </p>
//                 <ul className="space-y-3 mb-6">
//                   {plan.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="flex items-center">
//                       <FaCalendar className="h-5 w-5 text-blue-500 mr-2" />
//                       <span className="text-gray-600">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <MotionLink
//                   to="/auth"
//                   className="w-full bg-blue-600 text-white px-4 py-2 rounded-md inline-block text-center"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Choose Plan
//                 </MotionLink>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white">
//         <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-sm font-semibold uppercase tracking-wider">Product</h3>
//               <ul className="mt-4 space-y-4">
//                 <li><a href="#features" className="text-base text-gray-300 hover:text-white">Features</a></li>
//                 <li><a href="#pricing" className="text-base text-gray-300 hover:text-white">Pricing</a></li>
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">FAQ</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
//               <ul className="mt-4 space-y-4">
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">About</a></li>
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">Blog</a></li>
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">Jobs</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
//               <ul className="mt-4 space-y-4">
//               <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy</a></li>
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">Terms</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-sm font-semibold uppercase tracking-wider">Connect</h3>
//               <ul className="mt-4 space-y-4">
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">Twitter</a></li>
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">Facebook</a></li>
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">LinkedIn</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="mt-8">
//             <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Subscribe to our newsletter</h3>
//             <form className="sm:flex sm:max-w-md">
//               <label htmlFor="email-address" className="sr-only">Email address</label>
//               <input
//                 type="email"
//                 id="email-address"
//                 name="email-address"
//                 autoComplete="email"
//                 required
//                 className="w-full px-5 py-3 placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
//                 placeholder="Enter your email"
//               />
//               <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 border border-transparent rounded-md py-3 px-5 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500"
//                 >
//                   Subscribe
//                 </button>
//               </div>
//             </form>
//           </div>
//           <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
//             <div className="flex space-x-6 md:order-2">
//               <a href="#" className="text-gray-400 hover:text-gray-300">
//                 <span className="sr-only">Twitter</span>
//                 <FaTwitter className="h-6 w-6" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-gray-300">
//                 <span className="sr-only">Facebook</span>
//                 <FaFacebook className="h-6 w-6" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-gray-300">
//                 <span className="sr-only">LinkedIn</span>
//                 <FaLinkedin className="h-6 w-6" />
//               </a>
//             </div>
//             <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
//               &copy; 2024 Staff Scheduler. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Landing;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendar, FaUsers, FaClock, FaMobile, FaChartLine, FaShieldAlt, FaBars, FaTimes, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isYearlyBilling, setIsYearlyBilling] = useState(false);

  const features = [
    { icon: <FaUsers />, title: "Team Management", description: "Easily organize and manage your staff members." },
    { icon: <FaClock />, title: "Shift Planning", description: "Create and adjust shifts with an intuitive interface." },
    { icon: <FaMobile />, title: "Mobile Access", description: "Access schedules on-the-go with our mobile app." },
    { icon: <FaChartLine />, title: "Analytics", description: "Gain insights into scheduling patterns and efficiency." },
    { icon: <FaShieldAlt />, title: "Compliance", description: "Ensure labor law compliance with built-in rules." },
    { icon: <FaCalendar />, title: "Calendar Integration", description: "Sync with popular calendar apps for seamless planning." },
  ];

  const testimonials = [
    { name: "John Doe", role: "HR Manager", quote: "Staff Scheduler has revolutionized our scheduling process. It's a game-changer!", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Jane Smith", role: "Restaurant Owner", quote: "The ease of use and flexibility of Staff Scheduler is unmatched. Highly recommended!", avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "Mike Johnson", role: "Retail Store Manager", quote: "We've seen a significant increase in productivity since implementing Staff Scheduler.", avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
  ];

  const pricingPlans = [
    { name: "Basic", monthlyPrice: 29, yearlyPrice: 290, features: ["Up to 10 employees", "Basic scheduling", "Email support"] },
    { name: "Pro", monthlyPrice: 79, yearlyPrice: 790, features: ["Up to 50 employees", "Advanced scheduling", "Priority support", "Analytics"] },
    { name: "Enterprise", price: "Custom", features: ["Unlimited employees", "Custom features", "Dedicated account manager", "24/7 support"] },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const MotionLink = motion(Link);

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <FaCalendar className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Staff Scheduler</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#features" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Features</a>
              <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Testimonials</a>
              <a href="#pricing" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
              <MotionLink
                to="/auth"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign In
              </MotionLink>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-indigo-600 focus:outline-none"
              >
                {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#features" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Features</a>
              <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Testimonials</a>
              <a href="#pricing" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
              <Link to="/auth" className="bg-indigo-600 text-white block px-3 py-2 rounded-md text-base font-medium">Sign In</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Effortlessly Manage Your Team's Schedule
          </motion.h1>
          <motion.p
            className="mt-6 text-xl max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Staff Scheduler streamlines your workforce management, enhances productivity, and simplifies shift planning.
          </motion.p>
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <MotionLink
              to="/auth"
              className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </MotionLink>
          </motion.div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16">
            Powerful Features for Efficient Scheduling
          </h2>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg shadow-lg p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500 text-white mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-base text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16">
            What Our Customers Say
          </h2>
          <div className="relative h-80">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="absolute top-0 left-0 w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: index === activeTestimonial ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white shadow-xl rounded-lg p-8 flex flex-col items-center text-center">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-24 h-24 rounded-full mb-6" />
                  <p className="text-gray-600 mb-6 text-lg italic">"{testimonial.quote}"</p>
                  <div className="font-semibold text-gray-900 text-xl">{testimonial.name}</div>
                  <div className="text-indigo-600">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16">
            Simple, Transparent Pricing
          </h2>
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setIsYearlyBilling(false)}
              className={`px-4 py-2 rounded-l-md ${!isYearlyBilling ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearlyBilling(true)}
              className={`px-4 py-2 rounded-r-md ${isYearlyBilling ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Yearly
            </button>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 rounded-lg p-8 bg-gray-50 text-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold text-indigo-600 mb-6">
                  {plan.price ? plan.price : isYearlyBilling ? `$${plan.yearlyPrice}` : `$${plan.monthlyPrice}`}
                  <span className="text-base font-normal text-gray-500">
                    {plan.price ? '' : isYearlyBilling ? '/year' : '/month'}
                  </span>
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center">
                      <FaCalendar className="h-5 w-5 text-indigo-500 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <MotionLink
                  to="/auth"
                  className="w-full bg-indigo-600 text-white px-6 py-3 rounded-full inline-block text-center font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Choose Plan
                </MotionLink>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Product</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#features" className="text-base text-gray-300 hover:text-white">Features</a></li>
                <li><a href="#pricing" className="text-base text-gray-300 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">About</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Jobs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Terms</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Connect</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Facebook</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Subscribe to our newsletter</h3>
            <form className="sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                type="email"
                id="email-address"
                name="email-address"
                autoComplete="email"
                required
                className="w-full px-5 py-3 placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-5 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              &copy; 2024 Staff Scheduler. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;