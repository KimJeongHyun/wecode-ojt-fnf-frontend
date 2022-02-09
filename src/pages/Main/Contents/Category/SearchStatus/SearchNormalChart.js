import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
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

const PERIOD = [
  { name: '당해', stroke: '#00b374' },
  { name: '전년', stroke: '#ffd688' },
];

const data = [
  {
    end_dt: '21.02.07',
    search_qty_cy: 11705,
    search_qty_py: 15665,
  },
  {
    end_dt: '21.02.14',
    search_qty_cy: 12941,
    search_qty_py: 17138,
  },
  {
    end_dt: '21.02.21',
    search_qty_cy: 14023,
    search_qty_py: 15182,
  },
  {
    end_dt: '21.02.28',
    search_qty_cy: 13751,
    search_qty_py: 15449,
  },
  {
    end_dt: '21.03.07',
    search_qty_cy: 13351,
    search_qty_py: 17207,
  },
  {
    end_dt: '21.03.14',
    search_qty_cy: 13330,
    search_qty_py: 18751,
  },
  {
    end_dt: '21.03.21',
    search_qty_cy: 13758,
    search_qty_py: 17972,
  },
  {
    end_dt: '21.03.28',
    search_qty_cy: 11986,
    search_qty_py: 15630,
  },
  {
    end_dt: '21.04.04',
    search_qty_cy: 9688,
    search_qty_py: 14821,
  },
  {
    end_dt: '21.04.11',
    search_qty_cy: 8537,
    search_qty_py: 13706,
  },
  {
    end_dt: '21.04.18',
    search_qty_cy: 7103,
    search_qty_py: 11584,
  },
  {
    end_dt: '21.04.25',
    search_qty_cy: 4874,
    search_qty_py: 10664,
  },
  {
    end_dt: '21.05.02',
    search_qty_cy: 3657,
    search_qty_py: 8267,
  },
  {
    end_dt: '21.05.09',
    search_qty_cy: 3466,
    search_qty_py: 3374,
  },
  {
    end_dt: '21.05.16',
    search_qty_cy: 2299,
    search_qty_py: 2816,
  },
  {
    end_dt: '21.05.23',
    search_qty_cy: 1644,
    search_qty_py: 2635,
  },
  {
    end_dt: '21.05.30',
    search_qty_cy: 1384,
    search_qty_py: 1568,
  },
  {
    end_dt: '21.06.06',
    search_qty_cy: 969,
    search_qty_py: 680,
  },
  {
    end_dt: '21.06.13',
    search_qty_cy: 674,
    search_qty_py: 410,
  },
  {
    end_dt: '21.06.20',
    search_qty_cy: 659,
    search_qty_py: 479,
  },
  {
    end_dt: '21.06.27',
    search_qty_cy: 650,
    search_qty_py: 447,
  },
  {
    end_dt: '21.07.04',
    search_qty_cy: 624,
    search_qty_py: 654,
  },
  {
    end_dt: '21.07.11',
    search_qty_cy: 655,
    search_qty_py: 639,
  },
  {
    end_dt: '21.07.18',
    search_qty_cy: 657,
    search_qty_py: 903,
  },
  {
    end_dt: '21.07.25',
    search_qty_cy: 687,
    search_qty_py: 917,
  },
  {
    end_dt: '21.08.01',
    search_qty_cy: 829,
    search_qty_py: 1062,
  },
  {
    end_dt: '21.08.08',
    search_qty_cy: 1221,
    search_qty_py: 1832,
  },
  {
    end_dt: '21.08.15',
    search_qty_cy: 2357,
    search_qty_py: 2591,
  },
  {
    end_dt: '21.08.22',
    search_qty_cy: 4517,
    search_qty_py: 3189,
  },
  {
    end_dt: '21.08.29',
    search_qty_cy: 7657,
    search_qty_py: 5159,
  },
  {
    end_dt: '21.09.05',
    search_qty_cy: 11235,
    search_qty_py: 11827,
  },
  {
    end_dt: '21.09.12',
    search_qty_cy: 15694,
    search_qty_py: 22106,
  },
  {
    end_dt: '21.09.19',
    search_qty_cy: 15838,
    search_qty_py: 23598,
  },
  {
    end_dt: '21.09.26',
    search_qty_cy: 23888,
    search_qty_py: 26310,
  },
  {
    end_dt: '21.10.03',
    search_qty_cy: 22113,
    search_qty_py: 29185,
  },
  {
    end_dt: '21.10.10',
    search_qty_cy: 21145,
    search_qty_py: 33248,
  },
  {
    end_dt: '21.10.17',
    search_qty_cy: 27434,
    search_qty_py: 26162,
  },
  {
    end_dt: '21.10.24',
    search_qty_cy: 24019,
    search_qty_py: 21679,
  },
  {
    end_dt: '21.10.31',
    search_qty_cy: 19114,
    search_qty_py: 17408,
  },
  {
    end_dt: '21.11.07',
    search_qty_cy: 17613,
    search_qty_py: 15534,
  },
  {
    end_dt: '21.11.14',
    search_qty_cy: 16483,
    search_qty_py: 14143,
  },
  {
    end_dt: '21.11.21',
    search_qty_cy: 13742,
    search_qty_py: 13210,
  },
  {
    end_dt: '21.11.28',
    search_qty_cy: 12001,
    search_qty_py: 11757,
  },
  {
    end_dt: '21.12.05',
    search_qty_cy: 9655,
    search_qty_py: 11712,
  },
  {
    end_dt: '21.12.12',
    search_qty_cy: 9248,
    search_qty_py: 12139,
  },
  {
    end_dt: '21.12.19',
    search_qty_cy: 8411,
    search_qty_py: 11971,
  },
  {
    end_dt: '21.12.26',
    search_qty_cy: 7759,
    search_qty_py: 10782,
  },
  {
    end_dt: '22.01.02',
    search_qty_cy: 7205,
    search_qty_py: 10138,
  },
  {
    end_dt: '22.01.09',
    search_qty_cy: 7314,
    search_qty_py: 9856,
  },
  {
    end_dt: '22.01.16',
    search_qty_cy: 7426,
    search_qty_py: 9718,
  },
  {
    end_dt: '22.01.23',
    search_qty_cy: 7300,
    search_qty_py: 10317,
  },
  {
    end_dt: '22.01.30',
    search_qty_cy: 6640,
    search_qty_py: 10521,
  },
  {
    end_dt: '22.02.06',
    search_qty_cy: 0,
    search_qty_py: 11705,
  },
  {
    end_dt: '22.02.13',
    search_qty_cy: 0,
    search_qty_py: 12941,
  },
];

