import React from "react";
import Link from "next/link";
import { CardActionArea, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import styled from "styled-components";

export type Props = {
  image: string;
  title: string;
  content: JSX.Element;
  link: string;
};

export const CardComponent = (props: Props): JSX.Element => {
  return (
    <Style>
      <Link href={props.link}>
        <Card className="root">
          <CardActionArea>
            <img src={props.image} alt="" className="media" />
            <div className="card-content">
              <h2>{props.title}</h2>
              {props.content}
            </div>
          </CardActionArea>
        </Card>
      </Link>
    </Style>
  );
};

const Style = styled.div`
  h2 {
    margin: 0 0 5px;
  }

  .card-content {
    padding: 2rem;
  }

  .media {
    object-fit: cover;
    width: 100%;
    height: 350px;
  }
`;

export default CardComponent;
