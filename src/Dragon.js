import React, { Component } from "react";
import "./Dragon.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Dragon extends Component {
	constructor(props) {
		super(props);
			this.state = {
            };
            
        this.getCharacterName = this.getCharacterName.bind(this);
    }

    getCharacterName(e) {
        let getCharacterName = localStorage.getItem("characterName");
        console.log(getCharacterName);
    }

    render() {
		return (
            <div className="dragon-main-page-container">
                <div className="dragon-img-container">
                    <div className="dragon"> 
                        <div className="btn-container">
                            <button className="enter">
                                <li><Link to="/" onClick={this.getCharacterName}>
                                Enter </Link></li>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Dragon;