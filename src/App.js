import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import Alim from "./components/pages/Home/Alim";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/alimdev" exact component={Alim} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
