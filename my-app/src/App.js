import React from "react";
import { Route } from "react-router-dom";
import { Form } from "./Form";
import { Menu } from "./Menu";
import { News } from "./News";
import './App.css'

function App() {
  return (
    <div className="app">
      <Menu />
      <Route path="/form" component={Form} />
      <Route path="/news" component={News} />
    </div>
  );
}

export default App;
