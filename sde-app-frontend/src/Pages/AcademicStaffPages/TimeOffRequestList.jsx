import React, { useState, useEffect } from 'react';
import { fetchAllTimeOffRequests } from '../../services/api';
import moment from 'moment';

const TimeOffRequestList = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const data = await fetchAllTimeOffRequests();
        setRequests(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch time off requests');
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Time Off Requests</h2>
      {requests.length === 0 ? (
        <p>No time off requests found.</p>
      ) : (
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Start Date</th>
              <th className="px-4 py-2">End Date</th>
              <th className="px-4 py-2">Reason</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id}>
                <td className="border px-4 py-2">{moment(request.startDateTime).format('YYYY-MM-DD HH:mm')}</td>
                <td className="border px-4 py-2">{moment(request.endDateTime).format('YYYY-MM-DD HH:mm')}</td>
                <td className="border px-4 py-2">{request.reason}</td>
                <td className="border px-4 py-2">{request.status || 'Pending'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TimeOffRequestList;