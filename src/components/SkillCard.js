import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";

const SkillBar = ({ percent }) => {
  const { r, g, b } = getColor(percent);
  const rgb = `rgb(${r},${g},${b})`;
  return (
    <div className="skill-bar-container" style={{ width: "100%" }}>
      <div
        className="skill-bar-box"
        style={{ border: `2px solid rgba(${r},${g},${b},0.3)` }}
      >
        <div
          className="skill-bar-1"
          style={{
            backgroundImage: `linear-gradient(-45deg, ${rgb} 25%, transparent 25%, transparent 50%, ${rgb} 50%, ${rgb} 75%, transparent 75%, transparent)`,
            width: percent,
          }}
        />
      </div>
    </div>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "react.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }`;

const getColor = percent => {
  const value = parseInt(percent);
  if (value >= 90) {
    return { r: 185, g: 237, b: 94 };
  }
  if (value >= 75) {
    return { r: 146, g: 200, b: 26 };
  }
  if (value >= 50) {
    return { r: 87, g: 197, b: 43 };
  }
  if (value >= 25) {
    return { r: 244, g: 104, b: 11 };
  }
  if (value >= 10) {
    return { r: 230, g: 100, b: 11 };
  }
  return { r: 180, g: 35, b: 19 };
};

const styles = {
  image: {
    padding: 10,
  },
  container: {
    display: "flex",
    background: "black",
    height: "100vh",
    marginBottom: 20,
    flexDirection: "column",
    color: "white",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
};

const SkillCardItem = ({
  image,
  percent,
  title,
  shortTitle = "",
  isMobile,
}) => {
  const Image = image;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "50%",
          alignItems: "center",
        }}
      >
        <div style={{ ...styles.image }}>
          <Image />
        </div>
        <div>
          {!isMobile && <h3>{title}</h3>}
          {isMobile && <h5>{shortTitle}</h5>}
        </div>
      </div>
      <div style={{ width: "50%" }}>
        <SkillBar percent={percent} />
      </div>
    </div>
  );
};

const SkillCard = ({ isMobile, data }) => {
  const JavaScriptImage = <Img fixed={data.file.childImageSharp.fixed} />
  return (
    <div
      style={{
        ...styles.container,
      }}
    >
      <SkillCardItem
        image={JavaScriptImage}
        isMobile={isMobile}
        title="Javascript"
        shortTitle="JS"
        percent="80%"
      />
      <SkillCardItem
        image={JavaScriptImage}
        isMobile={isMobile}
        title="C# & Unity"
        shortTitle="C#"
        percent="12%"
      />
      <SkillCardItem
        image={JavaScriptImage}
        isMobile={isMobile}
        title="React"
        shortTitle="React"
        percent="75%"
      />
      <SkillCardItem
        image={JavaScriptImage}
        isMobile={isMobile}
        title="VueJs"
        shortTitle="Vue"
        percent="72%"
      />
      <SkillCardItem
        image={JavaScriptImage}
        isMobile={isMobile}
        title="ReduxJs"
        shortTitle="Redux"
        percent="76%"
      />
      <SkillCardItem
        image={JavaScriptImage}
        isMobile={isMobile}
        title="NodeJs"
        shortTitle="Node"
        percent="82%"
      />
      <SkillCardItem
        image={JavaScriptImage}
        isMobile={isMobile}
        title="MongoDb"
        shortTitle="Mongo"
        percent="74%"
      />
      <SkillCardItem
        image={JavaScriptImage}
        isMobile={isMobile}
        title="Java"
        shortTitle="Java"
        percent="10%"
      />
      <SkillCardItem
        image={JavaScriptImage}
        isMobile={isMobile}
        title="HTML5/CSS"
        shortTitle="HTML5"
        percent="65%"
      />
      <SkillCardItem
        image={JavaScriptImage}
        isMobile={isMobile}
        title="Vuetify"
        shortTitle="Vuetify"
        percent="66%"
      />
      <SkillCardItem
        image={JavaScriptImage}
        isMobile={isMobile}
        title="FeathersJs"
        shortTitle="Feathers"
        percent="55%"
      />
    </div>
  );
};

export default SkillCard;
