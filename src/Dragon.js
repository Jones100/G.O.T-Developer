import React, { Component } from "react";
import "./Dragon.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Dragon extends Component {
	constructor(props) {
		super(props);
			this.state = {
            };
    }
    render() {
        let getCharacterName = localStorage.getItem("characterName");
		return (
            <div className="dragon-main-page-container">

                <div className="dragon-img-container">
                    <div className="dragon" onClick={this.scaleDragon}> 
                        <div className="btn-container">
                            <button className="enter"> <Link to={"/" + getCharacterName}> 
                            Enter </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Dragon;