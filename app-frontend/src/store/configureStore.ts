import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './rootReducer.ts';
import rootSaga from './rootSaga.ts';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['teams', 'devices']
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const devTools =
    process.env.NODE_ENV === 'production'
        ? applyMiddleware(sagaMiddleware)
        : composeWithDevTools(applyMiddleware(sagaMiddleware));
const configureStore = createStore(persistedReducer, {}, devTools);
const persistor = persistStore(configureStore);
export { configureStore, persistor, sagaMiddleware };

sagaMiddleware.run(rootSaga);
