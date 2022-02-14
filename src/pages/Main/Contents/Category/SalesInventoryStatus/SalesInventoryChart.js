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

// const data = [
//   {
//     end_dt: '21.12.12',
//     sale_qty_kor_ttl: 122,
//     sale_qty_kor_ttl_py: 498,
//     sale_qty_kor_ttl_py2: 1628,
//     os: 0,
//     stor_qty_kor: 23385,
//     stock_qty_kor: 136167,
//     search_qty_cy: 9248,
//     search_qty_py: 12139,
//   },
//   {
//     end_dt: '21.12.19',
//     sale_qty_kor_ttl: 1227,
//     sale_qty_kor_ttl_py: 634,
//     sale_qty_kor_ttl_py2: 1321,
//     os: 1908,
//     stor_qty_kor: 16003,
//     stock_qty_kor: 150749,
//     search_qty_cy: 8411,
//     search_qty_py: 11971,
//   },
//   {
//     end_dt: '21.12.26',
//     sale_qty_kor_ttl: 7782,
//     sale_qty_kor_ttl_py: 1440,
//     sale_qty_kor_ttl_py2: 2454,
//     os: 1800,
//     stor_qty_kor: 6703,
//     stock_qty_kor: 149650,
//     search_qty_cy: 7759,
//     search_qty_py: 10782,
//   },
//   {
//     end_dt: '22.01.02',
//     sale_qty_kor_ttl: 12571,
//     sale_qty_kor_ttl_py: 3425,
//     sale_qty_kor_ttl_py2: 3060,
//     os: 200,
//     stor_qty_kor: 6845,
//     stock_qty_kor: 142427,
//     search_qty_cy: 7205,
//     search_qty_py: 10138,
//   },
//   {
//     end_dt: '22.01.09',
//     sale_qty_kor_ttl: 13588,
//     sale_qty_kor_ttl_py: 11840,
//     sale_qty_kor_ttl_py2: 6594,
//     os: 0,
//     stor_qty_kor: 6901,
//     stock_qty_kor: 131462,
//     search_qty_cy: 7314,
//     search_qty_py: 9856,
//   },
//   {
//     end_dt: '22.01.16',
//     sale_qty_kor_ttl: 9054,
//     sale_qty_kor_ttl_py: 12888,
//     sale_qty_kor_ttl_py2: 5252,
//     os: 2000,
//     stor_qty_kor: 9540,
//     stock_qty_kor: 132542,
//     search_qty_cy: 7426,
//     search_qty_py: 9718,
//   },
//   {
//     end_dt: '22.01.23',
//     sale_qty_kor_ttl: 9191,
//     sale_qty_kor_ttl_py: 9534,
//     sale_qty_kor_ttl_py2: 2871,
//     os: 0,
//     stor_qty_kor: 16426,
//     stock_qty_kor: 141205,
//     search_qty_cy: 7300,
//     search_qty_py: 10317,
//   },
//   {
//     end_dt: '22.01.30',
//     sale_qty_kor_ttl: 6342,
//     sale_qty_kor_ttl_py: 11535,
//     sale_qty_kor_ttl_py2: 3242,
//     os: 100,
//     stor_qty_kor: 16960,
//     stock_qty_kor: 152254,
//     search_qty_cy: 6640,
//     search_qty_py: 10521,
//   },
//   {
//     end_dt: '22.02.06',
//     sale_qty_kor_ttl: 7257,
//     sale_qty_kor_ttl_py: 11616,
//     sale_qty_kor_ttl_py2: 2934,
//     os: 0,
//     stor_qty_kor: 8380,
//     stock_qty_kor: 152673,
//     search_qty_cy: 8091,
//     search_qty_py: 11705,
//   },
// ];

export default function SalesInventoryChart({ data }) {
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
          <XAxis dataKey="end_dt" interval={0} fontSize={10} />
          <YAxis />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Bar dataKey="search_qty_cy" barSize={20} fill="#EBCAC7" />
          <Bar
            dataKey="search_qty_py"
            yAxisId="right"
            barSize={20}
            fill="#CADBE5"
          />
          <Line type="monotone" dataKey="sale_qty_kor_ttl" stroke="#E1C1E5" />
          <Line
            type="monotone"
            dataKey="sale_qty_kor_ttl_py"
            stroke="#CCEEFF"
          />
          <Line type="monotone" dataKey="sale_qty_kor_ttl_py2" stroke="grey" />
        </ComposedChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}

const ChartWrapper = styled.section`
  width: 36vw;
  height: 46vh;
`;
