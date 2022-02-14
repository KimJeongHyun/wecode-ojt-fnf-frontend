import React from 'react';
import SalesInventoryChart from './SalesInventoryChart';
import ContentCard from '../../../../../components/ContentCard/ContentCard';
import SalesInventoryTable from './SalesInventoryTable';
import SalesPerformanceTable from './SalesPerformanceTable';
import SalesPerformanceSeasonTable from './SalesPerformanceSeasonTable';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { staticData } from '../../../../../atom/staticData';

export default function SalesInventory() {
  const [atomStaticData, setAtomStaticData] = useRecoilState(staticData);

  return (
    <InventoryWrapper>
      <LeftWrapper>
        <WrapperOne>
          <ContentCard
            children={
              <SalesInventoryChart
                data={atomStaticData.salesWeeklySummary.data}
              />
            }
          />
        </WrapperOne>
        <WrapperTwo>
          <ContentCard
            children={
              <SalesInventoryTable
                data={atomStaticData.salesWeeklySummary.data}
              />
            }
          />
        </WrapperTwo>
      </LeftWrapper>
      <RightWrapper>
        <WrapperThree>
          <ContentCard
            children={
              <SalesPerformanceTable
                data={atomStaticData.salesSummaryAcc.data}
              />
            }
          />
        </WrapperThree>
        <WrapperFour>
          <ContentCard
            children={
              <SalesPerformanceSeasonTable
                data={atomStaticData.salesSummaryAccSesn.data}
              />
            }
          />
        </WrapperFour>
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

const WrapperOne = styled.div`
  /* :hover {
    border: 2px solid grey;
    border-radius: 5px;
    width: 1325px;
    height: 750px;
    position: fixed;
  } */
`;

const WrapperTwo = styled.div`
  /* :hover {
    border: 2px solid grey;
    border-radius: 5px;
    width: 1325px;
    height: 750px;
    position: fixed;
  } */
`;

const WrapperThree = styled.div`
  /* :hover {
    border: 2px solid grey;
    border-radius: 5px;
    width: 1325px;
    height: 750px;
    position: fixed;
  } */
`;

const WrapperFour = styled.div`
  /* :hover {
    border: 2px solid grey;
    border-radius: 5px;
    width: 1325px;
    height: 750px;
    position: fixed;
  } */
`;

const Frame = styled.div`
  overflow: hidden;
`;
