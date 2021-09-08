import Head from "next/head";
import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "./SVG";

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
          </div>
          {children}
        </main>
        <Footer />
      </Style>
    </>
  );
};

const Style = styled.div`
  position: relative;
  padding: 0 0 60px;
  box-sizing: border-box;
  min-height: 100vh;

  .header {
    z-index: 5;
    backdrop-filter: blur(7px);
    background-color: rgba(0, 0, 0, 0.2);
    position: fixed;
    width: 100%;
    padding: 10px 0;
    color: #ffffff;
    text-shadow: 2px 2px 10px #777, -2px 2px 10px #777, 2px -2px 10px #777,
      -2px -2px 10px #777;

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
            height: 30px;
            fill: #ffffff;
          }
        }
      }
    }
  }
`;
