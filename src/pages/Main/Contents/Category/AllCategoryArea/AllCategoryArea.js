import { selectedSideMenu } from '../../../../../atom/sideNav';
import { useRecoilState } from 'recoil';

import styled from 'styled-components';

import PageTitle from '../../../../../components/PageTitle/PageTitle';

import AllSearch from './AllCategoryContents/AllSearch';
import AllInventory from './AllCategoryContents/AllInventory';
import AllChannel from './AllCategoryContents/AllChannel';

const CATEGORY_EACH_PAGES = {
  검색량: <AllSearch />,
  주간실적: <AllInventory />,
  판매채널: <AllChannel />,
};

export default function AllCategoryData() {
  const [, setSelectedSideMenu] = useRecoilState(selectedSideMenu);

  const handleSelectedArea = event => {
    const name = event.target.getAttribute('name');
    setSelectedSideMenu(name);
  };

  return (
    <AllCategoryWrapper>
      <PageTitle title="전체 영역" />
      <EachPageView>
        {Object.entries(CATEGORY_EACH_PAGES).map((item, index) => (
          <EachPageWrapper key={item[0]}>
            <EachPageTitle>{item[0]}</EachPageTitle>
            <EachPageContents name={item[0]} onClick={handleSelectedArea}>
              {item[1]}
            </EachPageContents>
          </EachPageWrapper>
        ))}
      </EachPageView>
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
`;

const EachPageTitle = styled.p`
  width: 100%;
  text-align: center;
`;
const EachPageContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
