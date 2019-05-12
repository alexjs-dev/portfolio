import React from "react";
import SkillCard from "./SkillCard";
import TrackVisibility from "react-on-screen";
import { Animated } from "react-animated-css";
import SkillsAdditional from './SkillsAdditional';

const styles = {
  container: {
    height: "100%",
    minHeight: "100vh",
    background: "black",
    padding: 30,
  },
  text: {
    color: "white",
  },
};



const Skills = ({ isMobile, skills, additionalSkills }) => {
  return (
    <div style={{ ...styles.container }}>
      <TrackVisibility offset={800}>
        <SkillsWrapper isMobile={isMobile} skills={skills} additionalSkills={additionalSkills} />
      </TrackVisibility>
    </div>
  );
};

const SkillsWrapper = ({ isVisible, isMobile, skills, additionalSkills }) => {
  return (
    <Animated animationIn="fadeIn" animationInDuration={3500} isVisible={isVisible}>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 align-self-center">
            <h1 className="display-2 text-center" style={{ ...styles.text }}>
              Skills
            </h1>
            <h4 className="text-center" style={{ ...styles.text }}>
              What I'm good at
            </h4>
          </div>
          <div className="col-12 align-self-center">
            <SkillCard isMobile={isMobile} isVisible={isVisible} skills={skills} />
          </div>
          <div className="col-12 align-self-center">
          <SkillsAdditional additionalSkills={additionalSkills} />
          </div>
        </div>
      </div>
    </Animated>
  );
};

export default Skills;
