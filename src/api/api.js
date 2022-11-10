import { DevURL, URL } from "./url";
import axios from "axios";
import { LOCALSTORAGECONSTANT } from "../constant/cons";
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

  postWithToken: (url, data) => {
    return axios({
      method: "post",
      data: data,
      url: `${URL}/${url}`,
      headers: {
        authorization: localStorage.getItem(LOCALSTORAGECONSTANT.USERID),
      },
    });
  },

  get: (url) => {
    return axios.get(`${DevURL}/${url}`);
  },
};
