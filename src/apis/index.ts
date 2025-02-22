import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 1000 * 30,
});

instance.interceptors.request.use(
  (res) => res,
  (err) => err
);

instance.interceptors.response.use(
  (res) => res,
  (err) => err
);
