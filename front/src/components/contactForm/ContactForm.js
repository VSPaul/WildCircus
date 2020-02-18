import React, { Component } from 'react';
import './ContactForm.css';
import LandingPage from '../landingPage/LandingPage';
import logo6 from '../assets/logo1.png';
import logo2 from '../assets/cortcut.png';



class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div className="circus-form-body">
                <div className="circus-form-title">
                    <img className="circus-form-logo" src={logo6} al t='circ'></img>
                    <h1>Wild Circus</h1>
                    {/* <h2>circus</h2> */}
                </div>
                <div className="circus-form-navbar">
                    <ul>
                        <li><a href="#">Performances</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Prices</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div id="container">
                    <h1>&bull; Buy ticket &bull;</h1>
                    <div className="underline">
                    </div>

                    <form action="#" method="post" id="contact_form">
                        <div className="firstname">
                            <label for="name"></label>
                            <input type="text" placeholder="My first name is" name="name" id="name_input" required />
                        </div>
                        <div className="lastname">
                            <label for="name"></label>
                            <input type="text" placeholder="My last name is" name="name" id="name_input" required />
                        </div>
                        <div className="email">
                            <label for="email"></label>
                            <input type="email" placeholder="My e-mail is" name="email" id="email_input" required />
                        </div>
                        <div className="telephone">
                            <label for="name"></label>
                            <input type="text" placeholder="My number is" name="telephone" id="telephone_input" required />
                        </div>
                        <div className="subject">
                            <label for="subject"></label>
                            <select placeholder="Subject line" name="subject" id="subject_input" required>
                                <option disabled hidden selected>Choose The mystery event</option>
                                <option>February 18 -	7:00 PM 9:30 PM</option>
                                <option>March 4 -	7:00 PM 9:30 PM</option>
                                <option>March 15 -	7:00 PM 9:30 PM</option>
                            </select>

                            <select placeholder="Subject line" name="subject" id="subject_input" required>
                                <option disabled hidden selected>Choose The number of tickets</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                            </select>
                        </div>
                        {/* <div className="message">
                            <label for="message"></label>
                            <textarea name="message" placeholder="Hi Wild Circus! I'd like to ask.." id="message_input" cols="30" rows="5" required></textarea>
                        </div> */}
                        <div className="submit">
                            <input type="submit" value="Buy the ticket" id="form_button" />
                        </div>
                    </form>

                </div >
                <img className="logo2" src={logo2} alt='circ'></img>
            </div>
        );
    }
}

export default ContactForm;