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
		return (
            <div className="dragon-main-page-container">
                <div className="dragon-img-container">
                    <div className="dragon"> 
                        <div className="btn-container">
                            <button className="enter">
                                <li><Link to="/"> Enter </Link></li>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Dragon;