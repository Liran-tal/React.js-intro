import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App_2_1 from './2/App.2_1-hello_world';
import App_2_2 from './2/module_2_2_basics_of_jsx.jsx';
import reportWebVitals from './reportWebVitals';

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <React.StrictMode>
    <App_2_2 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
