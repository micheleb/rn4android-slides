import React from "react";
import styled from "@emotion/styled";

const Styled = styled.div`
  display: flex;
  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: center;
  font-size: 128px;
  text-align: center;
`;

export const CenteredEmoji = ({ children }) => <Styled>{children}</Styled>;
