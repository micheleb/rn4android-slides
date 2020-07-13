import React from "react";
import styled from "@emotion/styled";
import { useThemeUI } from "theme-ui";

const Wrapper = styled.div`
  border-width: 6px;
  border-style: solid;
  border-color: ${({ borderGradient, borderColor, theme }) =>
    borderGradient ? undefined : borderColor || theme.colors.primary};
  border-image-source: ${({ borderGradient }) =>
    borderGradient
      ? `linear-gradient(to left, ${borderGradient.right}, ${borderGradient.left})`
      : undefined};
  border-image-slice: ${({ borderGradient }) =>
    borderGradient ? 1 : undefined};
  border-radius: 16px;
  text-align: center;
  line-height: 1.2;
  padding: 1.2em 1.5em;
`;

export const RoundedBox = ({ borderColor, borderGradient, children }) => {
  const { theme } = useThemeUI();
  return (
    <Wrapper
      borderColor={borderColor}
      borderGradient={borderGradient}
      theme={theme}
    >
      {children}
    </Wrapper>
  );
};
