import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import Dragon from "./Dragon";
import Profile from "./Profile";
import Littlefinger from "./Littlefinger";
import Tywin from "./Tywin";
import Brienne from "./Brienne";
import Tyrion from "./Tyrion";
import Varys from "./Varys";
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
          <Route exact path="/dragon" component={Dragon} />
          <Route exact path="/profile/:character" component={Profile} />
          <Route exact path="/littlefinger" component={Littlefinger} />
          <Route exact path="/tywin" component={Tywin} />
          <Route exact path="/brienne" component={Brienne} />
          <Route exact path="/tyrion" component={Tyrion} />
          <Route exact path="/varys" component={Varys} />
        </div>
      </Router>
    );
  }
}

export default App;
