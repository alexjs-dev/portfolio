import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import Hero from "../components/Hero";
import BackgroundImage from "../components/BackgroundImage";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import moment from "moment";
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
  const birthDate = new Date("September 29 1993 18:30");
  const [currentTime, setCurrentTime] = useState(moment());
  const [profileAgeField, setProfileAgeField] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setCurrentTime(moment);
      const diff = moment.duration(moment().diff(birthDate));
      setProfileAgeField(`Age: ${diff.years()}Y ${diff.months()}M ${diff.days()}D ${String(diff.hours()).padStart(2, '0')}H ${String(diff.minutes()).padStart(2, '0')}M ${String(diff.seconds()).padStart(2, '0')}S`);
    }, 1000);
  }, [currentTime]);

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
              <Profile profileAgeField={profileAgeField} />
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
