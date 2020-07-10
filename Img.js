import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: ${({ inline }) => (inline ? "inline" : "block")};
`;

const StyledImg = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const Img = ({ width, height, src, inline }) => (
  <Wrapper inline={inline}>
    <StyledImg src={src} width={width} height={height} />
  </Wrapper>
);
