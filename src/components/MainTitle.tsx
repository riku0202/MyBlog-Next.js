import React from "react";
import styled from "styled-components";

type Props = {
  post: {
    title: string;
    description: string;
    image: string;
    imgText: string;
    linkText: string;
  };
};

export const MainTitle = (props: Props) => {
  return (
    <Style>
      <h2>エンジニアブログ</h2>
      <p>日々の業務や個人開発で得た知見をブログにしてまとめていきます。</p>
    </Style>
  );
};

const Style = styled.div`
  position: relative;
  color: white;
  background-image: url(https://source.unsplash.com/random);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 20px;
  margin: 0 0 20px;
  min-height: 30rem;

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0 0 1rem;
  }

  p {
    font-size: 1.5rem;
  }
`;
