import React, { Component } from "react";
import "./Home.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Home extends Component {
	constructor(props) {
		super(props);
			this.state = {
			};
	}
		render() {
			return (
				<div className="main-container">
					
					<div className="main-header-container">
						<div className="main-header"> What type of developer are you?? </div>
					</div>
				
					<div className="main-body">
						<div className="character-wheel">
							
							<div className="img-container">
								<div className="littlefinger-img"> </div>
							</div>	
							
							<div className="middle-container">
								<div className="img-container">
									<div className="brienne-img"> </div>
								</div>	
							</div>

							<div className="img-container">
								<div className="tyrion-img"> </div>
							</div>	
							
							<div className="img-container">
								<div className="tywin-img"> </div>
							</div>	
							
							<div className="img-container">
								<div className="varys-img"> </div>
							</div>	
							
						
						
						</div>
				

					</div>
			
			</div>
		);
	}
}

export default Home;