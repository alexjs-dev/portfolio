import React, { Component } from "react";
import Layout from "../components/layout";
import Hero from "../components/Hero";
import BackgroundImage from "../components/BackgroundImage";
import Profile from "../components/Profile";
import { StaticQuery, graphql } from "gatsby";
import SEO from "../components/seo";

const IndexPage = () => (
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
      </Layout>
    )}
  />
);


export default IndexPage;
