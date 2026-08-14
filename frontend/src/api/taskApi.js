import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const taskApi = {
  getAllTasks: () => api.get('/api/tasks'),
  getTaskById: (id) => api.get(`/api/tasks/${id}`),
  createTask: (task) => api.post('/api/tasks', task),
  updateTask: (id, task) => api.put(`/api/tasks/${id}`, task),
  completeTask: (id) => api.patch(`/api/tasks/${id}/complete`),
  deleteTask: (id) => api.delete(`/api/tasks/${id}`),
};

export default api;
