import React, { Component } from "react";
import "./Tyrion.css";

class Tyrion extends Component {
	constructor(props) {
		super(props);
			this.state = {
			};
	}
    render() {
		return ( 
			<div className="character-main-container">
				
				<div className="tyrion-main-container">
					<div className="img-text-container">
						<div className="tyrion-img-container">
							<div className="tyrion-text-img"> </div>
						</div>
						<div className="tyrion-text">
							The epitome of creativity, uniqueness and sheer brilliance! This confident character knows all the tricks!
							A terrific salesman - particularly of self, <br></br> they shine bright and are proud people. They know their value
							and <br></br> won't accept a penny less for their efforts. Always on the hustle and <br></br> look out for the next role (be
							it with their current employer or another) <br></br> they make machine learning and languages such as Malbolge look <br></br>
							adequate for toddlers! This developer is quick to share their knowledge <br></br> on Stack Overflow and other forums
							and eager to adopt a junior <br></br> (tending to love the sound of their own voices). Ohhh, they're <br></br> also creating
							their own software...
							Hail Tyrion!
						</div>
					</div>
				</div>
				
			</div>
		);
    }
}

export default Tyrion;