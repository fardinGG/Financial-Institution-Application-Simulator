import React from "react";
import './navbar.css';


function NavigationB () {
  return (
    <header className="header">
        <a href='/' className="logo">T Bank Inc.</a>
        <nav className="navbar">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Services</a>
            <a href="/">Contact</a>

        </nav>

    </header>
  );
}

export default NavigationB;
