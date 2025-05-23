import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_API_URL}/api`
})

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.get('ACCESS_TOKEN')
    config.headers.Authorization = `Bearer ${token}`
    return config;
})

axiosClient.interceptors.response.use((response) => {
    return response;
}, (error) => {
    const {response} = error;
    if (response.status === 401) {
        localStorage.remove('ACCESS_TOKEN')
    }
    throw error;
})

export default axiosClient;