import React from "react";
import { useState, useEffect, useRef } from "react";

import "./Header.css";
function Header({ scrollPos }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [activeNavItem, setActiveNavItem] = useState("about");
  const navRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = scrollPos;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPos, prevScrollPos]);

  const handleNavClick = (navItem) => {
    setActiveNavItem(navItem);
    const element = document.getElementById(navItem);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={`nav ${visible ? "nav--visible" : "nav--hidden"}`}>
      <div className="logo">
        <svg
          width="63"
          height="44"
          viewBox="0 0 63 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_0_16)">
            <path d="M13.76 0H0V43.4H13.76V0Z" fill="white" />
            <path d="M31.77 15.15L18.01 35.71V0H31.77V15.15Z" fill="#B52431" />
            <path
              d="M62.49 0L34.08 43.4H18.42L32.44 22.01L36.4 16.09L46.83 0H62.49Z"
              fill="#B52431"
            />
          </g>
          <defs>
            <clipPath id="clip0_0_16">
              <rect width="62.49" height="43.4" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="navcon">
        <div className="direct">
          <p
            onClick={() => handleNavClick("about")}
            className={activeNavItem === "about" ? "active" : ""}
          >
            About
          </p>
          <p
            onClick={() => handleNavClick("work")}
            className={activeNavItem === "work" ? "active" : ""}
          >
            Work
          </p>
          <p
            onClick={() => handleNavClick("skills")}
            className={activeNavItem === "skills" ? "active" : ""}
          >
            Skills
          </p>
        </div>
        <button onClick={() => handleNavClick("contact")}>CONTACT</button>
      </div>
    </div>
  );
}

export default Header;
