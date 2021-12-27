import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './Routes/AppRouter';
import './style/style.scss'
import { store } from './redux/store';

ReactDOM.render(
  <Provider store={store}>
  <AppRouter />
  </Provider>,
  document.getElementById('root')
);
