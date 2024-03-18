import React from "react";
import "./About.css";
import ScrollCarousel from "scroll-carousel-react";
import avatar from "../res/avatar.svg";
function About() {
  return (
    <div className="wrapper" id="about">
      <div className="effect">
        <ScrollCarousel
          autoplay
          autoplaySpeed={8}
          speed={7}
          onReady={() => console.log("I am ready")}
        >
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="repeat-item">
              <p>Dattebayo! </p>
            </div>
          ))}
        </ScrollCarousel>
        <div className="intro">
          <p>
            I'm Ishant, crafting digital experiences that'll warp reality
            (figuratively, ofc, hosting fees exist). Think clean code, sleek
            design, and results that'll make your jaw drop faster than
            Orochimaru switching bodies. Let's build something epic, Dattebayo!
          </p>
        </div>
      </div>
      <div className="aboutcon">
        <div className="intro-me">
          <img src={avatar} />
          <div className="content">
            <div className="head">
              <p>
                <span>ABOUT </span>ME
              </p>
            </div>
            <div className="con">
              <p>
                Ever since I discovered the magic of code (think magical girl
                transformation, minus the sparkles), I've been on a mission to
                create websites that break the internet (but tastefully, gotta
                respect the firewalls). From front-end mastery to back-end boss
                moves, I wield my skills like a legendary weapon, ready to
                conquer any digital challenge. Don't believe me? Check out my
                portfolio, it's lit AF.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
