import React from "react";
import styled from "@emotion/styled";
import { useThemeUI } from "theme-ui";

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8vh 5vw;
  width: 80%;
  height: 95%;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Container = (props) => {
  const { theme } = useThemeUI();

  return <Styled theme={theme}>{props.children}</Styled>;
};
