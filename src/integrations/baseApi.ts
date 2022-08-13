import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";
import { BASE_URL } from "../settings";

export const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

AxiosInstance.interceptors.response.use(
  async (response: AxiosResponse) => {
    return response;
  },
  (err: AxiosError) => {
    return Promise.reject(err.message);
  }
);

AxiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },

  (error: any) => Promise.reject(error)
);
