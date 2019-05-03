import PropTypes from "prop-types";
import React from "react";
import { Animated } from "react-animated-css";

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    right: 0,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
};

const Display = ({ title, subtitle }) => (
  <div style={{ ...styles.container }}>
    <Animated animationIn="bounceInUp" animationInDuration={2000}>
      <div style={{ ...styles.text }}>
        <h3>{title}</h3>
      </div>
    </Animated>
    <Animated animationIn="bounceInUp" animationInDuration={2500}>
      <div style={{ ...styles.text }}>
        <h4>{subtitle}</h4>
      </div>
    </Animated>
  </div>
);

Display.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

Display.defaultProps = {
  title: ``,
  subtitle: ``,
};

export default Display;
