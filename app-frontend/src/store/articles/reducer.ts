import {articlesConstants} from "./actions.ts";

const initialState = {
    loading: false,
    error: false,

    filter: {
        search: null,
        source: null,
        category: null,
        sortBy: null,
        sortDir: null,
    },

    articles: {
        current_page: 0,
        last_page: 0,
        data: [],
        total: 0,
    },

    sources: [],
    categories: [],

    article: {},
}

export function articles(state = initialState, action) {
    switch (action.type) {
        case articlesConstants.RESET_ARTICLE:
            return {...state, article: {}};

        case articlesConstants.HANDLE_FILTER:
            return {
                ...state,
                filter: {
                    search: action.payload.search ?? state.filter.search,
                    sortBy: action.payload.sortBy ?? state.filter.sortBy,
                    sortDir: action.payload.sortDir ?? state.filter.sortDir,
                }
            }

        case articlesConstants.GET_ARTICLES_REQUEST:
        case articlesConstants.GET_ARTICLE_REQUEST:
        case articlesConstants.GET_CATEGORIES_REQUEST:
        case articlesConstants.GET_SOURCES_REQUEST:
            return {...state, loading: true};

        case articlesConstants.GET_ARTICLES_SUCCESS:
            return { ...state, loading: false, articles: action.payload }
        case articlesConstants.GET_ARTICLE_SUCCESS:
            return { ...state, loading: false, article: action.payload }
        case articlesConstants.GET_CATEGORIES_SUCCESS:
            return { ...state, loading: false, categories: action.payload }
        case articlesConstants.GET_SOURCES_SUCCESS:
            return { ...state, loading: false, sources: action.payload }

        case articlesConstants.GET_ARTICLES_FAILURE:
        case articlesConstants.GET_ARTICLE_FAILURE:
        case articlesConstants.GET_CATEGORIES_FAILURE:
        case articlesConstants.GET_SOURCES_FAILURE:
            return {...state, loading: false, error: action.payload}

        default:
            return state;
    }
}