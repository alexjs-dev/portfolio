import React, { useEffect, useState } from "react";
import { Image, ImageGenerator, getColor } from '../helpers';

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

const styles = {
  image: {
    padding: 5,
  },
  container: {
    display: "flex",
    background: "black",
    height: "100%",
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
        <div style={{ ...styles.image }}>{image}</div>
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



const SkillCard = ({ isMobile, isVisible, skills = [] }) => {
  const [steps, setSteps] = useState(5);
  useEffect(() => {
    if (steps > 1 && isVisible) {
      setTimeout(() => {
        setSteps(Math.abs(steps - 1));
      }, 500 + Math.random(1000));
    }
  }, [steps, isVisible]);

  return (
    <div
      style={{
        ...styles.container,
      }}
    >
      {skills.map(skill => {
        const { title, shortTitle, image, percent, imageAlt, imageFilter = '' } = skill;
        return (
          <SkillCardItem
            key={title}
            image={Image(ImageGenerator(image), imageAlt, { filter: imageFilter })}
            isMobile={isMobile}
            title={title}
            shortTitle={shortTitle}
            percent={percent / steps + "%"}
          />
        )
      }

      )}

    </div>
  );
};

export default SkillCard;
