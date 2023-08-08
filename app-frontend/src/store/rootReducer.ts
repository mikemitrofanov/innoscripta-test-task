import { combineReducers } from 'redux';

import { articles } from './articles/reducer.ts';
import { auth } from "./auth/reducer.ts";

export const rootReducer = combineReducers({
    auth,
    articles
});
