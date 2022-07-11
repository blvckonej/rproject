import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const elem = (
  <div>
    <h2>Hello World! My name is Maxim</h2>
    <input type="text" />
    <button/>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
