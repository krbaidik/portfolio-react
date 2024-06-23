import React from "react";
import Typewriter from "typewriter-effect";
import SocialLink from "./SocialLink";

const Header = ({ data }) => {
    var name = data.name;

  return (
      <header id="header">
        <div className="container">

          <h1><a href="/">{name}</a></h1>
          <h2 className='d-flex typewriter'>I'm a passionate <var className="mx-1"><Typewriter
              options={{
                strings: data.typeWriter,
                autoStart: true,
                loop: true,
              }}
          /></var></h2>

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
