import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage";
import { JobDescription } from "./components/JobDescription/JobDescription";
import "./design/style.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/job/:id" exact component={JobDescription} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
