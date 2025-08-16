import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
});

axiosInstance.interceptors.request.use(
  (config) => {
    // const accessToken = JSON.parse(sessionStorage.getItem("accessToken")) || "";

    const admin_jwtToken = sessionStorage.getItem("admin-jwtToken");
    const customer_jwtToken = sessionStorage.getItem("customer-jwtToken");
    const mentor_jwtToken = sessionStorage.getItem("mentor-jwtToken");

    const accessToken = admin_jwtToken || customer_jwtToken || mentor_jwtToken || "";

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (err) => Promise.reject(err)
);

export default axiosInstance;
