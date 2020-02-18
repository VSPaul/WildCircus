
import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/landingPage/LandingPage.js'
import Footer from './components/footer/Footer';
import ContactForm from './components/contactForm/ContactForm';
import Body from './components/body/Body';
import PricesTable from './components/pricesTable/PricesTable';
import logo from './components/assets/cortcut.png';
import MainPage from './components/mainPage/MainPage'

import { BrowserRouter, Switch, Route } from 'react-router-dom';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {
    return (
      <div>



        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MainPage} home={true} />
            <Route path="/buyticket" component={ContactForm} home={true} />
          </Switch>
        </BrowserRouter>


        {/* <div className="footer">
          <img className="logo" src={logo} alt='circ'></img>
          <Footer />
        </div> */}
      </div>




    )
  }
}

export default App;