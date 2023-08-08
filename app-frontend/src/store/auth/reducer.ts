import {authConstants} from "./actions.ts";

const initialState = {
    loading: false,
    error: false,

    user: {},
}

export function auth(state = initialState, action) {
    switch (action.type) {
        case authConstants.LOG_OUT: {
            window.localStorage.removeItem('token');
            return { ...state, user: {} };
        }

        case authConstants.SIGN_IN_REQUEST:
        case authConstants.SIGN_UP_REQUEST:
        case authConstants.GET_PROFILE_REQUEST:
            return { ...state, loading: true };

        case authConstants.SIGN_IN_SUCCESS:
        case authConstants.SIGN_UP_SUCCESS:
            return { ...state, loading: false, user: action.payload.user };

        case authConstants.GET_PROFILE_SUCCESS:
            return { ...state, loading: false, user: action.payload };

        case authConstants.SIGN_IN_FAILURE:
        case authConstants.SIGN_UP_FAILURE:
        case authConstants.GET_PROFILE_FAILURE:
            return {...state, loading: false, error: action.payload}

        default:
            return state;
    }

}