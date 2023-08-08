import { createAction } from 'redux-actions';

export const articlesConstants = {
    RESET_ARTICLE: 'RESET_ARTICLE',

    GET_ARTICLES_REQUEST: 'GET_ARTICLES_REQUEST',
    GET_ARTICLES_SUCCESS: 'GET_ARTICLES_SUCCESS',
    GET_ARTICLES_FAILURE: 'GET_ARTICLES_FAILURE',

    GET_ARTICLE_REQUEST: 'GET_ARTICLE_REQUEST',
    GET_ARTICLE_SUCCESS: 'GET_ARTICLE_SUCCESS',
    GET_ARTICLE_FAILURE: 'GET_ARTICLE_FAILURE',

    GET_CATEGORIES_REQUEST: 'GET_CATEGORIES_REQUEST',
    GET_CATEGORIES_SUCCESS: 'GET_CATEGORIES_SUCCESS',
    GET_CATEGORIES_FAILURE: 'GET_CATEGORIES_FAILURE',

    GET_SOURCES_REQUEST: 'GET_SOURCES_REQUEST',
    GET_SOURCES_SUCCESS: 'GET_SOURCES_SUCCESS',
    GET_SOURCES_FAILURE: 'GET_SOURCES_FAILURE',

    HANDLE_FILTER: 'HANDLE_FILTER',
}

export const resetArticle = createAction(articlesConstants.RESET_ARTICLE);
export const handleFilterRequest = createAction(articlesConstants.HANDLE_FILTER);

export const getArticlesRequest = createAction(
    articlesConstants.GET_ARTICLES_REQUEST,
    data => data
);
export const getArticlesSuccess = createAction(
    articlesConstants.GET_ARTICLES_SUCCESS,
    data => data
);
export const getArticlesFailure = createAction(
    articlesConstants.GET_ARTICLES_FAILURE,
    errors => errors
);

export const getArticleRequest = createAction(
    articlesConstants.GET_ARTICLE_REQUEST,
    action => action
);
export const getArticleSuccess = createAction(
    articlesConstants.GET_ARTICLE_SUCCESS,
    data => data
);
export const getArticleFailure = createAction(
    articlesConstants.GET_ARTICLE_FAILURE,
    errors => errors
);

export const getCategoriesRequest = createAction(
    articlesConstants.GET_CATEGORIES_REQUEST,
    data => data
);
export const getCategoriesSuccess = createAction(
    articlesConstants.GET_CATEGORIES_SUCCESS,
    data => data
);
export const getCategoriesFailure = createAction(
    articlesConstants.GET_CATEGORIES_FAILURE,
    errors => errors
);

export const getSourcesRequest = createAction(
    articlesConstants.GET_SOURCES_REQUEST,
    data => data
);
export const getSourcesSuccess = createAction(
    articlesConstants.GET_SOURCES_SUCCESS,
    data => data
);
export const getSourcesFailure = createAction(
    articlesConstants.GET_SOURCES_FAILURE,
    errors => errors
);
