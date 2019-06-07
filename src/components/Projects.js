import React from 'react';
import TrackVisibility from "react-on-screen";
import { StaticQuery, graphql } from "gatsby";
import { Animated } from "react-animated-css";
import Img from "gatsby-image";

const styles = {
  container: {
    minHeight: "100vh",
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

const OfbmImage = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "ofbm2.jpg" }) {
          childImageSharp {
            fixed(width: 400) {
              ...GatsbyImageSharpFixed
            }
            
          }
        }
      }
    `}
    render={data => (
      <Img
        fixed={data.file.childImageSharp.fixed}
        style={{ borderRadius: 5, objectFit: 'contain' }}
      />
    )}
  />
);

const Projects = ({ isVisible }) => {
  return (
    <div className="container">
      <div
        className="row justify-content-start align-items-center"
        style={{ ...styles.margin }}
      >
        <div className="col-12 col-md-4">
          <div className="nes-balloon">
            <p>OFBM2</p>
            <p>Language: C#</p>
            <p>Download</p>
            <OfbmImage />
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="nes-balloon">
            <p>OFBM2</p>
            <p>Language: C#</p>
            <p>Download</p>
            <OfbmImage />
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="nes-balloon">
            <p>OFBM2</p>
            <p>Language: C#</p>
            <p>Download</p>
            <OfbmImage />
          </div>
        </div>
      </div>
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
      <TrackVisibility>
        <Projects />
      </TrackVisibility>
    </div>
  );
};

export default ProjectsWrapper;