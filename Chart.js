import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  height: 80%;
  align-items: center;
  justify-content: space-between;
`;

const Step = styled.div`
  display: inline;
`;

export const Chart = ({ children }) => (
  <Wrapper>
    {children.map((child, i) => (
      <Step>{child}</Step>
    ))}
  </Wrapper>
);
