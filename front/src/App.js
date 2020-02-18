
import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/landingPage/LandingPage.js'
import Footer from './components/footer/Footer';
import logo from './components/assets/2.png'
import ContactForm from './components/contactForm/ContactForm'


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
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
          <ContactForm/>
          {/* <img className="logo" src={logo} alt='circ'></img> */}
        </div>
        <div className="footer">
        {/* <Footer/> */}
        </div>
      </div>

    )
  }
}

export default App;