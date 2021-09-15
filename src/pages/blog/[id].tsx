import { client } from "../../lib/MicroCms";
import { ContentList } from "../../types/content";
import React from "react";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import styled from "styled-components";

const BlogId = ({ blog }: any) => {
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
