import { client } from "../../lib/MicroCms";
import { Content, ContentList } from "../../types/content";
import { Layout } from "../../components/Layout";
import React from "react";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import styled from "styled-components";

const BlogId = ({ blog }: any) => {
  return (
    <>
      {/*<div className="cards">*/}
      {/*  <CardComponent*/}
      {/*    image={blog.image.url}*/}
      {/*    title={blog.title}*/}
      {/*    content={blog.body}*/}
      {/*    link={`/blog/${blog.id}`}*/}
      {/*  />*/}
      {/*</div>*/}
      <div>
        <Image
          alt="mainImage"
          src={blog.image.url}
          layout="responsive"
          width={161.8}
          height={100}
        />
      </div>
    </>
  );
};
export default BlogId;

const Style = styled.div`
  .description {
    backdrop-filter: blur(7px);
  }
`;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get<ContentList>({
    endpoint: "blog",
  });

  const paths = data.contents.map((blog) => `/blog/${blog.id}`);
  return { paths, fallback: false };
};

type props = {
  params: {
    id: number;
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params !== undefined) {
    const res = await fetch(
      `https://riku-s.microcms.io/api/v1/blog/${params.id}`,
      {
        headers: {
          "X-API-KEY": "9cba3744-936b-447c-b555-79bb51b00914",
        },
      }
    );
    const data = await res.json();
    return {
      props: {
        blog: data,
      },
    };
  }

  return {
    props: {
      blog: "",
    },
  };
};
