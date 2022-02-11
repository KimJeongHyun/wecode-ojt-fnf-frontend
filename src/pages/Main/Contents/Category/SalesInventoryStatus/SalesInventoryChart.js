import React from 'react';
import styled from 'styled-components';

import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    name: '21.12.12',
    a: 13907,
    b: 3781,
    c: 5657,
    pv: 9078,
    lastYearSearch: 3113,
  },
  {
    name: '21.12.19',
    a: 17016,
    b: 5378,
    c: 7246,
    pv: 9050,
    lastYearSearch: 2999,
  },
  {
    name: '21.12.26',
    a: 29780,
    b: 2605,
    c: 5322,
    pv: 9231,
    lastYearSearch: 2845,
  },
  {
    name: '22.01.02',
    a: 19280,
    b: 1374,
    c: 4550,
    pv: 10359,
    lastYearSearch: 2858,
  },
  {
    name: '22.01.09',
    a: 19699,
    b: 3001,
    c: 5155,
    pv: 11340,
    lastYearSearch: 3031,
  },
  {
    name: '22.01.16',
    a: 18302,
    b: 13907,
    c: 3975,
    pv: 10289,
    lastYearSearch: 3330,
  },
];

export default function SalesInventoryChart() {
  return (
    <ChartWrapper>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            right: 0,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" interval={0} fontSize={12} />
          <YAxis />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" barSize={20} fill="pink" />
          <Bar
            dataKey="lastYearSearch"
            yAxisId="right"
            barSize={20}
            fill="skyblue"
          />
          <Line type="monotone" dataKey="a" stroke="hotpink" />
          <Line type="monotone" dataKey="b" stroke="grey" />
          <Line type="monotone" dataKey="c" stroke="green" />
        </ComposedChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}

const ChartWrapper = styled.section`
  width: 100vw;
  height: 25vh;
`;
