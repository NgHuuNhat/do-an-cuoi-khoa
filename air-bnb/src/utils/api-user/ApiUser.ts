import axios from "axios";

const api = axios.create({
    baseURL: "https://airbnbnew.cybersoft.edu.vn/api",
});

api.interceptors.request.use((config: any) => {
    const dataLocal = localStorage.getItem('data');
    const data = dataLocal ? JSON.parse(dataLocal) : null;

    config.headers = {
        ...config.headers,
        token: data ? data.token : "",
        tokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2MiIsIkhldEhhblN0cmluZyI6IjE3LzEwLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyOTEyMzIwMDAwMCIsIm5iZiI6MTcwMDE1NDAwMCwiZXhwIjoxNzI5MjcwODAwfQ.xKQVYYnO9233wkXRw5oU4Dtx41flqDuUnA0DbkDYRmM",
    }
    return config;
});

export default api;