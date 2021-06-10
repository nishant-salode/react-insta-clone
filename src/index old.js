import React from 'react';
import ReactDOM from 'react-dom';

// const arr = [<span>a</span>,
//       <strike>b</strike>,
//       <p>S</p>];

const fName = "Nishant";

ReactDOM.render(
  // <React.Fragment>
  <>
    <h1 style={{color:'red'}}>Hello World1</h1>
    <div>Mr. {fName} {new Date().getDate()}</div>
    </>
    // </React.Fragment>
  //  arr
  
,document.getElementById('root')  
);
// ReactDOM.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello2 World1")), document.getElementById('root'));
 




































// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
