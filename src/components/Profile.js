import React, { useEffect, useState } from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import TrackVisibility from "react-on-screen";
import moment from "moment";
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

const Profile = () => {
  return (
    <div style={{ ...styles.container }}>
      <TrackVisibility offset={1200} once>
        <ProfileWrapper />
      </TrackVisibility>
    </div>
  );
};

const ProfileWrapper = ({ isVisible }) => {
  const birthDate = new Date("September 29 1993 18:30");
  const [currDate, setCurrDate] = useState(moment());
  let diff = moment.duration(currDate.diff(birthDate));
  let years = diff.years();
  let months = diff.months()
  let days = diff.days()
  let hours = diff.hours();
  let minutes = diff.minutes();
  let seconds = diff.seconds();

  useEffect(() => {
    setTimeout(() => {
      setCurrDate(moment);
      diff = moment.duration(moment().diff(birthDate));
      years = diff.years();
      months = diff.months()
      days = diff.days()
      hours = diff.hours();
      minutes = diff.minutes();
      seconds = diff.seconds();
      console.log('set', seconds);
    }, 1000);
  }, [currDate]);

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
                    <p >Class: Web Developer</p>
                    <p>Experience: 1Y</p>
                    <p>Name: Alex Dmitrijev</p>
                    <p style={{ fontSize: 12 }}>Age: {years}Y {months}M {days}D {hours}:{minutes}:{seconds}</p>
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

export default Profile;
