import { all } from 'redux-saga/effects';

import articlesWatcher from "./articles/sagas.ts";
import authWatcher from "./auth/sagas.ts";

export default function* rootSaga() {
    yield all([
        authWatcher(),
        articlesWatcher()
    ]);
}
