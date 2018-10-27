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
			<div className="character-main-container">
				
				<div className="img-text-container">
					<div className="littlefinger-img-container">
						<div className="littlefinger-text-img"> </div>
					</div>
					<div className="littlefinger-text"> 
						A master manipulator of software! You have truly conquered <br></br> the art of non-conformity
						and having code bend to your <br></br> vision and will! The type to give textbook traditions
						the <br></br> middle finger and ruthlessly banish old browsers for <br></br> modern up to date ones.
						This type of developer may not <br></br> sepearate their HTML and CSS content, not consider
						<br></br> their fellow team-mates in keeping their code universally <br></br> easy to follow and perhaps
						break all trust by relentless <br></br> office back-stabbing on their 'climb' to the top! <br></br>
						Allbeit a superb and savvy developer! 
					</div>
				</div>

				<div className="img-text-container">
					<div className="tywin-img-container">
						<div className="tywin-text-img"> </div>
					</div>
					<div className="tywin-text"> 
						Another sucker for the old school...These are no suckers pardon my English, they're as tough as they come!!
						A stern gaze and steely manner make up these folk...and usually loads of greys (full of wisdom of course). 
						Usually found spearheading the company - on the board of directors or owning the joint, these guys are
						tunneled in their vision and zealous in ambition! Although they do exercise tradition and are quite
						intolerable to newer technologies/concepts like React and AI, naturally preferring remote work (as they're
						lone wolves through and through) with a rusty desktop that does the job. They refuse to take blame or
						extend their name alongside percieved failures as their reputation is their world! 
						Remember to smile and be nice...we've all what happens to you in the series :-);
					</div>
				</div>
			
				<div className="img-text-container">
					<div className="brienne-img-container"> </div>
						<div className="brienne-text-img"> 
					</div>
					<div className="brienne-text"> 
						Enter Brienne...protector of the laws of web development, loyal to their teammates almost to a fault,
						unwavering in their bold and rigid path to serve humanity and deliver clean, tried and tested code!
						They prefer Java to JavaScript cause of it's strict and set structure, untrusting of any new technology, 
						opting to stick to HTML 3.0 and Bootstrap 2.0! They more or less breathe depreciation! They are however
						great in their chosen fields - whether it's client-side, server-side, full-stack etc and will get the 
						job done! Even if it is a blast from the past and takes 40 lines of definite, solidified code rather 
						than 20 slighly looser lines :-);
					</div>
				</div>
			
				<div className="img-text-container">
					<div className="tyrion-img-container">
						<div className="tyrion-text-img"> </div>
					</div>
					<div className="tyrion-text"> 
						The epitome of creativity, uniqueness and sheer brilliance! This confident character knows all the tricks!
						A terrific salesman - particularly of self, they shine bright and are proud people. They know their value 
						and won't accept a penny less for their efforts. Always on the hustle and look out for the next role (be 
						it with their current employer or another) they make machine learning and languages such as Malbolge look
						adequate for toddlers! This developer is quick to share their knowledge on Stack Overflow and other forums 
						and eager to adopt a junior (tending to love the sound of their own voices). Ohhh, they're also creating
						their own software... 
						Hail Tyrion!
					</div>
				</div>

				<div className="img-text-container">
					<div className="varys-img-container">
						<div className="varys-text-img"> </div>
					</div>
					<div className="varys-text"> 
						Ohh, what an oddball indeed...these 'creatures' are found in their lairs keenly engulfing the JavaScript secrets or
						at the rear of web seminars intently devouring info and feeding their bottomless thirst for knowledge - 
						particularly the dark arts. Master strategists it must be said but wierdly aberrant and introverted. These developers
						will be alone, they prefer their workmates to let them get on with it and flourish in languages such as BrainF**k and
						C++. They're not quite as recognized for their efforts as they'd like or even deserve but their awkward social
						display and coffee-stained ripped black hoodie are something of a repeller. They secretly wish for a friend, a hug
						and an 'F YOU!' to the world 'if' they rise to the top...
					</div>
				</div>
			
			</div>
			);
	}
}

export default Testing;