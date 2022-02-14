import { useContext } from 'react';

import { staticData } from '../../../../../../atom/staticData';
import { useRecoilValue } from 'recoil';

import { AllCategoryContext } from '../AllCategoryArea';

import styled from 'styled-components';

import ContentCard from '../../../../../../components/ContentCard/ContentCard';
import SearchCharts from './Search/SearchCharts';
import AllSearchCompetitorChart from './Search/AllSearchCompetitorChart';

export default function AllSearch() {
  const { isZoomInClicked } = useContext(AllCategoryContext);

  const atomStaticData = useRecoilValue(staticData);
  const competitorChartData =
    atomStaticData.searchCountTimeseriesCompetitors.data;

  return (
    <SearchWrapper>
      <SearchCompetitorWrapper isZoomInClicked={isZoomInClicked}>
        <ContentCard
          children={
            <AllSearchCompetitorChart
              selfComp={<AllSearchCompetitorChart data={competitorChartData} />}
              data={competitorChartData}
            />
          }
        />
      </SearchCompetitorWrapper>

      <SearchChartAreaWrapper>
        <ContentCard
          children={
            <SearchCharts
              selfComp={<SearchCharts data={atomStaticData} />}
              data={atomStaticData}
            />
          }
        />
      </SearchChartAreaWrapper>
    </SearchWrapper>
  );
}

const SearchWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 2vh;
`;
const SearchCompetitorWrapper = styled.div`
  ${props => !props.isZoomInClicked && 'width:26vw;'};
  height: 52vh;
`;

const SearchChartAreaWrapper = styled.div`
  height: 34vh;
`;
