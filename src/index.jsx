import "@babel/polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "components/App/App";

import "./assets/styles/main.scss";

ReactDOM.render(
  <BrowserRouter>
    <App />  
  </BrowserRouter>, 
  document.getElementById("app")
);
