import styled from 'styled-components';
import useToggleContents from './hook/useToggleContents';
import { isDataLoaded } from '../../../../atom/staticData';
import { useRecoilValue } from 'recoil';

import SearchStatus from './SearchStatus/SearchStatus';
import SalesInventory from './SalesInventoryStatus/SalesInventory';
import AllCategoryData from './AllCategoryArea/AllCategoryArea';

const SELECTED_COMPONENTS = {
  all: <AllCategoryData />,
  검색량: <SearchStatus />,
  주간실적: <SalesInventory />,
  판매채널: 'channel',
};

export default function Category() {
  const { toggleContents, userSelectedSideMenu } = useToggleContents();

  const dataLoaded = useRecoilValue(isDataLoaded);

  return (
    <CategoryWrapper toggleContents={toggleContents}>
      {!dataLoaded
        ? SELECTED_COMPONENTS[userSelectedSideMenu]
        : '검색 버튼을 눌러 데이터를 받아오면 동작합니다.'}
    </CategoryWrapper>
  );
}
const CategoryWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 1vw;
  opacity: ${props => (props.toggleContents ? 0 : 1)};
  transition: ${props => (props.toggleContents ? '' : 'opacity 0.1s ease')};
`;
