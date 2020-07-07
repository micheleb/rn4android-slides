import React from "react";
import styled from "@emotion/styled";
import { MDXProvider } from "@mdx-js/react";
import { themes, useDeck } from "mdx-deck";
import { useThemeUI, ThemeProvider } from "theme-ui";
import { ProgressDots } from "./ProgressDots";

const StyledLayout = styled.main`
  font-family: ${({ theme }) => theme.fonts.body};
`;

const Provider = (props) => {
  const { children } = props;
  const { theme } = useThemeUI();
  const deck = useDeck();

  return (
    <StyledLayout>
      <ThemeProvider theme={theme}>
        <MDXProvider>{children}</MDXProvider>
      </ThemeProvider>
      <ProgressDots
        progress={Math.floor((deck.index * 100) / (deck.length - 1))}
      />
    </StyledLayout>
  );
};

export default {
  ...themes.code,
  googleFont:
    "https://fonts.googleapis.com/css2?family=Fira+Code&family=Roboto+Slab:wght@400;500&family=Roboto:wght@400;500",
  fonts: {
    body: '"Roboto", sans-serif',
    monospace: '"Fira Code", monospace',
    heading: '"Roboto Slab", serif',
  },
  colors: {
    text: "#fff",
    background: "#282c34",
    primary: "#61dafb",
  },
  styles: {
    h1: {
      textTransform: "uppercase",
      color: "primary",
    },
  },
  Provider,
};
