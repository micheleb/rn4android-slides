import React from "react";
import styled from "@emotion/styled";

const Styled = styled.div`
  display: flex;
  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: center;
  font-size: ${({ fontSize }) => fontSize};
  text-align: center;
`;

export const Centered = ({ children, fontSize }) => (
  <Styled fontSize={fontSize || "128px"}>{children}</Styled>
);
