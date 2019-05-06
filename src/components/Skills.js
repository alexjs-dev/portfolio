import React from "react";
import SkillCard from "./SkillCard";
import TrackVisibility from "react-on-screen";
import { Animated } from "react-animated-css";

const styles = {
  container: {
    height: "100%",
    minHeight: "100vh",
    background: "black",
  },
  text: {
    color: "white",
  },
};



const Skills = ({ isMobile }) => {
  return (
    <div style={{ ...styles.container }}>
      <TrackVisibility>
        <SkillsWrapper isMobile={isMobile} />
      </TrackVisibility>
    </div>
  );
};

const SkillsWrapper = ({ isVisible, isMobile }) => {
  return (
    <Animated animationIn="fadeIn" animationInDuration={2000} isVisible={true}>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 align-self-center">
            <h1 className="display-1 text-center" style={{ ...styles.text }}>
              Skills
            </h1>
          </div>
          <div className="col-12 align-self-center">
            <SkillCard isMobile={isMobile} />
          </div>
        </div>
      </div>
    </Animated>
  );
};

export default Skills;
