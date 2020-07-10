import React from "react";
import styled from "@emotion/styled";
import { useThemeUI } from "theme-ui";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Img = styled.div`
  background-image: ${({ src }) => `url('${src}')`};
  background-size: cover;
  height: 100%;
  width: 100%;
`;

const Attribution = styled.div`
  position: absolute;
  right: 2vh;
  bottom: 4vh;
  padding: 1em;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 0.5vh;
  color: white;
  font-family: Roboto;
  font-size: 20px;
`;

export const FullScreenImg = ({ src, attribution, modified }) => {
  const { theme } = useThemeUI();

  return (
    <Wrapper theme={theme}>
      <Img src={src} />
      <Attribution>
        {modified ? "Original pic from" : "Source:"} {attribution || "unknown"}
      </Attribution>
    </Wrapper>
  );
};
