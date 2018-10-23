import React, { Component } from "react";
import "./App.css";
import Home from "./Home.js";
import "./Home.css";
import "./Text.css";
import Testing from "./testing.js";
import Littlefinger from "./Littlefinger.js";
import Brienne from "./Brienne.js";
import Tyrion from "./Tyrion.js";
import Tywin from "./Tywin.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={Home} />
          <Route exact path="/testing" component={Testing} />
        </div>
      </Router>
    );
  }
}

export default App;
