import React from "react";
import styled from "@emotion/styled";
import { ArrowSvg } from "./ArrowSvg";
import { useThemeUI } from "theme-ui";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Label = styled.div`
  font-size: 70%;
  margin-bottom: 12px;
`;

export const ArrowRight = ({ children, color }) => {
  const { theme } = useThemeUI();
  return (
    <Wrapper>
      <Label>{children}</Label>
      <ArrowSvg color={color || theme.colors.primary} width="120" />
    </Wrapper>
  );
};
