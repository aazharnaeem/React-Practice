import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContextProvider from './context/userContext';
import NewContextProvider from './context/userContRed';

ReactDOM.render(
  <React.StrictMode>
    <NewContextProvider>
      {/* <ContextProvider> */}
      <App />
      {/* </ContextProvider> */}
    </NewContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();