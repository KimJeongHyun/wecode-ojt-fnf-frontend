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
    growth: 89,
    search_qty_cy: 3933604,
    search_qty_py: 4405211,
  },
  {
    competitor: '나이키',
    growth: 81,
    search_qty_cy: 1291986,
    search_qty_py: 1591067,
  },
  {
    competitor: '아미',
    growth: 130,
    search_qty_cy: 786562,
    search_qty_py: 605814,
  },
  {
    competitor: '메종키츠네',
    growth: 106,
    search_qty_cy: 571559,
    search_qty_py: 541517,
  },
  {
    competitor: 'MLB',
    growth: 74,
    search_qty_cy: 328003,
    search_qty_py: 441337,
  },
  {
    competitor: '이자벨마랑',
    growth: 168,
    search_qty_cy: 302041,
    search_qty_py: 179753,
  },
  {
    competitor: '아디다스',
    growth: 56,
    search_qty_cy: 237429,
    search_qty_py: 420993,
  },
  {
    competitor: '디스커버리',
    growth: 64,
    search_qty_cy: 200347,
    search_qty_py: 314764,
  },
  {
    competitor: '커버낫',
    growth: 101,
    search_qty_cy: 194026,
    search_qty_py: 192614,
  },
  {
    competitor: '뉴발란스',
    growth: 103,
    search_qty_cy: 167412,
    search_qty_py: 162390,
  },
  {
    competitor: '휠라',
    growth: 44,
    search_qty_cy: 52728,
    search_qty_py: 120695,
  },
  {
    competitor: '널디',
    growth: 58,
    search_qty_cy: 28735,
    search_qty_py: 49778,
  },
  {
    competitor: '무신사',
    growth: 62,
    search_qty_cy: 15873,
    search_qty_py: 25712,
  },
];

export default function SearchSelectedTable() {
  return (
    <Scrollbars
      autoHideTimeout={500}
      autoHide
      autoHeight
      autoHeightMin={`${40.8}vh`}
    >
      <TableWrapper>
        <TableTitle>선택기간</TableTitle>
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
