import React, { Component } from 'react';
import './Footer.css';
import logo from '../assets/212.jpg';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div className="circus-footer">
                <div className="circus-footer-title">
                    <h1>Wild</h1>
                    <h2>circus</h2>
                    <h4>Wild Circus by <b>Vascu Paul</b></h4>
                    <h5>Wild Code School - 20.02.2020</h5>
                </div>
                <div className="footer-links">
                    <ul>
                    <li><a href="https://wildcodeschool.com" target="black">Wild Code School</a></li>
                    <li><a href="https://www.codecademy.com/users/VSPaul/achievements" target="black">Codecademy</a></li>
                    <li><a href="https://www.sololearn.com/Play/CSS" target="black">CSS SoloLearn</a></li>
                    <li><a href="https://www.sololearn.com/Play/HTML#" target="black">HTML SoloLearn</a></li>
                    </ul>
                </div>
            </div >
        );
    }
}

export default Footer;