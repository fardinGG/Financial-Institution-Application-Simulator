import React from "react";
import { Button } from "../../components/common/Button";
import './styles.css';
import { Link } from "react-router-dom";




function HomePage() {
    return (
      <div className='hero-container'>
        <video src='/videos/HomeVid.mp4' autoPlay loop muted />
        <h1>T Bank Inc.</h1>
        <p>Empowering dreams, securing futures: Investing in you, Investing with you.</p>
        <div className='hero-btns'>
            <Link to='/Signup'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            GET STARTED
          </Button>
          </Link>
          <Link to='/Login'>
            <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
          >
            LOGIN
          </Button>
          </Link>
          
        </div>
      </div>
      
    );
  }
  
  export default HomePage;