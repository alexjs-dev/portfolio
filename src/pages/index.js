import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import Hero from "../components/Hero";
import BackgroundImage from "../components/BackgroundImage";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
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
              skills {
                image
                imageAlt
                title
                shortTitle
                percent
                imageFilter
              }
              additionalSkills {
                image
                imageAlt
                imageFilter
              }
            }
          }
        }
      `}
      render={data => {
        const { title, description, skills, additionalSkills } = data.site.siteMetadata;
        return (
          (
            <Layout>
              <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
              <BackgroundImage>
                <Hero
                  title={title}
                  subtitle={description}
                />
              </BackgroundImage>
              <Profile />
              <Skills isMobile={isMobile(screenWidth)} skills={skills} additionalSkills={additionalSkills} />
              <Projects />
            </Layout>
          )
        )
      }}
    />
  );
};

export default IndexPage;
