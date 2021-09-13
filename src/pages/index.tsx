import React from "react";
import styled from "styled-components";
import { Content } from "../types/content";
import Image from "next/image";
import Program from "../../public/Program.jpg";
import Head from "next/head";
import Link from "next/link";
import { string } from "prop-types";

const mainFeaturedPost = {
  title: "ブログのタイトル",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Continue reading…",
};

// @ts-ignore
const Blog = ({ blog }) => {
  return (
    <>
      <Head>
        <title>Riku-s Blog</title>
      </Head>
      <ImageStyle>
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
      </ImageStyle>
      <Style>
        <div className="space" />
        <div className="cards">
          {blog.map((blog: Content, index: number) => (
            <Link href={`/blog/${blog.id}`} key={index}>
              <a className="card" key={index}>
                <Image
                  alt="image"
                  src={blog.image.url}
                  layout="responsive"
                  width={161.8}
                  height={100}
                />
                <div className="description">
                  <h3 className="title">{blog.title}</h3>
                  <div
                    className="body"
                    dangerouslySetInnerHTML={{ __html: blog.body }}
                  />
                </div>
              </a>
            </Link>
          ))}
        </div>
        <div className="space" />
      </Style>
    </>
  );
};
// <CardComponent
//     key={index}
//     image={blog.image.url}
//     title={blog.title}
//     content={blog.body}
//     link={`/blog/${blog.id}`}
// />
export default Blog;

const ImageStyle = styled.div`
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
`;

const Style = styled.div`
  width: 100%;
  margin: 20px 0 0;
  display: flex;

  background-color: #ffffff;
  color: #333;
  text-align: center;

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

  .cards {
    flex-grow: 1;
    display: grid;
    gap: 2rem;

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    }

    .card {
      position: relative;
      cursor: pointer;

      .description {
        position: absolute;
        background-color: rgba(255, 255, 255, 0.47);
        backdrop-filter: blur(7px);
        bottom: 0;
        height: 25%;
        width: 100%;
        padding: 10px;

        .title {
          font-size: 25px;
          color: black;
          font-weight: bold;
        }

        .body {
          margin: 10px 0 0;
          font-size: 15px;
          color: black;
        }
      }
    }
  }
`;

export const getStaticProps = async () => {
  const api = process.env.API_KEY;
  const res = await fetch("https://riku-s.microcms.io/api/v1/blog", {
    // @ts-ignore
    headers: {
      "X-API-KEY": api,
    },
  });
  const data = await res.json();
  return {
    props: {
      blog: data.contents,
    },
  };
};
