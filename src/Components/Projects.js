import React from "react";
import "./Projects.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import yt from "../res/projects ss/yt_clone.png";
import rt from "../res/projects ss/rttask.png";
import mg from "../res/projects ss/magma.png";
import nasa from "../res/projects ss/nasa.png";
import tesla from "../res/projects ss/tesla.png";
import rayban from "../res/projects ss/rayban.png";
function Projects() {
  const gitHubLink = "https://github.com/ishant2612";

  const ytlink = "https://github.com/ishant2612/yt-music-clone";
  const rtlink = "https://real-time-task-management-website.vercel.app/login";
  const mglink = "https://magma-web-clone.vercel.app/";
  const rblink = "https://rayban-web.vercel.app/";
  const tslink = "https://tesla-clone-ishant.vercel.app/";
  const nasalink = "https://submission-area51.vercel.app/";
  const handleIconClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="missions" id="work">
      <div className="project-sec">
        <div className="tilted-head">
          <p>MISSIONS</p>
        </div>
        <div className="projects">
          <div className="display-sec">
            <div className="row1">
              <div className="p1" onClick={() => handleIconClick(ytlink)}>
                <div className="imgp">
                  <img src={yt} />
                </div>
                <div className="p_desc">
                  <p>
                    This is a Youtube Music clone made by using react.js and
                    express.js
                  </p>
                </div>
                <div className="p-con">
                  <p>YT Music Clone</p>
                </div>
              </div>
              <div className="p2" onClick={() => handleIconClick(rtlink)}>
                <div className="imgp">
                  <img src={rt} />
                </div>
                <div className="p_desc">
                  <p>
                    Manage your task or assign them to other safely, made using
                    react.js and firebase
                  </p>
                </div>
                <div className="p-con">
                  <p>Task Managment App</p>
                </div>
              </div>
            </div>
            <div className="row2">
              <div className="p3" onClick={() => handleIconClick(mglink)}>
                <div className="imgp">
                  <img src={mg} />
                </div>
                <div className="p_desc">
                  <p>A real-estate website clone (frontend only)</p>
                </div>
                <div className="p-con">
                  <p>Magma Clone</p>
                </div>
              </div>
              <div className="p4" onClick={() => handleIconClick(rblink)}>
                <div className="imgp">
                  <img src={rayban} />
                </div>
                <div className="p_desc">
                  <p>
                    A New Design from Rayban with some gooey effects(using
                    shery.js)
                  </p>
                </div>
                <div className="p-con">
                  <p>Rayban Website</p>
                </div>
              </div>
            </div>
            <div className="row3">
              <div className="p5" onClick={() => handleIconClick(nasalink)}>
                <div className="imgp">
                  <img src={nasa} />
                </div>
                <div className="p_desc">
                  <p>
                    This was a team project for nasa sapce app hackathon via
                    this website we tried to give a user how it feels to be in
                    space using AR{" "}
                  </p>
                </div>
                <div className="p-con">
                  <p>Nasa Space-App</p>
                </div>
              </div>
              <div className="p6" onClick={() => handleIconClick(tslink)}>
                <div className="imgp">
                  <img src={tesla} />
                </div>
                <div className="p_desc">
                  <p>
                    A react practice project worth enough to be in my protfolio
                  </p>
                </div>
                <div className="p-con">
                  <p>Tesla Clone</p>
                </div>
              </div>
            </div>
          </div>
          <div className="explore" onClick={() => handleIconClick(gitHubLink)}>
            <p>EXPLORE MORE</p>
            <ArrowCircleRightIcon
              style={{
                marginTop: "1vh",
                fontSize: "2vw",
                fontWeight: "100",
                color: "#d9d9d9",
                backgroundColor: "red",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

