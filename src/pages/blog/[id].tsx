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
      <div className="title">{blog.title}</div>
      {/*<div className="content">*/}
      <Image
        alt="mainImage"
        src={blog.image.url}
        layout="responsive"
        width={80}
        height={50}
      />
      <div className="body">
        <div dangerouslySetInnerHTML={innerHTML()} />
      </div>
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
  .body {
    width: 100%;

    h1 {
      font-size: 2rem;
      line-height: 3rem;
    }

    p {
      font-size: 1rem;
      line-height: 2rem;
    }
  }
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
