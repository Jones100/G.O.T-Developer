import React, { Component } from "react";
import "./App.css";
import Home from "./Home.js";
import "./Home.css";
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
        </div>
      </Router>
    );
  }
}

export default App;
