import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';

ReactDOM.render(
  <BrowserRouter basename="/GoItReact-04-1">
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);