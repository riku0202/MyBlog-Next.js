import React from "react";
import { AppLayoutProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const MyBlog = ({ Component, pageProps }: AppLayoutProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyBlog;

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html,
  body {
    font-family: 'Noto Sans JP', sans-serif;
    background-color: #FFFFFF;
    font-size: 0.625em;
    font-weight: 400;
    text-align: justify;
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
    display: block;
  }

  * {
    box-sizing: border-box;
  }
`;
