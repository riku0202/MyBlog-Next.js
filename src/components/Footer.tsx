import React from "react";
import styled from "styled-components";
import { Link, Typography } from "@material-ui/core";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const Footer = (): JSX.Element => {
  return (
    <FooterStyle>
      <Copyright />
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styled.footer`
  text-align: center;
  box-shadow: 0 0 10px #999;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  width: 100%;
  padding: 30px 0;
  position: absolute;
  bottom: 0;
`;