export default function SearchNormalChart() {
  const [normalChart, serNormalChart] = useState([]);

  useEffect(() => {
    serNormalChart(
      data.map(item => {
        const newItem = {};
        newItem.end_dt = item.end_dt;
        newItem['당해'] = item.search_qty_cy;
        newItem['전년'] = item.search_qty_py;
        return newItem;
      })
    );
  }, []);

  return (
    <ChartWrapper>
      <ChartTitle>일반 검색어</ChartTitle>
      {normalChart && (
        <ResponsiveContainer width="100%" height="90%">
          <LineChart
            data={normalChart}
            margin={{
              top: 50,
              right: 20,
              left: 20,
              bottom: 50,
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
              dx={-12}
              axisLine={false}
            />
            <Legend
              verticalAlign="top"
              iconSize={0}
              iconType="plainline"
              align="left"
              wrapperStyle={{
                left: 0,
                top: -10,
                fontSize: 12,
              }}
            />
            <Tooltip />
            {PERIOD.map(item => (
              <Line
                key=""
                dataKey={item.name}
                stroke={item.stroke}
                dot={false}
                type="monotone"
                strokeWidth={2}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      )}
    </ChartWrapper>
  );
}

const ChartWrapper = styled.div`
  width: 26vw;
  height: 100%;
  /* padding: 20px; */
`;

const ChartTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 24px 24px 14px;
  font-size: 22px;
  font-weight: 600;
  color: white;
  background-color: #377ef9;
  border-radius: 7px 7px 0 0;
  margin-bottom: 30px;
  /* font-size: 18px; */
`;
