import React from "react";
import styled from "@emotion/styled";
import { useThemeUI } from "theme-ui";
import titleImg from "./assets/react-android-logo.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  width: 80vw;
  z-index: 2;
`;

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TopTitle = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 140px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 104px;
`;

const Logo = styled.img`
  height: 45vh;
`;

const BottomTitle = styled.div`
  font-family: Roboto;
  font-size: 104px;
  letter-spacing: -0.5px;
  font-weight: 300;
  text-align: center;
  color: #43db86;
  margin-top: 86px;
`;

export const TitlePage = () => {
  const { theme } = useThemeUI();
  return (
    <Wrapper theme={theme}>
      <Centered>
        <TopTitle>React Native</TopTitle>
        <Logo src={titleImg} />
        <BottomTitle>for Android Developers</BottomTitle>
      </Centered>
    </Wrapper>
  );
};
