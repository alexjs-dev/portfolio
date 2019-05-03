import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import TrackVisibility from "react-on-screen";
import { Animated } from "react-animated-css";

const styles = {
  container: {
    height: "100vh",
    background: "green",
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
    color: "white",
  },
  margin: {
    marginLeft: 0,
    marginRight: 0,
    padding: 0,
  },
};

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            fixed(width: 300, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.file.childImageSharp.fixed} />}
  />
);

const Profile = () => {
  return (
    <div style={{ ...styles.container }}>
      <TrackVisibility once>
        <ProfileWrapper />
      </TrackVisibility>
    </div>
  );
};

const ProfileWrapper = ({ isVisible }) => {
  return (
    <Animated animationIn="fadeIn" animationInDuration={3500} isVisible={isVisible}>
      <div className="container">
        <div
          className="row justify-content-start align-items-center"
          style={{ ...styles.margin }}
        >
          <div className="col-12 col-md-6">
            <Image />
          </div>
          <div className="col-12 col-md-6">
            <p style={{ ...styles.text }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Viverra tellus in hac habitasse platea dictumst. Fames ac turpis
              egestas maecenas pharetra. Tincidunt lobortis feugiat vivamus at.
              Nunc sed augue lacus viverra vitae. Massa tincidunt dui ut ornare
              lectus sit amet est. Euismod quis viverra nibh cras. At auctor
              urna nunc id cursus metus aliquam eleifend. Amet facilisis magna
              etiam tempor orci eu. Bibendum at varius vel pharetra vel turpis
              nunc. Nam at lectus urna duis convallis convallis tellus. Tortor
              pretium viverra suspendisse potenti nullam ac tortor vitae purus.
              Egestas quis ipsum suspendisse ultrices gravida dictum fusce.
              Libero id faucibus nisl tincidunt eget. Eget sit amet tellus cras
              adipiscing enim. Sociis natoque penatibus et magnis. Volutpat
              blandit aliquam etiam erat velit scelerisque in dictum non. Amet
              nisl purus in mollis nunc sed id semper risus. Eget aliquet nibh
              praesent tristique magna sit. In est ante in nibh mauris cursus
              mattis. Laoreet sit amet cursus sit amet dictum. Enim neque
              volutpat ac tincidunt vitae semper quis lectus nulla. Amet
              porttitor eget dolor morbi non. Senectus et netus et malesuada
              fames ac turpis. Sit amet purus gravida quis blandit. Semper
              viverra nam libero justo laoreet sit amet. Phasellus egestas
              tellus rutrum tellus pellentesque eu tincidunt. Ut venenatis
              tellus in metus vulputate eu scelerisque. Augue lacus viverra
              vitae congue eu consequat ac felis donec. Faucibus ornare
              suspendisse sed nisi lacus sed. Tellus mauris a diam maecenas sed
              enim ut sem viverra. Pellentesque diam volutpat commodo sed
              egestas egestas fringilla phasellus. Vulputate enim nulla aliquet
              porttitor lacus. Placerat orci nulla pellentesque dignissim enim.
            </p>
          </div>
        </div>
      </div>
    </Animated>
  );
};

export default Profile;
