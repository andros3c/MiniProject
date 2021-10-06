import "./App.css";
import Home from "./component/Home";
import Menu from "./component/Menu";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./component/Header";
import Reservation from"./component/Reservation"
import ScrollHandler from "./component/ScrollHandler";

function App() {
  return (
    <div>
      <BrowserRouter>
      <ScrollHandler/>
      <Header/>
       <Home/>
      </BrowserRouter>
    </div>
  );
}

export default App;
