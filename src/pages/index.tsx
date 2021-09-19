import React, { ReactElement } from "react";
import styled from "styled-components";
import { Content } from "../types/content";
import Image from "next/image";
import Link from "next/link";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Layout } from "../components/Layout";
import BlogLayout from "../components/BlogLayout";

const Blog = ({ blog }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Style>
      <div className="space" />
      <div className="cards">
        {blog !== null ? (
          <>
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
          </>
        ) : null}
      </div>
      <div className="space" />
    </Style>
  );
};
export default Blog;

Blog.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <BlogLayout>{page}</BlogLayout>
    </Layout>
  );
};

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

export const getStaticProps: GetStaticProps = async () => {
  const api = process.env.API_KEY;
  if (api === undefined) {
    return {
      props: {
        blog: null,
      },
    };
  }

  const res = await fetch("https://riku-s.microcms.io/api/v1/blog", {
    headers: {
      "X-API-KEY": api,
    },
  });
  const data = await res.json();
  return {
    props: {
      blog: data.contents || null,
    },
  };
};
