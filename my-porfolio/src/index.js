import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./assets/App";
import Header from "./assets/Header";
import Footer from "./assets/Footer";

ReactDOM.render([<Header />, <App />, <Footer />], document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
// window.onscroll = function() {myFunction()};

// // var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }
