import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Enable the v7_startTransition future flag
// const future = {
//   v7_startTransition: true,
// };


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

