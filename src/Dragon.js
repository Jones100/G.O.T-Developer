import React, { Component } from "react";
import "./Dragon.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Dragon extends Component {
	constructor(props) {
		super(props);
			this.state = {
            };
            
        this.displayCharacterProfile = this.displayCharacterProfile.bind(this);
    }

    displayCharacterProfile() {
        let getCharacterName = localStorage.getItem("characterName");
        
        if(getCharacterName == "littlefinger") {
            console.log("the climb is all there is");
            // <Link to="/littlefinger"></Link>
        }
    }

    render() {
		return (
            <div className="dragon-main-page-container">

                <div className="dragon-img-container">
                    <div className="dragon"> 
                        <div className="btn-container">
                            <button className="enter" onClick={this.displayCharacterProfile}> Enter </button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Dragon;