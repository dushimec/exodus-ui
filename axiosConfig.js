import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({

  baseURL: import.meta.env.VITE_API_URL,
  timeout: 30000,


});

api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("Unauthorized! Redirecting to login...");

      Cookies.remove("token");

      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
