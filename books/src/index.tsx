import './index.css';
import App from './App';
import { Provider } from "./context/books";

import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(el);

root.render(
    <Provider>
        <App />
    </Provider>
);
