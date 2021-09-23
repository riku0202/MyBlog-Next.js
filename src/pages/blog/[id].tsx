import React, { ReactElement } from "react";
import Image from "next/image";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import styled from "styled-components";
import { Layout } from "../../components/Layout";
import BlogLayout from "../../components/BlogLayout";

const BlogId = ({ blog }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const innerHTML = () => {
    return { __html: blog.body };
  };

  return (
    <Style>
      <Head>
        <title>{blog.title}</title>
      </Head>
      <div className="image-wrapper">
        <Image
          alt="image"
          src={blog.image.url}
          layout="responsive"
          width={161.8}
          height={100}
        />
      </div>
      <h1 className="title">{blog.title}</h1>
      <div className="inner-html" dangerouslySetInnerHTML={innerHTML()} />
    </Style>
  );
};
export default BlogId;

BlogId.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <BlogLayout>{page}</BlogLayout>
    </Layout>
  );
};

const Style = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .image-wrapper {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    .title {
      margin: 20px 0 30px;
      max-width: 700px;
      font-size: 30px;
      line-height: 40px;
      font-weight: bold;
    }

    .inner-html {
      width: 700px;
      text-align: left;

      h2 {
        font-size: 25px;
        line-height: 35px;
      }

      ul,
      ol {
        li {
          list-style: disc;
          padding: 5px 0;
          font-size: 12px;
          line-height: 20px;
        }
      }

      p {
        font-size: 15px;
        line-height: 25px;
      }

      pre {
        padding: 10px 0 10px 10px;
        border: 1px solid #7a7a7a;
        background-color: #f6f6f6;
        color: #000000;
        font-size: 13px;
        line-height: 18px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;

        -webkit-box-shadow: 3px 3px 5px 0 #aaa,
          1px 1px 5px 0 rgba(0, 0, 0, 0.3) inset;
        -moz-box-shadow: 3px 3px 5px 0 #aaa,
          1px 1px 5px 0 rgba(0, 0, 0, 0.3) inset;
        box-shadow: 3px 3px 5px 0 #aaa, 1px 1px 5px 0 rgba(0, 0, 0, 0.3) inset;

        overflow: auto;
        white-space: pre-wrap;
        word-wrap: break-word;

        code {
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .title {
      margin: 20px 0 30px;
      max-width: 300px;
      font-size: 18px;
      line-height: 23px;
      font-weight: bold;
    }

    .inner-html {
      text-align: left;
      width: 300px;
    }

    h2 {
      font-size: 18px;
      line-height: 20px;
    }

    ul,
    ol {
      li {
        list-style: disc;
        padding: 5px 0;
        font-size: 12px;
        line-height: 20px;
      }
    }

    p {
      font-size: 14px;
      line-height: 20px;
    }

    pre {
      padding: 10px 0 10px 10px;
      border: 1px solid #7a7a7a;
      background-color: #f6f6f6;
      color: #000000;
      font-size: 13px;
      line-height: 18px;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;

      -webkit-box-shadow: 3px 3px 5px 0 #aaa,
        1px 1px 5px 0 rgba(0, 0, 0, 0.3) inset;
      -moz-box-shadow: 3px 3px 5px 0 #aaa,
        1px 1px 5px 0 rgba(0, 0, 0, 0.3) inset;
      box-shadow: 3px 3px 5px 0 #aaa, 1px 1px 5px 0 rgba(0, 0, 0, 0.3) inset;

      overflow: auto;
      white-space: pre-wrap;
      word-wrap: break-word;

      code {
      }
    }
  }

  //h1 {
  //  font-size: 2rem;
  //  line-height: 3rem;
  //}
  //
  //p {
  //  font-size: 1rem;
  //  line-height: 2rem;
  //}
`;

export const getStaticPaths: GetStaticPaths = async () => {
  const api = process.env.API_KEY;

  const res = await fetch("https://riku-s.microcms.io/api/v1/blog", {
    // @ts-ignore
    headers: {
      "X-API-KEY": api,
    },
  });

  const data = await res.json();
  const paths = data.contents.map((blog: any) => `/blog/${blog.id}`);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const api = process.env.API_KEY;

  if (api === undefined || params === undefined) {
    return {
      props: {
        blog: null,
      },
    };
  }
  const res = await fetch(
    `https://riku-s.microcms.io/api/v1/blog/${params.id}`,
    {
      headers: {
        "X-API-KEY": api,
      },
    }
  );
  const data = await res.json();
  return {
    props: {
      blog: data,
    },
  };
};
