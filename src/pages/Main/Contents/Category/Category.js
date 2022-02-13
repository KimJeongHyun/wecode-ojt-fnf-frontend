import { useState } from 'react';
import styled from 'styled-components';
import useToggleContents from './hook/useToggleContents';
import { isDataLoaded, dataLoadedCount } from '../../../../atom/staticData';
import { useRecoilValue } from 'recoil';

import { API } from '../../../../components/Nav/HorizonNavContents/contants/api';

import SearchStatus from './SearchStatus/SearchStatus';
import SalesInventory from './SalesInventoryStatus/SalesInventory';
import AllCategoryData from './AllCategoryArea/AllCategoryArea';

import useInterval from '../../../../hook/useInterval';

const SELECTED_COMPONENTS = {
  all: <AllCategoryData />,
  검색량: <SearchStatus />,
  주간실적: <SalesInventory />,
  판매채널: 'channel',
};

const waitString = ['원단을 고르는 중', '공장 가공 중', '배송 중', '도착 직전'];

export default function Category() {
  const [toggleDataLoadText, setToggleDataLoadText] = useState(false);
  const { toggleContents, userSelectedSideMenu } = useToggleContents();

  const dataLoaded = useRecoilValue(isDataLoaded);
  const atomDataLoadedCount = useRecoilValue(dataLoadedCount);
  const apiLength = API.length;

  const progressRate = atomDataLoadedCount / apiLength;

  const firstCondition = progressRate >= 0 && progressRate < 0.25;
  const secondCondition = progressRate >= 0.25 && progressRate < 0.5;
  const thirdCondition = progressRate >= 0.5 && progressRate < 0.75;
  const finalCondition = progressRate >= 0.75;

  useInterval(() => {
    setToggleDataLoadText(!toggleDataLoadText);
  }, 1000);

  return (
    <CategoryWrapper toggleContents={toggleContents}>
      {dataLoaded
        ? SELECTED_COMPONENTS[userSelectedSideMenu]
        : atomDataLoadedCount === 0 &&
          '검색 버튼을 눌러 데이터를 받아오면 동작합니다.'}
      {atomDataLoadedCount > 0 && !dataLoaded && (
        <DataLoadTexts>
          <DataLoadWaitText toggleDataLoadText={toggleDataLoadText}>
            {firstCondition
              ? waitString[0]
              : secondCondition
              ? waitString[1]
              : thirdCondition
              ? waitString[2]
              : finalCondition && waitString[3]}
          </DataLoadWaitText>
          <DataLoadCount>
            {atomDataLoadedCount} / {apiLength}
          </DataLoadCount>
        </DataLoadTexts>
      )}
    </CategoryWrapper>
  );
}
const CategoryWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 1vw;
  opacity: ${props => (props.toggleContents ? 0 : 1)};
  transition: ${props => (props.toggleContents ? '' : 'opacity 0.1s ease')};
`;

const DataLoadTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5vh;
`;

const DataLoadCount = styled.p`
  text-align: center;
`;

const DataLoadWaitText = styled.p`
  transition: opacity 0.4s ease;

  opacity: ${props => (props.toggleDataLoadText ? '1' : '0')};
`;
