import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Responsive.css';
import './i18n/index.js';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);