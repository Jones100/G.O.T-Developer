import React, { Component } from "react";
import "./Home.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {
	constructor(props) {
		super(props);
			this.state = {
			};

		this.handleIcon = this.handleIcon.bind(this);
	}

	handleIcon() {
		console.log("Hello world");
	}

	render() {
		return (
			<div className="main-container">
				
				<div className="main-header-container">
					<div className="main-header"> What type of developer are you?? </div>
				</div>
			
				<div className="main-body">
					
					<div className="character-wheel">
						
						<div className="home-littlefinger-img-container">
							<Link to="/dragon" className="littlefinger-img" onClick={this.handleIcon}> </Link>
						</div>	

						<div className="fire-container-1">
							<div className="fire-1"> </div>
							<div className="fire-2"> </div>
						</div>

						<div className="middle-container">
							<div className="home-tywin-img-container">
								<Link to="/tywin" className="tywin-img"> </Link>
							</div>

							<div className="home-brienne-img-container">
								<Link to="/brienne" className="brienne-img"> </Link>
							</div>	
						
							<div className="home-tyrion-img-container">
								<Link to="/tyrion" className="tyrion-img"> </Link>
							</div>	
						
						</div>

						<div className="fire-container-2">
							<div className="fire-3"> </div>
							<div className="fire-4"> </div>
						</div>
						
						<div className="home-varys-img-container">
							<Link to="/varys" className="varys-img"> </Link>
						</div>	
					
					</div>
			

				</div>
		
			</div>
		);
	}
}

export default Home;