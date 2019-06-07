import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import TrackVisibility from "react-on-screen";
import { Animated } from "react-animated-css";

const styles = {
  container: {
    height: "100%",
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

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "author.jpg" }) {
          childImageSharp {
            fixed(width: 250, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fixed={data.file.childImageSharp.fixed}
        style={{ borderRadius: 5 }}
      />
    )}
  />
);

const ProfileWrapper = ({ profileAgeField }) => {
  return (
    <div style={{ ...styles.container }}>
      <TrackVisibility offset={1200} once>
        <Profile profileAgeField={profileAgeField} />
      </TrackVisibility>
    </div>
  );
};

const Profile = ({ isVisible, profileAgeField }) => {
  return (
    <Animated
      animationIn="fadeIn"
      animationInDuration={3500}
      isVisible={isVisible}
    >
      <div className="container">
        <section className="message-list">
          <section className="message -left">
            <div className="container">
              <div
                className="row justify-content-start align-items-center"
                style={{ ...styles.margin }}
              >
                <div className="col-12 col-md-4">
                  <Image />
                </div>

                <div className="col-12 col-md-8">
                  <div className="nes-balloon from-left">
                    <p>Class: Web Developer</p>
                    <p>Experience: 1Y</p>
                    <p>Name: Alex Dmitrijev</p>
                    <p style={{ fontSize: 10 }}>{profileAgeField}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </Animated>
  );
};

export default ProfileWrapper;
