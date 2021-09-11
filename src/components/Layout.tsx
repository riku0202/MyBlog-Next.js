import Head from "next/head";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "./SVG";
import { Clock } from "./Clock";

type Props = {
  preview?: boolean;
  children: JSX.Element;
};

const sections = [
  { title: "Blog", url: "/" },
  { title: "About me", url: "/portfolio" },
];

export const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Head>
        <title>aaa</title>
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
        {/*ファビコン*/}
      </Head>
      <Style>
        <main>
          <div className="header">
            <h1 onClick={() => console.log("test")}>Riku SystemEngineer</h1>
            <div className="category">
              <Link href="/">Blog</Link>
              <Link href="/portfolio">Portfolio</Link>
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
            <div className="clock-wrapper">
              <Clock />
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

  .header {
    z-index: 5;
    backdrop-filter: blur(7px);
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    width: 100%;
    padding: 10px 0;
    color: #ffffff;
    text-shadow: 0 0 20px #ffffff;

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
        padding: 5px 10px;
        border-radius: 5px;

        :hover {
          cursor: pointer;
          background-color: rgba(0, 0, 0, 0.2);
          opacity: 0.5;
        }
      }
    }

    .clock-wrapper {
      position: absolute;
      left: 20px;
      top: 15px;
    }

    @media screen and (min-width: 480px) {
      .social {
        display: none;
      }
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      .social {
        position: absolute;
        top: 15px;
        right: 20px;
        display: flex;

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

    @media screen and (min-width: 1024px) {
      .social {
        position: absolute;
        top: 15px;
        right: 20px;
        display: flex;

        .icon {
          display: block;
          margin: 10px;

          :hover {
            cursor: pointer;
          }

          svg {
            filter: drop-shadow(0 0 10px #ffffff);
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
