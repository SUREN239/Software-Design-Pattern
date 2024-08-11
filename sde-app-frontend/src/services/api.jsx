import axios from 'axios';

const BASE_URL = 'http://localhost:7770/api';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});

export const fetchEvents = async (isPublic = true) => {
  const response = await api.get('/events', { params: { isPublic } });
  return response.data;
};

export const fetchTasks = async () => {
  const response = await api.get('/tasks');
  return response.data;
};

export const updateTaskStatus = async (taskId, status) => {
  const response = await api.patch(`/tasks/${taskId}`, { status });
  return response.data;
};

export const submitTimeOffRequest = async (requestData) => {
  const response = await api.post('/time-off-requests', requestData);
  return response.data;
};

export default api;