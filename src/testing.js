import React, { Component } from "react";
import "./Text.css";

class Testing extends Component {
	constructor(props) {
		super(props);
			this.state = {
			};
	}
	render() {
		return ( 
			<div className="littlefinger-main-container">

				<div className="littlefinger-img-container">
					<div className="littlefinger-text-img"> </div>
				</div>
				<div className="littlefinger-text"> 
					A master manipulator of software! You have truly conquered the art of non-conformity
					and having code bend to your vision and will! The type to give textbook traditions
					the middle finger and ruthlessly banish old browsers for modern up to date ones.
					This type of developer may not sepearate their HTML and CSS content, not consider
					their fellow team-mates in keeping their code universally easy to follow and perhaps
					break all trust by relentless office back-stabbing on their climb to the top! 
					Allbeit a superb and savvy developer! 	
                </div>
			
	
			</div>
			);
	}
}

export default Testing;