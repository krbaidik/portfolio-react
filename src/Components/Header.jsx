import React from "react";
import Typewriter from "typewriter-effect";
import SocialLink from "./SocialLink";

const Header = ({ data }) => {
  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var description = data.description;
    var city = data.address.city;
  }

  return (
      <header id="header">
        <div className="container">

          <h1><a href="/">{name}</a></h1>
          <h2>I'm a passionate <span>{occupation}</span> from Nepal</h2>

          <nav id="navbar" className="navbar">
            <ul className="menu">
              <li><a className="nav-link active" href="#header">Home</a></li>
              <li><a className="nav-link" href="#about">About</a></li>
              <li><a className="nav-link" href="#resume">Resume</a></li>
              <li><a className="nav-link" href="#portfolio">Portfolio</a></li>
              <li><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          <div className="social-links">
            <SocialLink props={data.social }/>
          </div>
        </div>
      </header>
  );
};

export default Header;
