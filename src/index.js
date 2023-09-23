import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import store from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <App />
    </Provider>
);

// Redux Toolkit: is allow us to write lot less code to achieve the exact same result as before.
// So we say that we need a lot less boiler plate code.
// 3 best advantages:
// a. We can write code that mutates state inside reducers.
// b. Action Creators are automatically created
// c. Automatically setup of thunk middleware and devTools.
