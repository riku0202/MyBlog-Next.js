import { AppBar, Button, Toolbar } from "@material-ui/core";
import styled from "styled-components";

export type Props = {
  title: string;
  sections: {
    title: string;
    url: string;
  }[];
};

export default function Header(props: Props) {
  const { sections, title } = props;

  return (
    <Style>
      <AppBar color="transparent">
        <Toolbar className="toolbar">
          <h1>{title}</h1>
        </Toolbar>
        <Toolbar component="nav" variant="dense" className="toolbarSecondary">
          {sections.map((section) => (
            <Button
              color="inherit"
              key={section.title}
              href={section.url}
              className="toolbarLink"
            >
              {section.title}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </Style>
  );
}

const Style = styled.div`
  .toolbar {
    font-size: 3rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    justify-content: center;
  }

  .toolbarTitle {
    flex: 1;
  }

  .toolbarSecondary {
    justify-content: center;
    overflow-x: auto;
  }

  .toolbarLink {
    font-family: "Noto Sans JP", sans-serif;
    font-size: 1.5rem;
    padding: 7px;
    flex-shrink: 0;
  }
`;
