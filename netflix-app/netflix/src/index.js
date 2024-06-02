import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import user1Pref from './userPref';
import reportWebVitals from './reportWebVitals';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Passing in user objects */}
    <App user={user1Pref} />

  </React.StrictMode>
);


reportWebVitals();
