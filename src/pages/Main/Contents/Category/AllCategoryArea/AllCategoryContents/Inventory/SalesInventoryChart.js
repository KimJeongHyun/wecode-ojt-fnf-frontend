import React, { useContext } from 'react';
import styled from 'styled-components';

import { AllCategoryContext } from '../../AllCategoryArea';

import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

import ContentZoomIn from '../../../../../../../components/ContentToggle/ContentZoomIn';

export default function SalesInventoryChart({ selfComp, data }) {
  const { isZoomInClicked } = useContext(AllCategoryContext);

  return (
    <>
      {!isZoomInClicked && <ContentZoomIn name={selfComp} />}
      <ChartWrapper>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{
              top: 20,
              left: 10,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="end_dt" fontSize={12} />
            <YAxis />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />

            <Bar dataKey="search_qty_cy" barSize={20} fill="pink" />
            <Bar
              dataKey="search_qty_py"
              yAxisId="right"
              barSize={20}
              fill="skyblue"
            />
            <Line type="monotone" dataKey="sale_qty_kor_ttl" stroke="hotpink" />
            <Line type="monotone" dataKey="sale_qty_kor_ttl_py" stroke="grey" />
            <Line
              type="monotone"
              dataKey="sale_qty_kor_ttl_py2"
              stroke="green"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </>
  );
}

const ChartWrapper = styled.section`
  height: 100%;
  padding: 10px;
`;
