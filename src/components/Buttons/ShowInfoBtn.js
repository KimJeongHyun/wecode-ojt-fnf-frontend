import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

export default function ShowInfoBtn({ clickMethod }) {
  const themeContext = useContext(ThemeContext);

  return (
    <Buttons
      onClick={clickMethod}
      monoColors={themeContext.monoColors}
      cardColors={themeContext.cardColors}
      pointColors={themeContext.pointColors}
    >
      검색
    </Buttons>
  );
}

const Buttons = styled.button`
  width: 140px;
  height: 50px;
  color: ${props => props.monoColors.deepGray};
  background-color: white;
  border: 2px solid ${props => props.cardColors.borderSmoke};
  border-radius: 5px;
  font-size: 18px;

  :hover {
    color: white;
    background-color: ${props => props.pointColors.green};
    border: none;
    border-radius: 5px;
  }
`;
