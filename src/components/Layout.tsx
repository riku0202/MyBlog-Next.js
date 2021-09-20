import Head from "next/head";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "./SVG";
import { Clock } from "./Clock";
import reset from "styled-reset";

export const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title />
        <meta name="description" content="blog" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, user-scalable=yes"
        />
        {/*ファビコン*/}
      </Head>
      <Style>
        <main>
          <div className="header">
            <div className="clock-wrapper">
              <Clock />
            </div>
            <div className="title">
              <h1 onClick={() => console.log("test")}>Riku SystemEngineer</h1>
              <div className="category">
                <Link href="/">Blog</Link>
                <Link href="/portfolio">Portfolio</Link>
              </div>
            </div>
            <div className="social">
              <a
                className="icon"
                href="https://www.instagram.com/riku_shimojima/?hl=ja"
              >
                {Instagram()}
              </a>
              <a className="icon" href="https://twitter.com/Riku_0202_">
                {Twitter()}
              </a>
              <a
                className="icon"
                href="https://www.facebook.com/profile.php?id=100009383710420"
              >
                {Facebook()}
              </a>
            </div>
          </div>
          {children}
          <div className="footer">
            <p className="copyright">
              {"Copyright © "}
              {new Date().getFullYear()}
              {"."}
            </p>
          </div>
        </main>
      </Style>
    </>
  );
};

const Style = styled.div`
  position: relative;
  box-sizing: border-box;
  min-height: 100vh;

  @media screen and (max-width: 768px) {
    .header {
      z-index: 5;
      backdrop-filter: blur(7px);
      background-color: rgba(0, 0, 0, 0.4);
      position: fixed;
      width: 100%;
      padding: 10px 0;
      color: #ffffff;
      text-shadow: 0 0 20px #ffffff;

      .clock-wrapper {
        position: absolute;
        top: 80px;
        left: 0;
        padding: 7px 5px 5px;
        backdrop-filter: blur(7px);
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 0 10% 10% 0;

        .clock {
          .clock-date {
            font-size: 10px;
          }

          .clock-time {
            margin: 3px 0 0;
            font-size: 20px;
          }
        }
      }

      .title {
        h1 {
          text-align: center;
          font-size: 20px;

          :hover {
            cursor: pointer;
          }
        }

        .category {
          margin: 7px 0 0;
          display: flex;
          justify-content: center;

          a {
            color: #ffffff;
            text-decoration: none;
            font-size: 10px;
            padding: 5px 10px 0;
            border-radius: 5px;

            :hover {
              cursor: pointer;
              background-color: rgba(0, 0, 0, 0.2);
              opacity: 0.5;
            }
          }
        }
      }

      .social {
        position: absolute;
        top: 80px;
        right: 0;
        display: initial;
        backdrop-filter: blur(7px);
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 10% 0 0 10%;

        .icon {
          display: block;
          margin: 10px;

          :hover {
            cursor: pointer;
          }

          svg {
            filter: drop-shadow(0 0 20px #ffffff);
            height: 25px;
            fill: #ffffff;
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 5;
      backdrop-filter: blur(7px);
      background-color: rgba(0, 0, 0, 0.4);
      position: fixed;
      width: 100%;
      padding: 20px 20px;
      color: #ffffff;
      text-shadow: 0 0 20px #ffffff;

      .clock-wrapper {
        position: initial;
        backdrop-filter: none;
        background-color: rgba(0, 0, 0, 0);
        left: 20px;
        top: 15px;

        .clock {
          .clock-date {
            font-size: 15px;
          }

          .clock-time {
            margin: 5px 0 0;
            font-size: 30px;
          }
        }
      }

      .title {
        h1 {
          text-align: center;
          font-size: 30px;

          :hover {
            cursor: pointer;
          }
        }

        .category {
          margin: 7px 0 0;
          display: flex;
          justify-content: center;

          a {
            color: #ffffff;
            text-decoration: none;
            font-size: 15px;
            padding: 5px 10px 0;
            border-radius: 5px;

            :hover {
              cursor: pointer;
              background-color: rgba(0, 0, 0, 0.2);
              opacity: 0.5;
            }
          }
        }
      }

      .social {
        position: initial;
        display: flex;
        backdrop-filter: none;
        background-color: rgba(0, 0, 0, 0);

        .icon {
          display: block;
          margin: 5px;

          :hover {
            cursor: pointer;
          }

          svg {
            filter: drop-shadow(0 0 20px #ffffff);
            height: 30px;
            fill: #ffffff;
          }
        }
      }
    }
  }

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    margin: 30px 0 0;
    border-top: 1px solid rgba(87, 87, 87, 0.49);

    .copyright {
    }
  }
`;
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
    letter-spacing: 1px;
  }

  img {
    max-width: 100%;
    display: block;
  }

  * {
    box-sizing: border-box;
  }
`;
