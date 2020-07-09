import React from "react";
import styled from "@emotion/styled";
import { useThemeUI } from "theme-ui";
import whoami from "./assets/whoami.png";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  height: 100%;
  width: 100%;
  z-index: 2;
`;

const Pic = styled.div`
  background-image: url('${whoami}');
  background-size: cover;
  height: 100%;
  width: 60%;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
`;

export const WhoAmI = (props) => {
  const { theme } = useThemeUI();
  return (
    <Wrapper theme={theme}>
      <Pic />
      <Right>{props.children}</Right>
    </Wrapper>
  );
};
