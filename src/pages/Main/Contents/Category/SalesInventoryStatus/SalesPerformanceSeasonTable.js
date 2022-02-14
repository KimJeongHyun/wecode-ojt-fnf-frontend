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

// const data = [
//   {
//     term_cls: '당해',
//     indc_qty: 59900,
//     ac_stor_qty_kor: 53197,
//     sale_qty_kor: 2030,
//     ac_sale_qty_kor: 8515,
//     stock_qty: 45091,
//     sales_rate: 16.0,
//     ac_stor_qty_kor_season_end: 0,
//     ac_sale_qty_kor_season_end: 0,
//     stock_qty_season_end: 0,
//     season_end_sales_rate: 0.0,
//   },
//   {
//     term_cls: '전년',
//     indc_qty: 41100,
//     ac_stor_qty_kor: 32880,
//     sale_qty_kor: 1097,
//     ac_sale_qty_kor: 1980,
//     stock_qty: 32878,
//     sales_rate: 6.0,
//     ac_stor_qty_kor_season_end: 46853,
//     ac_sale_qty_kor_season_end: 29552,
//     stock_qty_season_end: 14847,
//     season_end_sales_rate: 63.0,
//   },
// ];

export default function UserTable({ data }) {
  return (
    <TableWrapper component={Paper}>
      판매 실적 요약 (시즌누계) <br />
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell align="center" />
            <TableCell align="center">기획</TableCell>
            <TableCell align="center" />
            <TableCell align="center">판매</TableCell>
            <TableCell align="center" />
            <TableCell align="center" />
            <TableCell align="center" />
            <TableCell align="center">시즌마감</TableCell>
            <TableCell align="center" />
            <TableCell align="center" />
            <TableCell align="center" />
          </TableRow>
          <TableRow>
            <TableCell align="center">구분</TableCell>

            <TableCell align="center">발주</TableCell>

            <TableCell align="center">입고</TableCell>
            <TableCell align="center">주간판매</TableCell>
            <TableCell align="center">누적판매</TableCell>
            <TableCell align="center">재고</TableCell>
            <TableCell align="center">판매율</TableCell>
            <TableCell align="center">입고</TableCell>
            <TableCell align="center">판매</TableCell>
            <TableCell align="center">재고</TableCell>
            <TableCell align="center">판매율</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(item => (
            <TableRow key={item.term_cls}>
              <TableCell align="center">{item.term_cls}</TableCell>
              <TableCell align="center">{item.indc_qty}</TableCell>
              <TableCell align="center">{item.ac_stor_qty_kor}</TableCell>
              <TableCell align="center">{item.sale_qty_kor}</TableCell>
              <TableCell align="center">{item.ac_sale_qty_kor}</TableCell>
              <TableCell align="center">{item.stock_qty}</TableCell>
              <TableCell align="center">{item.sales_rate}</TableCell>
              <TableCell align="center">
                {item.ac_stor_qty_kor_season_end}
              </TableCell>
              <TableCell align="center">
                {item.ac_sale_qty_kor_season_end}
              </TableCell>
              <TableCell align="center">{item.stock_qty_season_end}</TableCell>
              <TableCell align="center">{item.season_end_sales_rate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableWrapper>
  );
}

const TableWrapper = styled.section`
  height: 46vh;
  text-align: center;
  overflow-y: auto;
  word-break: keep-all;
  font-size: 20px;
`;
