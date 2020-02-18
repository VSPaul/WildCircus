import React, { Component } from 'react';
import './LandingPage.css';
import logo from '../assets/logo1.png';


class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div className="circus-body">

                <div className="circus-title">
                    <img className="circus-logo" src={logo} al t='circ'></img>
                    <h1>Wild Circus</h1>
                    {/* <h2>circus</h2> */}
                </div>

                <div className="circus-navbar">
                    <ul>
                        <li><a href="#">Performances</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Prices</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

            </div >
        );
    }
}

export default LandingPage;