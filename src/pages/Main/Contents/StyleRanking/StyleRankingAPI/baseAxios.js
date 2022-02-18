import axios from 'axios';

const request = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  timeout: 5000,
});

request.interceptors.response.use(
  response => {
    const res = response.data;
    return res;
  },
  error => {
    return Promise.reject(error);
  }
);

export default request;
