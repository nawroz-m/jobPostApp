import { DevURL } from "./url";
import axios from "axios";
// import Firebase from "firebase";

// import config from "../services/user/config";

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default {
  post: (url, data) => {
    return axios.post(`${DevURL}/${url}`, data);
  },

  get: (url) => {
    return axios.get(`${DevURL}/${url}`);
  },
};
