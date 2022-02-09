import React from 'react';
import styled from 'styled-components';
import {
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from 'recharts';

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
          <Label>{`${label} : ${payload[0].value}`}</Label>
          {payload.map(item => (
            <DataKeys key="end_dt">{`${item.dataKey} : ${item.value}`}</DataKeys>
          ))}
        </CustomTooltips>
      );
    }
    return null;
  };

  return (
    <ChartWrapper>
      <ChartTitle>경쟁사 검색어 추이</ChartTitle>
      <ResponsiveContainer width="100%" height="100%" aspect={2.8 / 1}>
        <ComposedChart
          data={data}
          margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        >
          <CartesianGrid horizontal={false} stroke="#efefef" />
          <YAxis
            tick={{ fontSize: 12 }}
            tickLine={{ stroke: 'none' }}
            stroke="#7b7b7b"
            axisLine={false}
            dx={-12}
          />
          <XAxis
            dataKey="end_dt"
            stroke="#7b7b7b"
            axisLine={false}
            tick={{ fontSize: 12 }}
            tickLine={{ stroke: 'none' }}
            dy={12}
          />
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#DB4644" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#DB4644" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Legend
            verticalAlign="top"
            iconSize={0}
            iconType="plainline"
            align="left"
            wrapperStyle={{
              left: 5,
              paddingBottom: 30,
              fontSize: 12,
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="MLB"
            stroke="#DB4644"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#color)"
          />
          <Line
            dot={false}
            type="monotone"
            dataKey="구찌"
            stroke="#6391f4"
            strokeWidth={2}
          />
          <Line
            dot={false}
            type="monotone"
            dataKey="나이키"
            stroke="#384e75"
            strokeWidth={2}
          />
          <Line
            dot={false}
            type="monotone"
            dataKey="루이비통"
            stroke="#40d9d4"
            strokeWidth={2}
          />
          <Line
            dot={false}
            type="monotone"
            dataKey="버버리"
            stroke="#00b374"
            strokeWidth={2}
          />
          <Line
            dot={false}
            type="monotone"
            dataKey="프라다"
            stroke="#ffd688"
            strokeWidth={2}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}

const ChartWrapper = styled.div`
  width: 61.2vw;
  height: 40.8vh;
  padding: 20px;
`;

const ChartTitle = styled.div`
  font-size: 18px;
  margin-bottom: 30px;
`;

const CustomTooltips = styled.div`
  background-color: white;
  color: black;
  padding: 24px;
`;

const Label = styled.p``;
const DataKeys = styled.div``;
