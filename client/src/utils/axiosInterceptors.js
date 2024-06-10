import axios from "axios";

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

// Add request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Add token to request headers
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Handle request error
    return Promise.reject(error);
  }
);

// Add response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    console.log("interceptor response", response);
    // Handle response data
    return response;
  },
  function (error) {
    console.log("interceptor error", error);
    // Handle response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
