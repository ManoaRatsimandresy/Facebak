import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://[::1]:8080/",
  withCredentials: true,
});
