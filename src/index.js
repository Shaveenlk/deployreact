import React from "react";
import ReactDOM from "react-dom/client";
import BookList from "./BookList"
import Iol, { Hi, Tanu } from "./Iol";
import Star from "./Star";
import Data from "./Data";
import Form from "./Form";
import Usestatebaba from "./Usestatebaba";
import Fetch from "./Fetch";
import Test from "./Test";
import Test2 from "./Test2";
import Test3 from "./Test3";
import Test31 from "./Test31";



const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
     <BookList/>
    <Iol/>
    <Hi/>
    <Tanu/>
    <Star/>
    <Data/>
    <Form/>
    <Usestatebaba/>
    <Fetch/>
    <Test/>
    <Test2/>
    <Test31/>
  </React.StrictMode>
);