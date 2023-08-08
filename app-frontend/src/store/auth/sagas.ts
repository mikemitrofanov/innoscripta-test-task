import { put, takeLatest, call } from 'redux-saga/effects';

import {
    signInFailure,
    signUpFailure,
    signUpSuccess,
    authConstants,
    signInSuccess, getProfileSuccess, getProfileFailure,
} from "./actions.ts";
import {authApi} from "./services.ts";

function* signInSaga(action) {
    const { payload } = action;
    try {
        const { data } = yield authApi.signIn(payload);
        const { token } = data;
        if (token) window.localStorage.setItem('token', token);
        yield put(signInSuccess(data));
    } catch (error) {
        yield put(signInFailure(error.response.status));
    }
}

function* signUpSaga(action) {
    const { payload } = action;
    try {
        const { data } = yield authApi.signUp(payload);
        const { token } = data;
        if (token) window.localStorage.setItem('token', token);
        yield put(signUpSuccess(data));
    } catch (error) {
        yield put(signUpFailure(error.response.status));
    }
}

function* profileSaga() {
    try {
        const { data } = yield authApi.profile();
        yield put(getProfileSuccess(data));
    } catch (error) {
        yield put(getProfileFailure(error.response.status));
    }
}

function* getCsrfSaga() {
    try {
        yield authApi.getCsrf();
    } catch (error) {}
}

export default function* authWatcher() {
    yield takeLatest(authConstants.SIGN_IN_REQUEST, signInSaga);
    yield takeLatest(authConstants.SIGN_UP_REQUEST, signUpSaga);
    yield takeLatest(authConstants.GET_PROFILE_REQUEST, profileSaga);
    yield takeLatest(authConstants.GET_CSRF, getCsrfSaga);
}