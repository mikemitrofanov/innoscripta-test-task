import axios from 'axios';

export const getToken = () => window.localStorage.getItem('token');

axios.defaults.withCredentials = true;
axios.defaults.headers.common.Authorization = 'Bearer ' + getToken();

axios.defaults.baseURL = 'http://localhost:8000';

axios.interceptors.request.use(req => {
    req.headers['Authorization'] = 'Bearer ' + getToken();

    return req;
});

axios.interceptors.response.use(
    res => res,
    error => {
        throw error;
    }
);

export default axios;
