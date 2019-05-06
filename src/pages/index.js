import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import Hero from "../components/Hero";
import BackgroundImage from "../components/BackgroundImage";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import { StaticQuery, graphql } from "gatsby";
import SEO from "../components/seo";


const getWidth = window.innerWidth;
const isMobile = width => width < 390;

const IndexPage = () => {
  const [screenWidth, setScreenWidth] = useState(getWidth || 800);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, [screenWidth]);

  return (
    <StaticQuery
      query={graphql`
        query IndexPageQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => (
        <Layout>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <BackgroundImage>
            <Hero
              title={data.site.siteMetadata.title}
              subtitle={data.site.siteMetadata.description}
            />
          </BackgroundImage>
          <Profile />
          <Skills isMobile={isMobile(screenWidth)} />
        </Layout>
      )}
    />
  );
};

export default IndexPage;
