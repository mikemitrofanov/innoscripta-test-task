import { put, takeLatest, call } from 'redux-saga/effects';

import {
    getArticlesSuccess,
    getArticlesFailure,
    getArticleFailure,
    getArticleSuccess,
    articlesConstants, getCategoriesSuccess, getCategoriesFailure, getSourcesSuccess, getSourcesFailure
} from "./actions.ts";
import {articlesApi} from "./services.ts";

function* getArticlesSaga(action) {
    const { payload } = action;
    try {
        const { data } = yield articlesApi.getArticles(payload);
        yield put(getArticlesSuccess(data));
    } catch (error) {
        yield put(getArticlesFailure(error.response.status));
    }
}

function* getArticleSaga(action) {
    const { payload } = action;
    try {
        const { data } = yield articlesApi.getArticle(payload);
        yield put(getArticleSuccess(data));
    } catch (error) {
        yield put(getArticleFailure(error.response.status));
    }
}

function* getCategoriesSaga() {
    try {
        const { data } = yield articlesApi.getCategories();
        yield put(getCategoriesSuccess(data));
    } catch (error) {
        yield put(getCategoriesFailure(error.response.status));
    }
}

function* getSourcesSaga() {
    try {
        const { data } = yield articlesApi.getSources();
        yield put(getSourcesSuccess(data));
    } catch (error) {
        yield put(getSourcesFailure(error.response.status));
    }
}

export default function* articlesWatcher() {
    yield takeLatest(articlesConstants.GET_ARTICLES_REQUEST, getArticlesSaga);
    yield takeLatest(articlesConstants.HANDLE_FILTER, getArticlesSaga);
    yield takeLatest(articlesConstants.GET_ARTICLE_REQUEST, getArticleSaga);
    yield takeLatest(articlesConstants.GET_CATEGORIES_REQUEST, getCategoriesSaga);
    yield takeLatest(articlesConstants.GET_SOURCES_REQUEST, getSourcesSaga);
}