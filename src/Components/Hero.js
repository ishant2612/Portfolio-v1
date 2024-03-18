import React from "react";
import "./Hero.css";
import bg from "../res/bg.png";
function Hero() {
  const handleNavClick = (navItem) => {
    const element = document.getElementById(navItem);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="hero">
      <div className="herocon">
        <div className="para">
          <p>
            Your Website's <span>Next Evolution</span>
          </p>
        </div>
        <div className="smallpara">
          <p>Web Dev with Skills Sharper Than Sasuke's Sharingan</p>
        </div>
        <button onClick={() => handleNavClick("about")}>Explore</button>
      </div>
    </div>
  );
}

export default Hero;
