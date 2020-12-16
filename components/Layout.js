import Head from "next/head";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "polished";
import { NextSeo } from "next-seo";
import config from "../constants/config";

import Header from "./Header";
import Footer from "./Footer";

const GlobalStyles = createGlobalStyle`
  html { height: 100%; overflow:auto;
    scroll-behavior: smooth; }
  body {
    margin: 0;
    min-height: 100vh;
    height: 100%;
    width: 100%;
    font-family: ${(props) =>
      props.theme.fontFamily}, Arial, Helvetica, sans-serif;
    color: ${(props) => props.theme.primaryColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.linkColor};
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - ${config.headerSize} - ${config.footerSize});
  width: 80%;
  margin: 0 auto;
  animation: fade-in 0.5s ease-in-out;

  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

const Layout = ({ refs, ...props }) => {
  return (
    <div>
      <Head>
        <title>
          {config.htmlTitle} | {props.title}
        </title>
        <link href="https://maazelmusic.com/" rel="canonical" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="google-site-verification"
          content="Gn_ZwQWQS4QEL1lC4J32wR5VnEbDeCPNwe_nOssPUOM"
        />
        <meta name="google-site-verification" content="y5mQGdLTZ1ehQL1Pw98x5hLCMLZSvUkHBx-yzchOKII" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={config.theme}>
        <Container>
          <GlobalStyles />
          <NextSeo
            title={props.title}
            canonical={`${config.websiteUrl}${
              props.title.toLowerCase() === "home"
                ? ""
                : props.title.toLowerCase()
            }`}
          />
          <Header refs={refs} />
          <Content {...props}>{props.children}</Content>
          <Footer />
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
