import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
// import App2 from './App2';
// import App3 from './App3';
// import Todo from './Todo';
// import App4 from './App4'
// import App5 from './App5'
import { BrowserRouter } from 'react-router-dom';
import App6 from './App6'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <BrowserRouter>
    {/* <App2 /> */}
    {/* <App3/> */}
    {/* <Todo/> */}
    {/* <App4/> */}
    {/* <App5></App5> */}
    <App6></App6>
  </BrowserRouter>
);

