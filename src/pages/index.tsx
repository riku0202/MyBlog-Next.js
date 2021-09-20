import React, { ReactElement } from "react";
import styled from "styled-components";
import { Content } from "../types/content";
import Image from "next/image";
import Link from "next/link";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Layout } from "../components/Layout";
import BlogLayout from "../components/BlogLayout";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Head from "next/head";

dayjs.extend(utc);
dayjs.extend(timezone);

const Blog = ({ blog }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Style>
      <Head>
        <title>Riku-s</title>
      </Head>
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
                    <p className="date">
                      公開日:
                      {dayjs
                        .utc(blog.publishedAt)
                        .tz("Asia/Tokyo")
                        .format("YYYY-MM-DD")}
                    </p>
                    <h3 className="title">{blog.title}</h3>
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

      .card {
        position: relative;
        cursor: pointer;

        .description {
          position: absolute;
          background-color: rgba(255, 255, 255, 0.47);
          backdrop-filter: blur(7px);
          bottom: 0;
          width: 100%;
          padding: 5px 8px 8px;

          .date {
            text-align: left;
            font-size: 10px;
            color: black;
          }

          .title {
            margin: 3px 0 0;
            font-size: 12px;
            color: black;
            font-weight: bold;
            line-height: 14px;
          }

          .body {
            margin: 10px 0 0;
            font-size: 15px;
            color: black;
          }
        }
      }
    }

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

      .card {
        position: relative;
        cursor: pointer;

        .description {
          position: absolute;
          background-color: rgba(255, 255, 255, 0.47);
          backdrop-filter: blur(7px);
          bottom: 0;
          width: 100%;
          padding: 5px 10px 10px;

          .date {
            text-align: left;
            font-size: 12px;
            color: black;
          }

          .title {
            margin: 5px 0 0;
            font-size: 15px;
            color: black;
            font-weight: bold;
            line-height: 19px;
          }

          .body {
            margin: 10px 0 0;
            font-size: 15px;
            color: black;
          }
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
