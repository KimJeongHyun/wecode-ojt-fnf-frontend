import React from 'react';
import ContentCard from '../../components/ContentCard/ContentCard';
import SearchDataTable from './SearchDataTable';
import SearchDataChart from './SearchDataChart';
import SearchDataSmallChart from './SearchDataSmallChart';
import styled from 'styled-components';

export default function SearchStatus() {
  return (
    <Wrapper>
      <TableWrapper>
        <ContentCard children={<SearchDataTable />} />
        <ContentCard children={<SearchDataTable />} />
      </TableWrapper>
      <ChartWrapper>
        <SmallChartWrapper>
          <ContentCard children={<SearchDataSmallChart />} />
          <ContentCard children={<SearchDataSmallChart />} />
        </SmallChartWrapper>
        <BigChartWrapper>
          <ContentCard children={<SearchDataChart />} />
        </BigChartWrapper>
      </ChartWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 10vh 2vw 2vh 2vw;
  gap: 2vw;
  background-color: #efefef;
`;

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 32vw;
  gap: 2vh;
`;

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 62vw;
  gap: 2vh;
`;

const SmallChartWrapper = styled.div`
  display: flex;
  gap: 2vw;
  width: 80%;
`;

const BigChartWrapper = styled.div`
  display: flex;
  width: 62%;
`;
