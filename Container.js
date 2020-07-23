import React from "react";
import styled from "@emotion/styled";
import { useThemeUI } from "theme-ui";
import { mq } from "./mediaQuery";

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  ${({ theme }) => `${mq(theme.breakpoints[0])} { width: 90%; }`};
  ${({ theme }) => `${mq(theme.breakpoints[1])} { width: 80%; }`};
  height: 98%;
  ${({ theme }) => `${mq(theme.breakpoints[0])} { height: 96%; }`};
  ${({ theme }) => `${mq(theme.breakpoints[1])} { height: 95%; }`};
  padding: 8vh 5vw;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Container = (props) => {
  const { theme } = useThemeUI();

  return <Styled theme={theme}>{props.children}</Styled>;
};
