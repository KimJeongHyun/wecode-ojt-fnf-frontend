import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CgMenuRight } from 'react-icons/cg';

import {
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from 'recharts';

// const PERIOD = [
//   { name: '당해', stroke: '#00b374' },
//   { name: '전년', stroke: '#ffd688' },
// ];

const data = [
  {
    end_dt: '21.02.07',
    search_qty_cy: 126192,
    search_qty_py: 169552,
  },
  {
    end_dt: '21.02.14',
    search_qty_cy: 123623,
    search_qty_py: 182974,
  },
  {
    end_dt: '21.02.21',
    search_qty_cy: 144382,
    search_qty_py: 163627,
  },
  {
    end_dt: '21.02.28',
    search_qty_cy: 143276,
    search_qty_py: 162084,
  },
  {
    end_dt: '21.03.07',
    search_qty_cy: 150962,
    search_qty_py: 178895,
  },
  {
    end_dt: '21.03.14',
    search_qty_cy: 158437,
    search_qty_py: 195928,
  },
  {
    end_dt: '21.03.21',
    search_qty_cy: 163430,
    search_qty_py: 184265,
  },
  {
    end_dt: '21.03.28',
    search_qty_cy: 147670,
    search_qty_py: 190994,
  },
  {
    end_dt: '21.04.04',
    search_qty_cy: 137501,
    search_qty_py: 172691,
  },
  {
    end_dt: '21.04.11',
    search_qty_cy: 117737,
    search_qty_py: 163033,
  },
  {
    end_dt: '21.04.18',
    search_qty_cy: 107554,
    search_qty_py: 153566,
  },
  {
    end_dt: '21.04.25',
    search_qty_cy: 84664,
    search_qty_py: 139167,
  },
  {
    end_dt: '21.05.02',
    search_qty_cy: 69043,
    search_qty_py: 116313,
  },
  {
    end_dt: '21.05.09',
    search_qty_cy: 64317,
    search_qty_py: 71709,
  },
  {
    end_dt: '21.05.16',
    search_qty_cy: 47447,
    search_qty_py: 47887,
  },
  {
    end_dt: '21.05.23',
    search_qty_cy: 32053,
    search_qty_py: 44149,
  },
  {
    end_dt: '21.05.30',
    search_qty_cy: 32025,
    search_qty_py: 41742,
  },
  {
    end_dt: '21.06.06',
    search_qty_cy: 25799,
    search_qty_py: 21931,
  },
  {
    end_dt: '21.06.13',
    search_qty_cy: 21280,
    search_qty_py: 17345,
  },
  {
    end_dt: '21.06.20',
    search_qty_cy: 20253,
    search_qty_py: 31440,
  },
  {
    end_dt: '21.06.27',
    search_qty_cy: 20640,
    search_qty_py: 18072,
  },
  {
    end_dt: '21.07.04',
    search_qty_cy: 19812,
    search_qty_py: 22447,
  },
  {
    end_dt: '21.07.11',
    search_qty_cy: 18871,
    search_qty_py: 31517,
  },
  {
    end_dt: '21.07.18',
    search_qty_cy: 21192,
    search_qty_py: 25403,
  },
  {
    end_dt: '21.07.25',
    search_qty_cy: 19459,
    search_qty_py: 32320,
  },
  {
    end_dt: '21.08.01',
    search_qty_cy: 20934,
    search_qty_py: 28949,
  },
  {
    end_dt: '21.08.08',
    search_qty_cy: 28003,
    search_qty_py: 33019,
  },
  {
    end_dt: '21.08.15',
    search_qty_cy: 45176,
    search_qty_py: 35763,
  },
  {
    end_dt: '21.08.22',
    search_qty_cy: 82352,
    search_qty_py: 45130,
  },
  {
    end_dt: '21.08.29',
    search_qty_cy: 128075,
    search_qty_py: 66073,
  },
  {
    end_dt: '21.09.05',
    search_qty_cy: 173162,
    search_qty_py: 155286,
  },
  {
    end_dt: '21.09.12',
    search_qty_cy: 193484,
    search_qty_py: 253720,
  },
  {
    end_dt: '21.09.19',
    search_qty_cy: 172599,
    search_qty_py: 252909,
  },
  {
    end_dt: '21.09.26',
    search_qty_cy: 214237,
    search_qty_py: 295507,
  },
  {
    end_dt: '21.10.03',
    search_qty_cy: 223849,
    search_qty_py: 261214,
  },
  {
    end_dt: '21.10.10',
    search_qty_cy: 220536,
    search_qty_py: 347638,
  },
  {
    end_dt: '21.10.17',
    search_qty_cy: 327045,
    search_qty_py: 315817,
  },
  {
    end_dt: '21.10.24',
    search_qty_cy: 318525,
    search_qty_py: 280726,
  },
  {
    end_dt: '21.10.31',
    search_qty_cy: 252540,
    search_qty_py: 245704,
  },
  {
    end_dt: '21.11.07',
    search_qty_cy: 231437,
    search_qty_py: 242137,
  },
  {
    end_dt: '21.11.14',
    search_qty_cy: 232387,
    search_qty_py: 213700,
  },
  {
    end_dt: '21.11.21',
    search_qty_cy: 193597,
    search_qty_py: 194695,
  },
  {
    end_dt: '21.11.28',
    search_qty_cy: 188595,
    search_qty_py: 190412,
  },
  {
    end_dt: '21.12.05',
    search_qty_cy: 185523,
    search_qty_py: 192944,
  },
  {
    end_dt: '21.12.12',
    search_qty_cy: 168220,
    search_qty_py: 176686,
  },
  {
    end_dt: '21.12.19',
    search_qty_cy: 161579,
    search_qty_py: 175762,
  },
  {
    end_dt: '21.12.26',
    search_qty_cy: 137760,
    search_qty_py: 139595,
  },
  {
    end_dt: '22.01.02',
    search_qty_cy: 125403,
    search_qty_py: 122983,
  },
  {
    end_dt: '22.01.09',
    search_qty_cy: 127465,
    search_qty_py: 131476,
  },
  {
    end_dt: '22.01.16',
    search_qty_cy: 129298,
    search_qty_py: 124509,
  },
  {
    end_dt: '22.01.23',
    search_qty_cy: 125889,
    search_qty_py: 120885,
  },
  {
    end_dt: '22.01.30',
    search_qty_cy: 106812,
    search_qty_py: 121699,
  },
  {
    end_dt: '22.02.06',
    search_qty_cy: 0,
    search_qty_py: 126192,
  },
  {
    end_dt: '22.02.13',
    search_qty_cy: 0,
    search_qty_py: 123623,
  },
];
export default function SearchOwnChart() {
  const [ownChartData, setOwnChartData] = useState([]);

  useEffect(() => {
    setOwnChartData(
      data.map(item => {
        const newItem = {};
        newItem.end_dt = item.end_dt;
        newItem['당해'] = item.search_qty_cy;
        newItem['전년'] = item.search_qty_py;
        return newItem;
      })
    );
  }, []);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <CustomTooltips>
          <Label>{`${label} / MLB : ${payload[1].value}`}</Label>
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
        MLB 검색어
        <CgMenuRight />
      </ChartTitle>
      {ownChartData && (
        <ResponsiveContainer width="100%" height="90%">
          <ComposedChart
            data={ownChartData}
            margin={{
              top: 38,
              right: 20,
              left: 10,
              bottom: 70,
            }}
          >
            <CartesianGrid horizontal={false} stroke="#efefef" />
            <XAxis
              dataKey="end_dt"
              stroke="#7b7b7b"
              axisLine={false}
              tick={{ fontSize: 12 }}
              tickLine={{ stroke: 'none' }}
              dy={12}
            />
            <YAxis
              tick={{ fontSize: 12 }}
              tickLine={{ stroke: 'none' }}
              stroke="#7b7b7b"
              dx={-6}
              axisLine={false}
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
            <Area
              type="monotone"
              dataKey="전년"
              stroke="#67a8a6"
              strokeWidth={2.2}
              fillOpacity={1}
              fill="url(#LastYears)"
            />
            <Area
              type="monotone"
              dataKey="당해"
              stroke="#58ddd9"
              strokeWidth={2.2}
              fillOpacity={1}
              fill="url(#ThisYears)"
            />
            <defs>
              <linearGradient id="ThisYears" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#58ddd9" stopOpacity={0.7} />
                <stop offset="95%" stopColor="#58ddd9" stopOpacity={0} />
              </linearGradient>
            </defs>
            <defs>
              <linearGradient id="LastYears" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#67a8a6" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#67a8a6" stopOpacity={0} />
              </linearGradient>
            </defs>
            {/* {PERIOD.map(item => (
              <Line
                key=""
                dataKey={item.name}
                stroke={item.stroke}
                dot={false}
                type="monotone"
                strokeWidth={2}
              />
            ))} */}
          </ComposedChart>
        </ResponsiveContainer>
      )}
    </ChartWrapper>
  );
}

const ChartWrapper = styled.div`
  width: 29vw;
  height: 100%;
`;

const ChartTitle = styled.div`
  width: 100%;
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
