import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "bg.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        />
      );
    }}
  />
);



const Display = ({ className, children }) => {
  return (
    <div style={{ height: '100vh', width: '100vw'}}>
      <BackgroundSection className={className} />
      {children}
    </div>
  );
};

const StyledBackgroundImage = styled(Display)`
  width: 100%;
  height: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  image-rendering: pixelated;
  background-size: cover;
`;

export default StyledBackgroundImage;

// export default StyledBackgroundSection;

// const Image = () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         placeholderImage: file(relativePath: { eq: "bg.jpg" }) {
//           childImageSharp {
//             fluid(maxWidth: 1200) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     `}
//     render={data => (
//       <Img
//         title="test"
//         style={{ objectFit: "fit", position: "relative", zIndex: 55 }}
//         fluid={data.placeholderImage.childImageSharp.fluid}
//       />
//     )}
//   />
// );


