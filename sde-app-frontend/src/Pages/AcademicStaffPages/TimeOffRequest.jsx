// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';
// import { FaCalendar, FaClipboard } from 'react-icons/fa';

// import TimeOffStatus from './TimeOffStatus';

// const TimeOffRequest = ({ onRequestSubmitted }) => {
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [reason, setReason] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       await axios.post('http://localhost:8080/api/time-off-requests', {
//         startDate,
//         endDate,
//         reason
//       });
//       toast.success('Time off request submitted successfully');
//       setStartDate('');
//       setEndDate('');
//       setReason('');
//       onRequestSubmitted();
//     } catch (error) {
//       console.error('Error submitting time off request:', error);
//       toast.error('Failed to submit time off request. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-4">Request Time Off</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
//           <div className="mt-1 relative rounded-md shadow-sm">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <FaCalendar className="text-gray-400" />
//             </div>
//             <input
//               type="date"
//               id="startDate"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//               required
//               className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
//             />
//           </div>
//         </div>
//         <div>
//           <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date</label>
//           <div className="mt-1 relative rounded-md shadow-sm">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <FaCalendar className="text-gray-400" />
//             </div>
//             <input
//               type="date"
//               id="endDate"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//               required
//               className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
//             />
//           </div>
//         </div>
//         <div>
//           <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Reason</label>
//           <div className="mt-1 relative rounded-md shadow-sm">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <FaClipboard className="text-gray-400" />
//             </div>
//             <textarea
//               id="reason"
//               value={reason}
//               onChange={(e) => setReason(e.target.value)}
//               required
//               rows={3}
//               className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
//             />
//           </div>
//         </div>
//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
//         >
//           {isSubmitting ? 'Submitting...' : 'Submit Request'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default TimeOffRequest;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';
// import { FaCalendar, FaClipboard, FaPaperPlane } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import TimeOffStatus from './TimeOffStatus';

// const TimeOffRequest = ({ onRequestSubmitted }) => {
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [reason, setReason] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       await axios.post('http://localhost:8080/api/time-off-requests', {
//         startDate,
//         endDate,
//         reason
//       });
//       toast.success('Time off request submitted successfully');
//       setStartDate('');
//       setEndDate('');
//       setReason('');
//       onRequestSubmitted();
//     } catch (error) {
//       console.error('Error submitting time off request:', error);
//       toast.error('Failed to submit time off request. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-xl shadow-2xl max-w-4xl mx-auto">
     
//         <h2 className="text-3xl font-bold mb-6 text-white text-center">Request Time Off</h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <label htmlFor="startDate" className="block text-sm font-medium text-white mb-2">Start Date</label>
//               <div className="relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaCalendar className="text-gray-300" />
//                 </div>
//                 <input
//                   type="date"
//                   id="startDate"
//                   value={startDate}
//                   onChange={(e) => setStartDate(e.target.value)}
//                   required
//                   className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300"
//                 />
//               </div>
//             </div>
//             <div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <label htmlFor="endDate" className="block text-sm font-medium text-white mb-2">End Date</label>
//               <div className="relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaCalendar className="text-gray-300" />
//                 </div>
//                 <input
//                   type="date"
//                   id="endDate"
//                   value={endDate}
//                   onChange={(e) => setEndDate(e.target.value)}
//                   required
//                   className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300"
//                 />
//               </div>
//             </div>
//           </div>
//           <div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//             <label htmlFor="reason" className="block text-sm font-medium text-white mb-2">Reason</label>
//             <div className="relative rounded-md shadow-sm">
//               <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
//                 <FaClipboard className="text-gray-300" />
//               </div>
//               <textarea
//                 id="reason"
//                 value={reason}
//                 onChange={(e) => setReason(e.target.value)}
//                 required
//                 rows={4}
//                 className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300"
//                 placeholder="Please provide a reason for your time off request..."
//               />
//             </div>
//           </div>
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
//           >
//             {isSubmitting ? (
//               <span className="flex items-center">
//                 <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Submitting...
//               </span>
//             ) : (
//               <span className="flex items-center">
//                 <FaPaperPlane className="mr-2" />
//                 Submit Request
//               </span>
//             )}
//           </button>
//         </form>
      
//       <TimeOffStatus />
//     </div>
//   );
// };

// export default TimeOffRequest;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';
// import { FaClipboard, FaPaperPlane } from 'react-icons/fa';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
// import TimeOffStatus from './TimeOffStatus';

// const TimeOffRequest = ({ onRequestSubmitted }) => {
//   const [startDateTime, setStartDateTime] = useState(null);
//   const [endDateTime, setEndDateTime] = useState(null);
//   const [reason, setReason] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       await axios.post('http://localhost:8080/api/time-off-requests', {
//         startDateTime,
//         endDateTime,
//         reason
//       });
//       toast.success('Time off request submitted successfully');
//       setStartDateTime(null);
//       setEndDateTime(null);
//       setReason('');
//       onRequestSubmitted();
//     } catch (error) {
//       console.error('Error submitting time off request:', error);
//       toast.error('Failed to submit time off request. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
//       <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Request Time Off</h2>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label htmlFor="startDateTime" className="block text-sm font-medium text-gray-700 mb-2">Start Date and Time</label>
//             <DatePicker
//               id="startDateTime"
//               selected={startDateTime}
//               onChange={(date) => setStartDateTime(date)}
//               showTimeSelect
//               dateFormat="MMMM d, yyyy h:mm aa"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="endDateTime" className="block text-sm font-medium text-gray-700 mb-2">End Date and Time</label>
//             <DatePicker
//               id="endDateTime"
//               selected={endDateTime}
//               onChange={(date) => setEndDateTime(date)}
//               showTimeSelect
//               dateFormat="MMMM d, yyyy h:mm aa"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               required
//             />
//           </div>
//         </div>
//         <div>
//           <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">Reason</label>
//           <div className="relative rounded-md shadow-sm">
//             <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
//               <FaClipboard className="text-gray-400" />
//             </div>
//             <textarea
//               id="reason"
//               value={reason}
//               onChange={(e) => setReason(e.target.value)}
//               required
//               rows={4}
//               className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
//               placeholder="Please provide a reason for your time off request..."
//             />
//           </div>
//         </div>
//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
//         >
//           {isSubmitting ? (
//             <span className="flex items-center">
//               <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//               </svg>
//               Submitting...
//             </span>
//           ) : (
//             <span className="flex items-center">
//               <FaPaperPlane className="mr-2" />
//               Submit Request
//             </span>
//           )}
//         </button>
//       </form>
//       <TimeOffStatus />
//     </div>
//   );
// };

// export default TimeOffRequest;

import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaClipboard, FaPaperPlane } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import TimeOffStatus from './TimeOffStatus';
import { submitTimeOffRequest } from '../../services/api';

const TimeOffRequest = ({ onRequestSubmitted }) => {
  const [startDateTime, setStartDateTime] = useState(null);
  const [endDateTime, setEndDateTime] = useState(null);
  const [reason, setReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitTimeOffRequest({
        startDateTime,
        endDateTime,
        reason
      });
      toast.success('Time off request submitted successfully');
      setStartDateTime(null);
      setEndDateTime(null);
      setReason('');
      onRequestSubmitted();
    } catch (error) {
      console.error('Error submitting time off request:', error);
      toast.error('Failed to submit time off request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Request Time Off</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="startDateTime" className="block text-sm font-medium text-gray-700 mb-2">Start Date and Time</label>
            <DatePicker
              id="startDateTime"
              selected={startDateTime}
              onChange={(date) => setStartDateTime(date)}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="endDateTime" className="block text-sm font-medium text-gray-700 mb-2">End Date and Time</label>
            <DatePicker
              id="endDateTime"
              selected={endDateTime}
              onChange={(date) => setEndDateTime(date)}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">Reason</label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
              <FaClipboard className="text-gray-400" />
            </div>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
              rows={4}
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="Please provide a reason for your time off request..."
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </span>
          ) : (
            <span className="flex items-center">
              <FaPaperPlane className="mr-2" />
              Submit Request
            </span>
          )}
        </button>
      </form>
      <TimeOffStatus />
    </div>
  );
};

export default TimeOffRequest;