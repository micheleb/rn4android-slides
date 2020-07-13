import React from "react";
import styled from "@emotion/styled";
import { useSteps } from "mdx-deck";

const Wrapper = styled.div`
  display: flex;
  height: 80%;
  align-items: center;
  justify-content: space-between;
`;

const Step = styled.div`
  display: inline;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
`;

export const StepChart = ({ children }) => {
  const step = useSteps(children.length);

  return (
    <Wrapper>
      {children.map((child, i) => (
        <Step visible={i < step}>{child}</Step>
      ))}
    </Wrapper>
  );
};
