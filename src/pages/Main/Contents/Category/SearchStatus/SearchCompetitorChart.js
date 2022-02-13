import React from 'react';
import styled from 'styled-components';
import { CgMenuRight } from 'react-icons/cg';

import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from 'recharts';

const BRAND_NAME = [
  { name: 'MLB', stroke: '#377ef9' },
  { name: '구찌', stroke: '#ffd688' },
  { name: '나이키', stroke: '#66dd83' },
  { name: '루이비통', stroke: '#ff8c8c' },
  { name: '버버리', stroke: '#5877ad' },
  { name: '프라다', stroke: '#67a8a6' },
];

export default function SearchCompetitorChart() {
  const data = [
    {
      end_dt: '21.12.12',
      MLB: 6287,
      구찌: 69334,
      나이키: 12541,
      루이비통: 94919,
      버버리: 34418,
      프라다: 46252,
    },
    {
      end_dt: '21.12.19',
      MLB: 6365,
      구찌: 73840,
      나이키: 12093,
      루이비통: 84662,
      버버리: 32278,
      프라다: 45355,
    },
    {
      end_dt: '21.12.26',
      MLB: 6812,
      구찌: 68469,
      나이키: 12230,
      루이비통: 102433,
      버버리: 35038,
      프라다: 54558,
    },
    {
      end_dt: '22.01.02',
      MLB: 7702,
      구찌: 69670,
      나이키: 14668,
      루이비통: 99593,
      버버리: 35903,
      프라다: 54262,
    },
    {
      end_dt: '22.01.09',
      MLB: 8510,
      구찌: 71453,
      나이키: 19314,
      루이비통: 97277,
      버버리: 36290,
      프라다: 53809,
    },
    {
      end_dt: '22.01.16',
      MLB: 7400,
      구찌: 72353,
      나이키: 20594,
      루이비통: 100281,
      버버리: 36184,
      프라다: 54906,
    },
    {
      end_dt: '22.01.23',
      MLB: 7387,
      구찌: 70621,
      나이키: 18384,
      루이비통: 100292,
      버버리: 37213,
      프라다: 56159,
    },
    {
      end_dt: '22.01.30',
      MLB: 7131,
      구찌: 65586,
      나이키: 18528,
      루이비통: 91886,
      버버리: 35522,
      프라다: 52718,
    },
    {
      end_dt: '22.02.06',
      MLB: 9592,
      구찌: 71116,
      나이키: 26856,
      루이비통: 107253,
      버버리: 42205,
      프라다: 59638,
    },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <CustomTooltips>
          <Label>{`${label} / MLB : ${payload[0].value}`}</Label>
          {payload.map(item => (
            <DataKeys
              key={item.dataKey}
            >{`${item.dataKey} : ${item.value}`}</DataKeys>
          ))}
        </CustomTooltips>
      );
    }
    return null;
  };

  return (
    <ChartWrapper>
      <ChartTitle>
        경쟁사 검색어 추이
        <CgMenuRight />
      </ChartTitle>
      <ResponsiveContainer width="100%" height="90%">
        <ComposedChart
          data={data}
          margin={{ top: 26, right: 20, left: 10, bottom: 70 }}
        >
          <CartesianGrid horizontal={false} stroke="#efefef" />
          <YAxis
            tick={{ fontSize: 12 }}
            tickLine={{ stroke: 'none' }}
            stroke="#7b7b7b"
            dx={-6}
            axisLine={false}
          />
          <XAxis
            dataKey="end_dt"
            stroke="#7b7b7b"
            axisLine={false}
            tick={{ fontSize: 12 }}
            tickLine={{ stroke: 'none' }}
            dy={12}
          />
          <Legend
            verticalAlign="top"
            iconSize={10}
            iconType="circle"
            align="left"
            wrapperStyle={{
              left: 22,
              top: -10,
              fontSize: 16,
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          {BRAND_NAME.map(item => (
            <Line
              key={item.name}
              dataKey={item.name}
              stroke={item.stroke}
              dot={false}
              type="monotone"
              strokeWidth={2.2}
            />
          ))}
        </ComposedChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}

const ChartWrapper = styled.div`
  height: 100%;
`;

const ChartTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 24px 24px 24px;
  font-size: 22px;
  font-weight: 800;
  color: white;
  background-color: #377ef9;
  border-radius: 7px 7px 0 0;
  margin-bottom: 30px;

  svg:hover {
    cursor: pointer;
  }
`;

const CustomTooltips = styled.div`
  background-color: #06183a;
  border: 1px solid #efefef;
  border-radius: 7px;
  /* color: white; */
  padding: 16px;
`;

const Label = styled.p`
  padding: 16px;
  font-size: 18px;
  font-weight: 800;
  color: white;
`;

const DataKeys = styled.div`
  padding: 10px;
  font-size: 14px;
  font-weight: 200;
  color: #6391f4;
`;
