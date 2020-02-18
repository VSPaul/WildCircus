import React, { Component } from 'react';
import LandingPage from '../landingPage/LandingPage.js'
import Footer from '../footer/Footer';
import ContactForm from '../contactForm/ContactForm';
import Body from '../body/Body';
import PricesTable from '../pricesTable/PricesTable';
import logo from '../assets/cortcut.png';

import { BrowserRouter, Switch, Route } from 'react-router-dom';




class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
            <div>

                <LandingPage />
                <Body />
                <PricesTable />
                
                <div className="footer">
                    <img className="logo" src={logo} alt='circ'></img>
                    <Footer />
                </div>

            </div>


        )
    }
}

export default MainPage;