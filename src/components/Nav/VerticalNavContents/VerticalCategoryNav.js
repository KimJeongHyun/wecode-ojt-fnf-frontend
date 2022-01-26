import { useState, useContext } from 'react';

import styled, { ThemeContext } from 'styled-components';

const categoryBtnType = {
  1: 'all',
  2: '검색량',
  3: '판매재고',
  4: '유통채널',
};

export default function VerticalCategoryNav() {
  const themeContext = useContext(ThemeContext);

  const handleBtnClick = e => {
    const name = e.target.getAttribute('name');
    setIsBtnClicked(current => {
      const initObj = { ...current };
      const keys = Object.keys(current);

      for (let i = 0; i < keys.length; i++) {
        initObj[keys[i]] = false;
      }

      initObj[name] = true;
      return initObj;
    });
  };

  const [isBtnClicked, setIsBtnClicked] = useState({
    검색량: true,
    판매재고: false,
    유통채널: false,
  });

  return (
    <>
      {Object.entries(categoryBtnType).map(item => {
        return (
          <NavButton
            key={item[1]}
            name={item[1]}
            monoColors={themeContext.monoColors}
            pointColors={themeContext.pointColors}
            isBtnClicked={isBtnClicked[item[1]]}
            onClick={handleBtnClick}
          >
            {item[1].charAt(0).toUpperCase() + item[1].slice(1)}
          </NavButton>
        );
      })}
    </>
  );
}

const NavButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 10%;
  margin: 5px;
  border-bottom: 0.5px solid ${props => props.monoColors.smokeWhite};
  border-radius: 5px;
  background-color: ${props =>
    props.isBtnClicked ? props.pointColors.lightBlue : props.monoColors.gray};
  &:hover {
    background-color: ${props =>
      props.isBtnClicked
        ? props.pointColors.hoverBlue
        : props.monoColors.lightGray};
    color: ${props => (props.isBtnClicked ? '#fff' : '#000')};
  }

  word-break: break-all;
  cursor: pointer;
`;
