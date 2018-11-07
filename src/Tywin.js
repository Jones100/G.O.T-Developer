import React, { Component } from "react";
import "./Tywin.css";

class Tywin extends Component {
	constructor(props) {
		super(props);
			this.state = {
			};
	}
	render() {
		return (
			<div className="character-main-container">
				
				<div className="tywin-main-container">
					<div className="img-text-container">
						<div className="tywin-img-container">
							<div className="tywin-text-img"> </div>
						</div>
						<div className="tywin-text">
							Another sucker for the old school...These are no suckers pardon my <br></br>  English, they're as tough as they come!!
							A stern gaze and steely <br></br> manner make up   these folk...and usually loads of greys (full of <br></br> wisdom of course).
							Usually found spearheading the company - on <br></br> the board of directors or owning the joint, these guys are
							tunneled <br></br> in their vision and zealous in ambition! Although they do exercise <br></br> tradition and are quite
							intolerable to newer technologies/concepts <br></br> like React and AI, naturally preferring remote work  (as they're <br></br>
							lone wolves through and through) with a rusty desktop that does <br></br> the job. They refuse to take blame or
							extend their name <br></br> alongside percieved failures as their reputation is their world! <br></br>
							Remember to smile and be nice...we've all seen what happens to you <br></br> in the series.;
						</div>
					</div>
				</div>

			</div>
		);
	}			
}

export default Tywin;