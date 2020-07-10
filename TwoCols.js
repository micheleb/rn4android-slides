import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
`;

const Right = styled.div`
  margin-left: 1em;
`;

export const TwoCols = (props) => (
  <Wrapper>
    <div>{props.children[0]}</div>
    <Right>{props.children[1]}</Right>
  </Wrapper>
);
