import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

api.interceptors.request.use((config)=> {
    if(localStorage.getItem("AUTH_TOKEN")){
        config.headers.Authorization = `Bearer ${localStorage.getItem("AUTH_TOKEN")}`
    }
    return config
})

export default api