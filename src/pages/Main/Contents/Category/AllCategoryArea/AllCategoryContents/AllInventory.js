import { useContext } from 'react';

import { staticData } from '../../../../../../atom/staticData';
import { useRecoilValue } from 'recoil';

import { AllCategoryContext } from '../AllCategoryArea';

import styled from 'styled-components';

import ContentCard from '../../../../../../components/ContentCard/ContentCard';
import SalesInventoryChart from './Inventory/SalesInventoryChart';
import SalesInventoryTable from './Inventory/SalesInventoryTable';

export default function AllInventory() {
  const { isZoomInClicked } = useContext(AllCategoryContext);

  const atomStaticData = useRecoilValue(staticData);
  const { data } = atomStaticData.salesWeeklySummary;

  return (
    <InventoryWrapper>
      <InventoryTableWrapper isZoomInClicked={isZoomInClicked}>
        <ContentCard
          children={
            <SalesInventoryTable
              selfComp={<SalesInventoryTable data={data} />}
              data={data}
            />
          }
        />
      </InventoryTableWrapper>
      <InventoryChartWrapper isZoomInClicked={isZoomInClicked}>
        <ContentCard
          children={
            <SalesInventoryChart
              selfComp={<SalesInventoryChart data={data} />}
              data={data}
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
