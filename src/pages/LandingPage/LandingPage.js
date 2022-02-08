import { useContext } from 'react';

import { selectedArea } from '../../atom/area';
import { useSetRecoilState } from 'recoil';

import styled, { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  // eslint-disable-next-line no-unused-vars
  const themeContext = useContext(ThemeContext);
  const setSelectedArea = useSetRecoilState(selectedArea);

  const handleSelectedArea = e => {
    const name = e.target.getAttribute('name');
    setSelectedArea(name);
  };

  return (
    <LandingPageWrapper>
      <CommonTextSection
        to="/dashboard"
        name="category"
        onClick={handleSelectedArea}
      >
        <CommonText>Category</CommonText>
      </CommonTextSection>
      <CommonTextSection to="/">
        <CommonText>Style Ranking</CommonText>
      </CommonTextSection>
    </LandingPageWrapper>
  );
}

const LandingPageWrapper = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.backgroundColors.backColor};
`;

const CommonTextSection = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 100%;
  background-color: ${props => props.theme.backgroundColors.backColor};
  &:hover {
    background-color: ${props => props.theme.monoColors.gray};
  }
  cursor: pointer;
`;
const CommonText = styled.span`
  width: max-content;
  color: ${props => props.theme.monoColors.black};
`;
