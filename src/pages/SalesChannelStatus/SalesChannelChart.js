import React from 'react';
import styled from 'styled-components';
import { Card } from '../../components/ContentCard/ContentCard';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import chartColor from './theme/chartColor';

export default function SalesChannelChart({ staticData }) {
  const legendName = Object.keys(staticData[0]);
  legendName.shift();
  //여기서 staticData는 각 정보객체가 요소로 들어있는 배열이다
  return (
    <CustomCard>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={staticData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid
            horizontal={false}
            strokearray="5 5"
            strokeOpacity={0.5}
          />
          <XAxis
            dataKey="날짜"
            axisLine={false}
            dy={7}
            tick={{ fontSize: 15 }}
            tickLine={{ stroke: 'none' }}
          />
          <YAxis
            axisLine={false}
            dx={-6}
            tick={{ fontSize: 12 }}
            tickLine={{ stroke: 'none' }}
          />
          <Tooltip />
          <Legend
            verticalAlign="top"
            iconSize={15}
            iconType="circle"
            align="left"
            wrapperStyle={{
              left: 22,
              top: -10,
              fontSize: 16,
            }}
          />
          {legendName.map((lineName, idx) => {
            return (
              <Line
                key={idx}
                type="monotone"
                dataKey={lineName}
                stroke={chartColor.lineColor[idx]}
                strokeWidth={3}
                dot={false}
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
    </CustomCard>
  );
}

const CustomCard = styled(Card)`
  border-radius: 10px;
  padding: 40px;
  width: 45vw;
  height: 80vh;
`;
