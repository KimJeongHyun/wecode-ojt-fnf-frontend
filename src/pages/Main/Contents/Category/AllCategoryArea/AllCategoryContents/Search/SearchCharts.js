import React, { useContext } from 'react';
import { AllCategoryContext } from '../../AllCategoryArea';

import styled from 'styled-components';

import ContentZoomIn from '../../../../../../../components/ContentToggle/ContentZoomIn';
import SearchEachChart from './SearchEachChart';

export default function SearchCharts({ selfComp, data }) {
  const { isZoomInClicked } = useContext(AllCategoryContext);

  return (
    <>
      {!isZoomInClicked && <ContentZoomIn name={selfComp} />}
      <SearchEachChartWrapper>
        <SearchEachChart
          chartName="일반"
          data={data.searchCountTimeseriesBrand.data}
        />
        <SearchEachChart
          chartName="MLB"
          data={data.searchCountTimeseriesOverall.data}
        />
      </SearchEachChartWrapper>
    </>
  );
}

const SearchEachChartWrapper = styled.div`
  display: flex;
  height: 100%;
  padding: 10px;
`;
