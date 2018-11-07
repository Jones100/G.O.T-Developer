import React, { Component } from "react";
import "./Varys.css";

class Varys extends Component {
	constructor(props) {
		super(props);
			this.state = {
			};
	}
	render() {
		return (
			<div className="character-main-container">
				
				<div className="varys-main-container">
					<div className="img-text-container">
						<div className="varys-img-container">
							<div className="varys-text-img"> </div>
						</div>
						<div className="varys-text">
							Ohh, what an oddball indeed...these 'creatures' are found in <br></br> their lairs keenly engulfing the JavaScript secrets or
							at the rear <br></br> of web seminars intently devouring info and feeding their <br></br> bottomless thirst for knowledge -
							particularly the dark arts. <br></br> Master strategists it must be said but wierdly aberrant and <br></br> introverted. These developers
							will be alone, they prefer their <br></br> workmates to let them get on with it  and flourish in languages <br></br> such as BrainF**k and
							C++. They're not quite as recognized <br></br> for their efforts as they'd like or even deserve but their awkward <br></br> social
							display and coffee-stained ripped black hoodie are <br></br> something of a repeller. They secretly wish for a friend, a hug
							and <br></br> an 'F YOU!' to the world 'if' they rise to the top...
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Varys;
