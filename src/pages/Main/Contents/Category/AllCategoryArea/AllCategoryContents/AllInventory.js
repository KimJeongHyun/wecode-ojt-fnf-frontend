import { useContext } from 'react';
import { AllCategoryContext } from '../AllCategoryArea';

import ContentCard from '../../../../../../components/ContentCard/ContentCard';
import SalesInventoryChart from './Inventory/SalesInventoryChart';
import SalesInventoryTable from './Inventory/SalesInventoryTable';

import styled from 'styled-components';

import { SearchStatusData } from '../AllMockDatas';

export default function AllInventory() {
  const { isZoomInClicked } = useContext(AllCategoryContext);

  return (
    <InventoryWrapper>
      <InventoryTableWrapper isZoomInClicked={isZoomInClicked}>
        <ContentCard
          children={
            <SalesInventoryTable
              selfComp={
                <SalesInventoryTable
                  data={SearchStatusData.InventorySummaryData}
                />
              }
              data={SearchStatusData.InventorySummaryData}
            />
          }
        />
      </InventoryTableWrapper>
      <InventoryChartWrapper isZoomInClicked={isZoomInClicked}>
        <ContentCard
          children={
            <SalesInventoryChart
              selfComp={
                <SalesInventoryChart data={SearchStatusData.InventoryChart} />
              }
              data={SearchStatusData.InventoryChart}
            />
          }
        />
      </InventoryChartWrapper>
    </InventoryWrapper>
  );
}

const InventoryWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 2vh;
`;

const InventoryTableWrapper = styled.div`
  ${props => !props.isZoomInClicked && 'width:26vw;'};
  height: 44vh;
`;

const InventoryChartWrapper = styled.div`
  ${props => !props.isZoomInClicked && 'width:26vw; height:42vh;'};
  height: 42vh;
`;
