import { staticData } from '../../../../../../atom/staticData';
import { useRecoilValue } from 'recoil';

import styled from 'styled-components';

import AllSalesChannelChart from './Channel/AllSalesChannelChart';
import AllSalesChannelTable from './Channel/AllSalesChannelTable';

export default function AllChannel() {
  const atomStaticData = useRecoilValue(staticData);
  const channelChartData = atomStaticData.weeklyDistributionTimeseries.data;
  const channelTableData = atomStaticData.weeklyDistributionTable.data;

  return (
    <ChannelWrapper>
      <ChannelAboveArea>
        <AllSalesChannelChart
          selfComp={<AllSalesChannelChart data={channelChartData} />}
          data={channelChartData}
        />
      </ChannelAboveArea>
      <ChannelBottomArea>
        <AllSalesChannelTable
          selfComp={<AllSalesChannelTable data={channelTableData} />}
          data={channelTableData}
        />
      </ChannelBottomArea>
    </ChannelWrapper>
  );
}

const ChannelWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 2vh;
`;

const ChannelAboveArea = styled.div`
  width: 26vw;
  height: 44vh;
`;

const ChannelBottomArea = styled.div`
  height: 42vh;
`;
