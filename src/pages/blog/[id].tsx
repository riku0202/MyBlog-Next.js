import React from "react";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import styled from "styled-components";

const BlogId = ({ blog }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Style>
      <div className="image-wrapper">
        <Image
          alt="mainImage"
          src={blog.image.url}
          layout="responsive"
          width={80}
          height={50}
        />
      </div>
      <div className="body" dangerouslySetInnerHTML={{ __html: blog.body }} />
    </Style>
  );
};
export default BlogId;

const Style = styled.div`
  .image-wrapper {
    width: 200px;
    height: 200px;
  }

  .description {
    backdrop-filter: blur(7px);
  }
`;

export const getStaticPaths: GetStaticPaths = async () => {
  const api = process.env.API_KEY;

  const res = await fetch("https://riku-s.microcms.io/api/v1/blog", {
    headers: {
      "X-API-KEY": api,
    },
  });

  const data = await res.json();
  const paths = data.contents.map((blog) => `/blog/${blog.id}`);

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
