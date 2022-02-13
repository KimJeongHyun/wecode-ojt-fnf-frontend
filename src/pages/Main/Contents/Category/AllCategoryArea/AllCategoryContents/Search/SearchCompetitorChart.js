import React, { useContext } from 'react';
import { AllCategoryContext } from '../../AllCategoryArea';
import styled from 'styled-components';
import { CgMenuRight } from 'react-icons/cg';

import ContentZoomIn from '../../../../../../../components/ContentToggle/ContentZoomIn';

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

export default function SearchCompetitorChart({ selfComp, data }) {
  const { isZoomInClicked } = useContext(AllCategoryContext);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <CustomTooltips>
          <Label>{`${label} / MLB : ${payload[0].value}`}</Label>
          {payload.map(item => (
            <DataKeys key="end_dt">{`${item.dataKey} : ${item.value}`}</DataKeys>
          ))}
        </CustomTooltips>
      );
    }
    return null;
  };

  return (
    <>
      {!isZoomInClicked && <ContentZoomIn name={selfComp} />}
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
    </>
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
