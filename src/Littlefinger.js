import React, { Component } from "react";
import "./Littlefinger.css";

class Littlefinger extends Component {
	constructor(props) {
		super(props);
			this.state = {
			};
	}
    render() {
		return (
			<div className="littlefinger-master-container">

				<div className="littlefinger-main-container">
					<div className="img-text-container">
						<div className="littlefinger-img-container">
							<div className="littlefinger-text-img"> </div>
						</div>
						<div className="littlefinger-text">
							A master manipulator of software! You have truly <br></br> conquered the art of non-conformity
							and having code <br></br> bend to your vision and will! The type to give textbook <br></br> traditions
							the middle finger and ruthlessly banish old <br></br> browsers for modern up to date ones.
							This type of <br></br> developer may not sepearate their HTML and CSS <br></br> content, not consider
							their fellow team-mates in <br></br> keeping their code universally easy to follow and <br></br> perhaps
							break all trust by relentless office <br></br> back-stabbing on their 'climb' to the top! <br></br>
							Allbeit a superb and savvy developer!
						</div>
					</div>
				</div>

			</div>

        );
    }
}

export default Littlefinger;