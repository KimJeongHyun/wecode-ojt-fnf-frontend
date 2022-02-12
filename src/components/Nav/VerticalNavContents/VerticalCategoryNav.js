import { useContext } from 'react';

import { selectedSideMenu, isSideNavActive } from '../../../atom/sideNav';
import { useRecoilState, useRecoilValue } from 'recoil';

import styled, { ThemeContext } from 'styled-components';

import { AiOutlineHome } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { GiReceiveMoney } from 'react-icons/gi';
import { FiGlobe } from 'react-icons/fi';

const categoryBtnType = {
  1: 'all',
  2: '검색량',
  3: '주간실적',
  4: '판매채널',
};

const categoryBtnTypeIcon = {
  all: <AiOutlineHome />,
  검색량: <BsSearch />,
  주간실적: <GiReceiveMoney />,
  판매채널: <FiGlobe />,
};

export default function VerticalCategoryNav() {
  const themeContext = useContext(ThemeContext);
  const [isSelectedSideMenu, setSelectedSideMenu] =
    useRecoilState(selectedSideMenu);

  const handleBtnClick = e => {
    const name = e.target.getAttribute('name');

    setSelectedSideMenu(name);
  };
  const isNavActive = useRecoilValue(isSideNavActive);

  return (
    <NavButtonsWrapper>
      {Object.entries(categoryBtnType).map(item => {
        return (
          <NavButton
            key={item[1]}
            name={item[1]}
            monoColors={themeContext.monoColors}
            pointColors={themeContext.pointColors}
            isNavActive={isNavActive}
            isSelectedSideMenu={isSelectedSideMenu}
            onClick={handleBtnClick}
          >
            <NavButtonText>
              {isNavActive ? (
                <>
                  {categoryBtnTypeIcon[item[1]]}
                  {item[1].charAt(0).toUpperCase() + item[1].slice(1)}
                </>
              ) : (
                categoryBtnTypeIcon[item[1]]
              )}
            </NavButtonText>
          </NavButton>
        );
      })}
    </NavButtonsWrapper>
  );
}

const NavButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 2%;
`;

const NavButton = styled.div`
  ${props =>
    props.isNavActive ? `padding-left:15%` : `justify-content:center`};
  display: flex;
  align-items: center;
  height: 8%;
  font-size: ${props =>
    props.isSelectedSideMenu === props.name ? '0.95em' : '0.8em'};
  font-weight: 700;
  border-radius: 5px;
  color: ${props =>
    props.isSelectedSideMenu === props.name ? '#fff' : '#b0c8e8'};

  &:hover {
    color: white;
    font-size: 0.95em;
  }

  word-break: keep-all;
  overflow: hidden;
  cursor: pointer;
  transition: color 0.4s ease, font-size 0.1s ease;
`;

const NavButtonText = styled.div`
  display: flex;
  gap: 10px;
  pointer-events: none;
`;
