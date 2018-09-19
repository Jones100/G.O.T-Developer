import React, { Component } from "react";
import "./Home.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Home extends Component {
	constructor(props) {
		super(props);
			this.state = {};
    }

	render() {
		return (
			<div className="main-container">
					<div className="main-header-container">
							<div className="main-header"> What type of developer are you?? </div>

					</div>

					<div className="character-wheel">



					</div>

			</div>
		);
	}
}

export default Home;