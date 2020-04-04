import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const MainContainer = styled.div`
  flex: 1 0 auto;
`;

const DefaultFont = styled.div`
  font-family: "Nunito";
`;
const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <BodyContainer>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        {/* <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        /> */}

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Dancing+Script:400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:700,700i&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <MainContainer>
        <Navbar />
        <DefaultFont>{children}</DefaultFont>
      </MainContainer>

      <Footer />
    </BodyContainer>
  );
};

export default TemplateWrapper;
