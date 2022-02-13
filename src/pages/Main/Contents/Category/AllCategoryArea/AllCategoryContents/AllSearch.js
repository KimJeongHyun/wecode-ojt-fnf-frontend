import ContentCard from '../../../../../../components/ContentCard/ContentCard';

import { staticData } from '../../../../../../atom/staticData';
import { useRecoilValue } from 'recoil';

import styled from 'styled-components';

import SearchCharts from './Search/SearchCharts';
import SearchCompetitorChart from './Search/SearchCompetitorChart';
import { useContext } from 'react';
import { AllCategoryContext } from '../AllCategoryArea';

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
            <SearchCompetitorChart
              selfComp={<SearchCompetitorChart data={competitorChartData} />}
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
