import axios from '../../utils/axios.ts';

const getCsrf = () => axios.get('/sanctum/csrf-cookie');

const signIn = data => axios.post('/api/login', data);

const signUp = data => axios.post('/api/register', data);

const profile = () => axios.get('/api/profile');

export const authApi = {
    getCsrf,
    signIn,
    signUp,
    profile
};