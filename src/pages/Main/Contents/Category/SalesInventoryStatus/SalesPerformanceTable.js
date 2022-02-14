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
//     int_stock_qty: 47164,
//     stor_qty_kor_term: 0,
//     sale_qty_w: 2030,
//     avg_4wk_sale_qty: 1811.0,
//     stock_kor: 45091,
//     woi_4wks: 25.0,
//   },
//   {
//     term_cls: '전년',
//     int_stock_qty: 32956,
//     stor_qty_kor_term: 1320,
//     sale_qty_w: 1097,
//     avg_4wk_sale_qty: 458.0,
//     stock_kor: 32878,
//     woi_4wks: 72.0,
//   },
// ];

export default function UserTable({ data }) {
  return (
    <TableWrapper component={Paper}>
      판매 실적 요약 (주간)
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell align="center" />
            <TableCell align="center">가용재고</TableCell>
            <TableCell align="center" />
            <TableCell align="center">판매</TableCell>
            <TableCell align="center" />
            <TableCell align="center">재고</TableCell>
            <TableCell align="center" />
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">구분</TableCell>
            <TableCell align="center">기초재고</TableCell>
            <TableCell align="center">주간입고</TableCell>
            <TableCell align="center">주간판매</TableCell>
            <TableCell align="center">4주평균</TableCell>
            <TableCell align="center">기말재고</TableCell>
            <TableCell align="center">재고주수:4주평균 판매기준</TableCell>
          </TableRow>

          {data.map(item => (
            <TableRow key={item.term_cls}>
              <TableCell align="center">{item.term_cls}</TableCell>
              <TableCell align="center">{item.int_stock_qty}</TableCell>
              <TableCell align="center">{item.stor_qty_kor_term}</TableCell>
              <TableCell align="center">{item.sale_qty_w}</TableCell>
              <TableCell align="center">{item.avg_4wk_sale_qty}</TableCell>
              <TableCell align="center">{item.stock_kor}</TableCell>
              <TableCell align="center">{item.woi_4wks}</TableCell>
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
  word-break: keep-all;
  font-size: 20px;
`;
