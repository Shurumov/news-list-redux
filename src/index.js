import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';

import {store} from 'store';
import { init } from 'utils/api';
import config from 'config';

import 'styles/index.scss'
import 'antd/dist/antd.css';
const { API_DOMAIN } = config;

let API_URL = `${API_DOMAIN}`;

init({store, API_URL});
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));
