import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import {Provider} from 'react-redux';

import reportWebVitals from './reportWebVitals';
import "./index.css";
import router from "./routes/routes.tsx";
import { configureStore } from './store/configureStore.ts';

const App = () => (
        <React.StrictMode>
            <Provider store={configureStore}>
                <RouterProvider router={router} />
            </Provider>
        </React.StrictMode>
    );

ReactDOM.createRoot(document.getElementById("root")).render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
