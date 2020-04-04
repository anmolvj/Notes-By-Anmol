import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

const MyName = styled.h1`
  font-size: 5 rem;
  text-align: center;
`;

const MainContainer = styled.div``;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Anton", sans-serif;
  font-size: 4rem;
  justify-content: center;
  align-items: center;
  max-width: 1024px;
  margin: auto;

  @media (min-width: 768px) {
    flex-direction: row;
    font-size: 6rem;
  }
  @media (min-width: 800px) {
    font-size: 6.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 8rem;
  }
`;

const FnameContainer = styled.div`
  @media (min-width: 768px) {
    margin-right: 1rem;
  }
  @media (min-width: 1024px) {
    margin-right: 2rem;
  }
`;
const LnameContainer = styled.div``;

const OpenerUnderName = styled.h3`
  color: white;
  text-align: center;
`;

export const IndexPageTemplate = ({
  image,
  fname,
  lname,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => (
  <MainContainer>
    <NameContainer>
      <FnameContainer>{fname}</FnameContainer>
      <LnameContainer>{lname}</LnameContainer>
    </NameContainer>
  </MainContainer>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  fname: PropTypes.string,
  lname: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        fname={frontmatter.fname}
        lname={frontmatter.lname}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        fname
        lname
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
