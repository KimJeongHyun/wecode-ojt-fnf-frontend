import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { isSideNavActive } from '../../atom/sideNav';
import { useRecoilState } from 'recoil';

import { FcDownLeft, FcDownRight } from 'react-icons/fc';

import styled, { ThemeContext } from 'styled-components';

import VerticalCategoryNav from './VerticalNavContents/VerticalCategoryNav';

const SIDE_COMPONENTS = {
  '/category': <VerticalCategoryNav />,
  '/styleranking': '',
};

export default function VerticalNav() {
  const themeContext = useContext(ThemeContext);
  const location = useLocation();

  const [isNavActive, setIsNavActive] = useRecoilState(isSideNavActive);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <NavWrapper
      isNavActive={isNavActive}
      backgroundColors={themeContext.backgroundColors}
    >
      <NavContainer toggleNav={isNavActive}>
        <NavContents>{SIDE_COMPONENTS[location.pathname]}</NavContents>
        <NavToggleButton onClick={toggleNav}>
          {isNavActive ? <FcDownLeft /> : <FcDownRight />}
        </NavToggleButton>
      </NavContainer>
    </NavWrapper>
  );
}

const NavWrapper = styled.section`
  position: fixed;
  width: ${props => (props.isNavActive ? '10vw' : '4vw')};
  height: 100vh;
  background-color: #377ef9;
  transition: width 0.4s ease-in-out;
  font-size: 1.2vw;
  z-index: 3;
`;

const NavContainer = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  padding-top: 30px;
`;

const NavContents = styled.div`
  flex-basis: 90%;
`;

const NavToggleButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  cursor: pointer;

  transition: font-size 0.2s ease;

  &:hover {
    font-size: 1.3em;
  }

  svg {
    polygon {
      fill: white;
    }
    path {
      fill: white;
    }
  }
`;
