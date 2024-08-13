// import axios from 'axios';

// const BASE_URL = 'http://localhost:7770/api';

// const api = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     'Authorization': `Bearer ${localStorage.getItem('token')}`
//   }
// });

// export const fetchEvents = async (isPublic = true) => {
//   const response = await api.get('/events', { params: { isPublic } });
//   return response.data;
// };

// export const fetchTasks = async () => {
//   const response = await api.get('/tasks');
//   return response.data;
// };

// export const updateTaskStatus = async (taskId, status) => {
//   const response = await api.patch(`/tasks/${taskId}`, { status });
//   return response.data;
// };

// export const submitTimeOffRequest = async (requestData) => {
//   const response = await api.post('/timeoff/submit`', requestData);
//   return response.data;
// };

// export default api;

import axios from 'axios';

const BASE_URL = 'http://localhost:7770/api';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Add a request interceptor to set the Authorization header dynamically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export const fetchEvents = async (isPublic = true) => {
  try {
    const response = await api.get('/events', { params: { isPublic } });
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error.response || error);
    throw error;
  }
};

export const fetchTasks = async () => {
  try {
    const response = await api.get('/tasks');
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error.response || error);
    throw error;
  }
};

export const updateTaskStatus = async (taskId, status) => {
  try {
    const response = await api.patch(`/tasks/${taskId}`, { status });
    return response.data;
  } catch (error) {
    console.error('Error updating task status:', error.response || error);
    throw error;
  }
};

export const submitTimeOffRequest = async (requestData) => {
  try {
    console.log('Submitting time off request:', requestData);
    const response = await api.post('/timeoff/submit', requestData);
    console.log('Time off request submitted successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error submitting time off request:', error.response || error);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
      console.error('Response headers:', error.response.headers);
    }
    throw error;
  }
};

export const fetchAllTimeOffRequests = async () => {
  try {
    const response = await api.get('/timeoff/all');
    return response.data;
  } catch (error) {
    console.error('Error fetching time off requests:', error.response || error);
    throw error;
  }
};

export default api;