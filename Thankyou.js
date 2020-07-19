import React from "react";
import styled from "@emotion/styled";
import { useThemeUI } from "theme-ui";
import titleImg from "./assets/react-android-logo.png";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  height: 100%;
  width: 100%;
  z-index: 2;
`;

const Pic = styled.img`
  height: 70vh;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  align-items: flex-end;
`;

const ThankYouRow = styled.div`
  font-size: 132px;
`;

export const Thankyou = () => {
  const { theme } = useThemeUI();
  return (
    <Wrapper theme={theme}>
      <Left>
        <Pic src={titleImg} />
      </Left>
      <Right>
        <ThankYouRow>Thank you!</ThankYouRow>
        <a href="https://github.com/micheleb" target="_blank">
          micheleb
        </a>
        <a href="https://twitter.com/micheluzzo" target="_blank">
          @micheluzzo
        </a>
      </Right>
    </Wrapper>
  );
};
