// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import { FaCheckCircle, FaTimesCircle, FaHourglass } from 'react-icons/fa';

// const TimeOffStatus = () => {
//   const [requests, setRequests] = useState([]);
//   const [holidays, setHolidays] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [requestsResponse, holidaysResponse] = await Promise.all([
//           axios.get('http://localhost:8080/api/time-off-requests'),
//           axios.get('http://localhost:8080/api/holidays')
//         ]);
//         setRequests(requestsResponse.data);
//         setHolidays(holidaysResponse.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const getStatusIcon = (status) => {
//     switch (status) {
//       case 'approved':
//         return <FaCheckCircle className="text-green-500" />;
//       case 'rejected':
//         return <FaTimesCircle className="text-red-500" />;
//       default:
//         return <FaHourglass className="text-yellow-500" />;
//     }
//   };

//   if (isLoading) {
//     return <div className="text-center text-white">Loading...</div>;
//   }

//   return (
//     <div className="mt-8">
//       <h3 className="text-2xl font-bold mb-4 text-white">Time Off Requests</h3>
//       <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-6">
//         {requests.length > 0 ? (
//           <ul className="space-y-4">
//             {requests.map((request, index) => (
//               <motion.li
//                 key={request.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//                 className="flex items-center justify-between border-b border-gray-200 pb-2"
//               >
//                 <span className="text-white">
//                   {new Date(request.startDate).toLocaleDateString()} - {new Date(request.endDate).toLocaleDateString()}
//                 </span>
//                 <span className="flex items-center text-white">
//                   {getStatusIcon(request.status)}
//                   <span className="ml-2 capitalize">{request.status}</span>
//                 </span>
//               </motion.li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-white text-center">No time off requests found.</p>
//         )}
//       </div>

//       <h3 className="text-2xl font-bold mb-4 text-white">Opted Holidays</h3>
//       <div className="bg-white bg-opacity-20 rounded-lg p-4">
//         {holidays.length > 0 ? (
//           <ul className="space-y-2">
//             {holidays.map((holiday, index) => (
//               <motion.li
//                 key={holiday.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//                 className="text-white"
//               >
//                 {new Date(holiday.date).toLocaleDateString()} - {holiday.name}
//               </motion.li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-white text-center">No opted holidays found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TimeOffStatus;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCheckCircle, FaTimesCircle, FaHourglass } from 'react-icons/fa';

const TimeOffStatus = () => {
  const [requests, setRequests] = useState([]);
  const [holidays, setHolidays] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [requestsResponse, holidaysResponse] = await Promise.all([
          axios.get('http://localhost:8080/api/time-off-requests'),
          axios.get('http://localhost:8080/api/holidays')
        ]);
        setRequests(requestsResponse.data);
        setHolidays(holidaysResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved':
        return <FaCheckCircle className="text-green-500" />;
      case 'rejected':
        return <FaTimesCircle className="text-red-500" />;
      default:
        return <FaHourglass className="text-yellow-500" />;
    }
  };

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toLocaleString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  if (isLoading) {
    return <div className="text-center text-gray-700">Loading...</div>;
  }

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Time Off Requests</h3>
      <div className="bg-gray-50 rounded-lg p-6 mb-8 shadow-md">
        {requests.length > 0 ? (
          <ul className="space-y-4">
            {requests.map((request) => (
              <li
                key={request.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 pb-4"
              >
                <div className="text-gray-700">
                  <div>{formatDateTime(request.startDateTime)}</div>
                  <div>to</div>
                  <div>{formatDateTime(request.endDateTime)}</div>
                </div>
                <span className="flex items-center text-gray-700 mt-2 sm:mt-0">
                  {getStatusIcon(request.status)}
                  <span className="ml-2 capitalize">{request.status}</span>
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700 text-center">No time off requests found.</p>
        )}
      </div>

      <h3 className="text-2xl font-bold mb-6 text-gray-800">Opted Holidays</h3>
      <div className="bg-gray-50 rounded-lg p-6 shadow-md">
        {holidays.length > 0 ? (
          <ul className="space-y-3">
            {holidays.map((holiday) => (
              <li
                key={holiday.id}
                className="text-gray-700 flex justify-between items-center"
              >
                <span>{holiday.name}</span>
                <span className="text-gray-500">{new Date(holiday.date).toLocaleDateString()}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700 text-center">No opted holidays found.</p>
        )}
      </div>
    </div>
  );
};

export default TimeOffStatus;