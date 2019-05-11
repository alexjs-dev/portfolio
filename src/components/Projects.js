import React from 'react';
import TrackVisibility from "react-on-screen";
import { Animated } from "react-animated-css";

const styles = {
  container: {
    height: "100vh",
    background: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  flex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
  },
  margin: {
    marginLeft: 0,
    marginRight: 0,
    padding: 0,
  },
  defaultPadding: {
    padding: 10,
  },
};

const Projects = ({ isVisible }) => {
  return (
    <div>
      <Animated
        animationIn="fadeIn"
        animationOut="hinge"
        animationInDuration={3000}
        animationOutDelay={1000}
        isVisible={!isVisible}
      >
        <div>
          <h2>Projects</h2>
        </div>
      </Animated>
      <ProjectList rootVisibility={isVisible} />
    </div>

  )
}

const ProjectList = ({ rootVisibility }) => {
  return (
    <Animated
      animationIn="fadeIn"
      animationOut="fadeOut"
      animationInDuration={2000}
      animationOutDelay={500}
      animationInDelay={4500}
      isVisible={rootVisibility}>
      <div>
        <h3>Content</h3>
      </div>
    </Animated>
  )
}

const ProjectsWrapper = () => {
  return (
    <div style={{ ...styles.container }}>
      <TrackVisibility offset={800}>
        <Projects />
      </TrackVisibility>
    </div>
  );
};

export default ProjectsWrapper;