import React from 'react';
import styled from '@emotion/styled';
import { useThemeUI } from 'theme-ui';

const Styled = styled.div`
  position: fixed;
  display: flex;
  bottom: 20px;
  margin-top: 20px;
  z-index: 1;
  justify-content: center;
  div {
    width: 60vw;
    background-color: 'white';
    height: 30px;
    span {
      display: block;
      background-color: 'red';
      width: ${props => `${props.progress || 0}%`};
    }
  }
`;

export const ProgressDots = props => {
  const { theme } = useThemeUI();

  return (
    <Styled {...props} theme={theme}>
      <div>
        <span />
      </div>
    </Styled>
  )
}