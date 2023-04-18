import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // React.StrictMode causes double rendering of components which lead to useEffect being called multiple times.
  <App />
);