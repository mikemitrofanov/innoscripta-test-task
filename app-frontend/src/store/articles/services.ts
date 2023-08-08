import axios from '../../utils/axios.ts';

const getArticles = (data) => {
    // const o = Object.entries(data).filter(([_, v]) => v != null) as string[][];
    const params = data ? new URLSearchParams(data).toString() : '';
    return axios.get(`/api/articles?${params}`);
};

const getArticle = id => axios.get(`/api/articles/${id}`);

const getSources = () => axios.get('/api/sources');

const getCategories = () => axios.get('/api/categories');

export const articlesApi = {
    getArticles,
    getArticle,
    getSources,
    getCategories
};