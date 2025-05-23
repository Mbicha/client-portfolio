import axios from "axios";

// Determine base URL based on environment
const baseURL = 'https://portfolio-backend-tco5.onrender.com/api';

const api = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 70000
});

// Request interceptor
api.interceptors.request.use(config => {
    const token = sessionStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// Response interceptor for error handling
api.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            sessionStorage.removeItem("token");
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default api;
