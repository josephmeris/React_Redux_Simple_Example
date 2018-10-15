import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import './styles/styles.css';
import configureStore from './stores/configureStore';
import {Provider} from 'react-redux';

const store = configureStore();

render((
    <Provider store={store}>
        <BrowserRouter>
              <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
