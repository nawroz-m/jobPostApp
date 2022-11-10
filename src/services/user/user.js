import api from "../../api/api";
import * as url from "../../api/url";

export const signupUser = async (data) => {
  try {
    const response = await api.post(url.signup, data);
    return response;
  } catch (e) {
    return e;
  }
};

export const signinUser = async (data) => {
  try {
    const response = await api.post(url.signin, data);
    return response;
  } catch (e) {
    return e;
  }
};

export const postNewJob = async (data) => {
  try {
    const response = await api.post(url.postajob, data);

    return response;
  } catch (e) {
    return e;
  }
};

export const getAllJobs = async () => {
  try {
    const response = await api.get(url.getalljobs);

    return response;
  } catch (e) {
    return e;
  }
};

export const applyJob = async (data) => {
  try {
    const response = await api.postWithToken(url.applyJob, data);

    return response;
  } catch (e) {
    return e;
  }
};

export const getJobById = async (id) => {
  try {
    const response = await api.get(`${url.getalljobs}?id=${id}`);
    return response;
  } catch (e) {
    return e;
  }
};
