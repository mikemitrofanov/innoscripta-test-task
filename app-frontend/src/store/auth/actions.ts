import { createAction } from 'redux-actions';

export const authConstants = {
    GET_CSRF: 'GET_CSRF',

    SIGN_IN_REQUEST: 'SIGN_IN_REQUEST',
    SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
    SIGN_IN_FAILURE: 'SIGN_IN_FAILURE',

    SIGN_UP_REQUEST: 'SIGN_UP_REQUEST',
    SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
    SIGN_UP_FAILURE: 'SIGN_UP_FAILURE',

    GET_PROFILE_REQUEST: 'GET_PROFILE_REQUEST',
    GET_PROFILE_SUCCESS: 'GET_PROFILE_SUCCESS',
    GET_PROFILE_FAILURE: 'GET_PROFILE_FAILURE',

    LOG_OUT: 'LOG_OUT',
}

export const signInRequest = createAction(
    authConstants.SIGN_IN_REQUEST,
    data => data
);
export const signInSuccess = createAction(
    authConstants.SIGN_IN_SUCCESS,
    data => data
);
export const signInFailure = createAction(
    authConstants.SIGN_IN_FAILURE,
    errors => errors
);

export const signUpRequest = createAction(
    authConstants.SIGN_UP_REQUEST,
    data => data
);
export const signUpSuccess = createAction(
    authConstants.SIGN_UP_SUCCESS,
    data => data
);
export const signUpFailure = createAction(
    authConstants.SIGN_UP_FAILURE,
    errors => errors
);

export const getProfileRequest = createAction(
    authConstants.GET_PROFILE_REQUEST,
    data => data
);
export const getProfileSuccess = createAction(
    authConstants.GET_PROFILE_SUCCESS,
    data => data
);
export const getProfileFailure = createAction(
    authConstants.GET_PROFILE_FAILURE,
    errors => errors
);

export const logOut = createAction(authConstants.LOG_OUT);
export const getCsrf = createAction(authConstants.GET_CSRF);