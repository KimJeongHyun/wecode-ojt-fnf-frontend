import React from 'react';
import SalesInventoryChart from './SalesInventoryChart';
import ContentCard from '../../../../../components/ContentCard/ContentCard';
import SalesInventoryTable from './SalesInventoryTable';
import SalesPerformanceTable from './SalesPerformanceTable';
import SalesPerformanceSeasonTable from './SalesPerformanceSeasonTable';
import styled from 'styled-components';

export default function SalesInventory() {
  return (
    <InventoryWrapper>
      <LeftWrapper>
        <ContentCard children={<SalesInventoryChart />} />
        <ContentCard children={<SalesInventoryTable />} />
      </LeftWrapper>
      <RightWrapper>
        <ContentCard children={<SalesPerformanceTable />} />
        <ContentCard children={<SalesPerformanceSeasonTable />} />
      </RightWrapper>
    </InventoryWrapper>
  );
}

const InventoryWrapper = styled.section`
  width: 90vw;
  height: 100%;
  display: flex;
  gap: 2vw;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 46%;
  gap: 2vh;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 52%;
  height: 46%;
  gap: 2vh;
`;
