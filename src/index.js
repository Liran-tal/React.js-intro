import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App_2_1 from './2/App.2_1-hello_world';
// import module_2_2 from './2/module_2_2_basics_of_jsx.jsx';
// import Module_3_1 from './3/3_1/module_3_1_boxes.jsx';
// import App from './3/3_2/App.js';
// import App from './4/4.1/App';
// import App from './4/4.2/App';
// import App from './6/App';
// import App from './7/7.2/App';
// import App from './7/7.3/App';
// import App from './components/8/8.1/App.js';
// import App from './components/8/8.2/App.js';
// import App from './components/8/8.3/App.js';
// import App from './components/11/11.1/ChildToParent.js';
// import App from './components/11/11.2/App11.2.js';
// import App from './components/11/11.3/Form11.3.js';
// import App from './components/12/ChuckNorisAPI-12.1';
import App from './components/13/13.2/AvatarsMainPage.jsx';


import reportWebVitals from './reportWebVitals';

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
