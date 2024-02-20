import React from 'react';
import App from './App';
import {store} from "./store/store";
import {Provider} from "react-redux";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);

