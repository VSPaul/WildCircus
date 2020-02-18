
import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/landingPage/LandingPage.js'
import Footer from './components/footer/Footer';
import ContactForm from './components/contactForm/ContactForm';
import Body from './components/body/Body';
import PricesTable from './components/pricesTable/PricesTable';
import logo from './components/assets/cortcut.png';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {
    return (
      <div>
        <div>
          <LandingPage />
        </div>
        <div className="corp">
          {/* <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> */}
          <Body/>
          <PricesTable/>

          {/* <ContactForm/> */}
          {/* <img className="logo" src={logo} alt='circ'></img> */}
          
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
        </div>
        <div className="footer">
        <img className="logo" src={logo} alt='circ'></img>
        <Footer/>
        </div>
      </div>

    )
  }
}

export default App;