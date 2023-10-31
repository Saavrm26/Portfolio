import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">

        <h5>Hello I'm </h5>
        <h1>Saarthak Verma</h1>
        <h5 className="text__light">Fullstack Developer and Competitive Programmer</h5>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={Me} alt="my image" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>

      </div>
    </header>
  );
};

export default Header;