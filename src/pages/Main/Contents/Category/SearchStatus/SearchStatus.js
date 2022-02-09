import React from 'react';
// import ContentCard from '../../../../../components/ContentCard/ContentCard';
import { Card } from '../../../../../components/ContentCard/ContentCard';
import SearchWeeklyTable from './SearchWeeklyTable';
import SearchSelectedTable from './SearchSelectedTable';
import SearchCompetitorChart from './SearchCompetitorChart';
import SearchNormalChart from './SearchNormalChart';
import SearchOwnChart from './SearchOwnChart';
import styled from 'styled-components';
import PageTitle from '../../../../../components/PageTitle/PageTitle';

export default function SearchStatus() {
  return (
    <Wrapper>
      <PageTitle title="마켓검색량" />
      <SearchDataViews>
        <TableWrapper>
          <CustomCard children={<SearchWeeklyTable />} />
          <CustomCard children={<SearchSelectedTable />} />
        </TableWrapper>
        <ChartWrapper>
          <NormalOwnChartWrapper>
            <CustomCard children={<SearchNormalChart />} />
            <CustomCard children={<SearchOwnChart />} />
          </NormalOwnChartWrapper>
          <CompetitorChartWrapper>
            <CustomCard children={<SearchCompetitorChart />} />
          </CompetitorChartWrapper>
        </ChartWrapper>
      </SearchDataViews>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 1vw;
`;

const SearchDataViews = styled.div`
  display: flex;
  height: 90vh;
  gap: 2vw;
`;

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

const NormalOwnChartWrapper = styled.div`
  display: flex;
  height: 49%;
  gap: 2vw;
`;

const CompetitorChartWrapper = styled.div`
  display: flex;
  height: 45%;
`;

const CustomCard = styled(Card)`
  background-color: blue;
`;
