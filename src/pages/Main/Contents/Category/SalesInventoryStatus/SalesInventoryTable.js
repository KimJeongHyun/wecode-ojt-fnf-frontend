import React from 'react';
import styled from 'styled-components';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

const data = [
  {
    end_dt: '21.12.12',
    sale_qty_kor_ttl: 122,
    sale_qty_kor_ttl_py: 498,
    sale_qty_kor_ttl_py2: 1628,
    os: 0,
    stor_qty_kor: 23385,
    stock_qty_kor: 136167,
    search_qty_cy: 9248,
    search_qty_py: 12139,
  },
  {
    end_dt: '21.12.19',
    sale_qty_kor_ttl: 1227,
    sale_qty_kor_ttl_py: 634,
    sale_qty_kor_ttl_py2: 1321,
    os: 1908,
    stor_qty_kor: 16003,
    stock_qty_kor: 150749,
    search_qty_cy: 8411,
    search_qty_py: 11971,
  },
  {
    end_dt: '21.12.26',
    sale_qty_kor_ttl: 7782,
    sale_qty_kor_ttl_py: 1440,
    sale_qty_kor_ttl_py2: 2454,
    os: 1800,
    stor_qty_kor: 6703,
    stock_qty_kor: 149650,
    search_qty_cy: 7759,
    search_qty_py: 10782,
  },
  {
    end_dt: '22.01.02',
    sale_qty_kor_ttl: 12571,
    sale_qty_kor_ttl_py: 3425,
    sale_qty_kor_ttl_py2: 3060,
    os: 200,
    stor_qty_kor: 6845,
    stock_qty_kor: 142427,
    search_qty_cy: 7205,
    search_qty_py: 10138,
  },
  {
    end_dt: '22.01.09',
    sale_qty_kor_ttl: 13588,
    sale_qty_kor_ttl_py: 11840,
    sale_qty_kor_ttl_py2: 6594,
    os: 0,
    stor_qty_kor: 6901,
    stock_qty_kor: 131462,
    search_qty_cy: 7314,
    search_qty_py: 9856,
  },
  {
    end_dt: '22.01.16',
    sale_qty_kor_ttl: 9054,
    sale_qty_kor_ttl_py: 12888,
    sale_qty_kor_ttl_py2: 5252,
    os: 2000,
    stor_qty_kor: 9540,
    stock_qty_kor: 132542,
    search_qty_cy: 7426,
    search_qty_py: 9718,
  },
  {
    end_dt: '22.01.23',
    sale_qty_kor_ttl: 9191,
    sale_qty_kor_ttl_py: 9534,
    sale_qty_kor_ttl_py2: 2871,
    os: 0,
    stor_qty_kor: 16426,
    stock_qty_kor: 141205,
    search_qty_cy: 7300,
    search_qty_py: 10317,
  },
  {
    end_dt: '22.01.30',
    sale_qty_kor_ttl: 6342,
    sale_qty_kor_ttl_py: 11535,
    sale_qty_kor_ttl_py2: 3242,
    os: 100,
    stor_qty_kor: 16960,
    stock_qty_kor: 152254,
    search_qty_cy: 6640,
    search_qty_py: 10521,
  },
  {
    end_dt: '22.02.06',
    sale_qty_kor_ttl: 7257,
    sale_qty_kor_ttl_py: 11616,
    sale_qty_kor_ttl_py2: 2934,
    os: 0,
    stor_qty_kor: 8380,
    stock_qty_kor: 152673,
    search_qty_cy: 8091,
    search_qty_py: 11705,
  },
];

export default function UserTable() {
  // const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(10);

  return (
    <TableWrapper component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">판매량 당해</TableCell>
            <TableCell align="center">판매량 전년</TableCell>
            <TableCell align="center">판매량 2년전</TableCell>
            <TableCell align="center">입고예정(한국)</TableCell>
            <TableCell align="center">입고수량(한국)</TableCell>
            <TableCell align="center">재고수량(한국)</TableCell>
            <TableCell align="center">검색량 당해</TableCell>
            <TableCell align="center">검색량 전년</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(item => (
            <TableRow key={item.end_dt + 'inventory'}>
              <TableCell align="center">{item.end_dt}</TableCell>
              <TableCell align="center">{item.sale_qty_kor_ttl}</TableCell>
              <TableCell align="center">{item.sale_qty_kor_ttl_py}</TableCell>
              <TableCell align="center">{item.sale_qty_kor_ttl_py2}</TableCell>
              <TableCell align="center">{item.os}</TableCell>
              <TableCell align="center">{item.stor_qty_kor}</TableCell>
              <TableCell align="center">{item.stock_qty_kor}</TableCell>
              <TableCell align="center">{item.search_qty_cy}</TableCell>
              <TableCell align="center">{item.search_qty_py}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableWrapper>
  );
}

const TableWrapper = styled.section`
  height: 100%;
  text-align: center;
  overflow-y: auto;
  word-break: keep-all;
`;
