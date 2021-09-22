import React from "react";
import { JSX } from "@babel/types";
import styled from "styled-components";
import Image from "next/image";
import Program from "../../public/Program.jpg";
import Head from "next/head";

const BlogLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Head>
        <title>Riku-s Blog</title>
      </Head>
      <Style>
        <div className="filter" />
        <div className="content">
          <h2>Technical Blog</h2>
          <p>個人開発や業務で得た知見をブログで発信していきます。</p>
        </div>
        <Image
          alt="program logo"
          src={Program}
          layout="fill"
          objectFit="cover"
        />
      </Style>
      <ChildrenStyle>
        <div className="space" />
        <div className="children">{children}</div>
        <div className="space" />
      </ChildrenStyle>
    </>
  );
};

export default BlogLayout;

const ChildrenStyle = styled.div`
  width: 100%;
  margin: 20px 0 0;
  display: flex;
  text-align: center;
  .children {
    flex-grow: 1;
  }

  @media screen and (max-width: 768px) {
    .space {
      max-width: 5vw;
      flex-grow: 2;
    }
  }

  @media screen and (min-width: 768px) {
    .space {
      max-width: 15vw;
      flex-grow: 2;
    }
  }
`;

const Style = styled.div`
  @media screen and (max-width: 768px) {
    position: relative;
    height: 300px;

    .filter {
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      background-color: rgb(0, 0, 0, 0.5);
    }

    .content {
      position: absolute;
      z-index: 2;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      color: #ffffff;

      h2 {
        text-align: center;
        font-size: 40px;
        font-family: "Homemade Apple", cursive;
      }

      p {
        text-align: center;
        margin: 60px 0 0;
        font-size: 15px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    position: relative;
    height: 400px;

    .filter {
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      background-color: rgb(0, 0, 0, 0.5);
    }

    .content {
      position: absolute;
      z-index: 2;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      color: #ffffff;

      h2 {
        text-align: center;
        font-size: 70px;
        font-family: "Homemade Apple", cursive;
      }

      p {
        text-align: center;
        margin: 60px 0 0;
        font-size: 15px;
      }
    }
  }
`;
