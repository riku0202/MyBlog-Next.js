import React from "react";
import styled from "styled-components";
import CardComponent from "../components/Card";
import { Layout } from "../components/Layout";
import { Content } from "../types/content";
import Image from "next/image";
import Program from "../../public/Program.jpg";

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
    <Layout>
      <>
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
          <div />
          <>
            <div className="content">
              <div className="cards">
                {blog.map((blog: Content, index: number) => (
                  <CardComponent
                    key={index}
                    image={blog.image.url}
                    title={blog.title}
                    content={blog.body}
                    link={`/blog/${blog.id}`}
                  />
                ))}
              </div>
            </div>
          </>
          <div />
        </Style>
      </>
    </Layout>
  );
};

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
  margin: 20px 0 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 4fr 1fr;

  .cards {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  }

  background-color: #fafafa;
  color: #333;
  text-align: center;
`;

export const getStaticProps = async () => {
  const res = await fetch("https://riku-s.microcms.io/api/v1/blog", {
    headers: {
      "X-API-KEY": "9cba3744-936b-447c-b555-79bb51b00914",
    },
  });
  const data = await res.json();
  return {
    props: {
      blog: data.contents,
    },
  };
};
