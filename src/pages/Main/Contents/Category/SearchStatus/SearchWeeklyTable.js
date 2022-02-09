import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import { dataStringFormatter } from '../../../../../utils/Functions';

import styled from 'styled-components';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

const SearchCountTable = [
  {
    competitor: '일반',
    growth: 87,
    search_qty_cy: 63079,
    search_qty_py: 72690,
  },
  {
    competitor: '나이키',
    growth: 62,
    search_qty_cy: 15756,
    search_qty_py: 25401,
  },
  {
    competitor: '아미',
    growth: 83,
    search_qty_cy: 14159,
    search_qty_py: 17034,
  },
  {
    competitor: '메종키츠네',
    growth: 77,
    search_qty_cy: 10183,
    search_qty_py: 13193,
  },
  {
    competitor: '이자벨마랑',
    growth: 122,
    search_qty_cy: 7304,
    search_qty_py: 6007,
  },
  {
    competitor: 'MLB',
    growth: 56,
    search_qty_cy: 4334,
    search_qty_py: 7777,
  },
  {
    competitor: '아디다스',
    growth: 50,
    search_qty_cy: 3179,
    search_qty_py: 6299,
  },
  {
    competitor: '커버낫',
    growth: 77,
    search_qty_cy: 2859,
    search_qty_py: 3707,
  },
  {
    competitor: '디스커버리',
    growth: 64,
    search_qty_cy: 2819,
    search_qty_py: 4382,
  },
  {
    competitor: '뉴발란스',
    growth: 88,
    search_qty_cy: 2518,
    search_qty_py: 2851,
  },
  {
    competitor: '휠라',
    growth: 37,
    search_qty_cy: 639,
    search_qty_py: 1745,
  },
  {
    competitor: '널디',
    growth: 43,
    search_qty_cy: 355,
    search_qty_py: 822,
  },
  {
    competitor: '무신사',
    growth: 71,
    search_qty_cy: 256,
    search_qty_py: 361,
  },
];

export default function SearchWeeklyTable() {
  return (
    <Scrollbars
      autoHideTimeout={500}
      autoHide
      autoHeight
      autoHeightMin={`${40.8}vh`}
    >
      <TableWrapper>
        <TableTitle>주간</TableTitle>
        <Table size="small" style={{ padding: 0, margin: 0 }}>
          <TableHead>
            <TableRow>
              <TableCell align="left">브랜드</TableCell>
              <TableCell align="left">당해검색량</TableCell>
              <TableCell align="left">전년검색량</TableCell>
              <TableCell align="left">전년비</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {SearchCountTable.map(
              ({ competitor, growth, search_qty_cy, search_qty_py }) => {
                const convertedCy = dataStringFormatter(search_qty_cy);
                const convertedPy = dataStringFormatter(search_qty_py);
                return (
                  <TableRow key={competitor}>
                    <TableCell align="left">{competitor}</TableCell>
                    <TableCell align="left">{growth}%</TableCell>
                    <TableCell align="left">{convertedCy}</TableCell>
                    <TableCell align="left">{convertedPy}</TableCell>
                  </TableRow>
                );
              }
            )}
          </TableBody>
        </Table>
      </TableWrapper>
    </Scrollbars>
  );
}

const TableWrapper = styled.div`
  width: 30vw;
  height: 40.8vh;
  padding: 20px 0 20px 20px;
`;

const TableTitle = styled.div`
  padding: 0 0 20px 0;
  font-size: 18px;
`;
