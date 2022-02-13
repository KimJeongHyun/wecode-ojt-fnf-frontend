import React, { useState } from 'react';

import { selectedSideMenu } from '../../../../../atom/sideNav';
import { useRecoilState } from 'recoil';

import styled from 'styled-components';

import AllSearch from './AllCategoryContents/AllSearch';
import AllInventory from './AllCategoryContents/AllInventory';
import AllChannel from './AllCategoryContents/AllChannel';

import FullRangeContentModal from '../../../../../components/FullRangeContentsModal/FullRangeContentsModal';

const CATEGORY_EACH_PAGES = {
  검색량: <AllSearch />,
  주간실적: <AllInventory />,
  판매채널: <AllChannel />,
};
export const AllCategoryContext = React.createContext();

export default function AllCategoryData() {
  const [isZoomInClicked, setIsZoomInClicked] = useState(false);
  const [clickedContent, setClickedContent] = useState('');
  const [, setSelectedSideMenu] = useRecoilState(selectedSideMenu);

  const handleSelectedArea = event => {
    const name = event.target.getAttribute('name');
    setSelectedSideMenu(name);
  };
  return (
    <AllCategoryWrapper>
      <AllCategoryContext.Provider
        value={{ isZoomInClicked, setIsZoomInClicked, setClickedContent }}
      >
        <FullRangeContentModal
          clickedContent={clickedContent}
          isZoomInClicked={isZoomInClicked}
          setIsZoomInClicked={setIsZoomInClicked}
        />
        <EachPageView>
          {Object.entries(CATEGORY_EACH_PAGES).map((item, index) => (
            <EachPageWrapper key={item[0]}>
              <EachPageTitle name={item[0]} onClick={handleSelectedArea}>
                {item[0]}
              </EachPageTitle>
              <EachPageContents>{item[1]}</EachPageContents>
            </EachPageWrapper>
          ))}
        </EachPageView>
      </AllCategoryContext.Provider>
    </AllCategoryWrapper>
  );
}
const AllCategoryWrapper = styled.section`
  width: 100%;
  height: 100%;
`;

const EachPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 33%;
`;

const EachPageView = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 10px;
`;

const EachPageTitle = styled.p`
  width: 100%;
  text-align: center;
  font-size: 1.1em;
  font-weight: 700;
  cursor: pointer;
`;
const EachPageContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10px;
`;
