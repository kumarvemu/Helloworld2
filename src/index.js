import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// {/* <p>Hello world</p>
// const p1 = React.createElement("p", {id : "firstPara"}, "hows it going");

// const li1 = React.createElement("li", null, "first bullet");
// const li2 = React.createElement("li", null, "second bullet");
// const ul = React.createElement("ul", null, [li1, li2]);

// const ul2 = React.createElement("ul", null, [
//   React.createElement("li", null, "some content"),
//   React.createElement("li", null, "some content")
// ]);

// const myDiv = React.createElement("div", null, [p1,ul, ul2]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myDiv,document.getElementById("root")); */}

//version 2 -using JSX
// const p1 =<p>How is going</p>
// const ul = <ul className= "firstList">
//   <li>first</li>
//   <li>second</li>
// </ul>
// const myLabel= <label htmlFor ="name ">Enter your name</label>
// const myInput=< input type= "text" id="name"/>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
   <App />
 </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
