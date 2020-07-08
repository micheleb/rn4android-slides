import React from "react";
import styled from "@emotion/styled";
import { useThemeUI } from "theme-ui";
import { useDeck } from "mdx-deck";

const Styled = styled.div`
  display: flex;
  margin-bottom: 60px;
  z-index: 1;
  justify-content: center;
  div {
    width: 40vw;
    background-color: ${(props) =>
      props.theme.colors.progressBarBackground || "#fff"};
    height: 8px;
    border-radius: 4px;
    div {
      background-color: ${(props) => props.theme.colors.primary};
      width: ${(props) => `${props.progress || 0}%`};
    }
  }
`;

const toPercent = (index, length) => Math.ceil(((index + 1) * 100) / length);

export const ProgressBar = () => {
  const { theme } = useThemeUI();
  const { index, length } = useDeck();

  return (
    <Styled progress={toPercent(index, length)} theme={theme}>
      <div>
        <div />
      </div>
    </Styled>
  );
};
