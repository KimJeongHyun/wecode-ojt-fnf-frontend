import React from 'react';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';

import { CgMenuRight } from 'react-icons/cg';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { dataStringFormatter } from '../../../../../utils/Functions';

import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';

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

const useStyles = makeStyles({
  table: {
    maxWidth: '100%',
  },
});

export default function SearchSelectedTable() {
  const classes = useStyles();
  // const style = {
  //   color: '#ee4cfc',
  // };
  return (
    <Scrollbars
      autoHideTimeout={1000}
      autoHide
      autoHeight
      autoHeightMin={`${40}vh`}
    >
      <TableWrapper>
        <TableTitle>
          선택기간
          <CgMenuRight />
        </TableTitle>
        <Table className={classes.table} aria-label="customized table">
          <TableRow>
            <TableHeaderCell width="15%">브랜드</TableHeaderCell>
            <TableHeaderCell align="right">당해검색량</TableHeaderCell>
            <TableHeaderCell align="right">전년검색량</TableHeaderCell>
            <TableHeaderCell align="right">전년비</TableHeaderCell>
          </TableRow>
          <TableBody>
            {SearchCountTable.map(
              ({ competitor, growth, search_qty_cy, search_qty_py }) => {
                const convertedCy = dataStringFormatter(search_qty_cy);
                const convertedPy = dataStringFormatter(search_qty_py);
                return (
                  <StyledTableRow key={competitor}>
                    <StyledTableCell component="th" scope="row">
                      {competitor}
                    </StyledTableCell>

                    <StyledTableCell align="right">
                      {convertedCy}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {convertedPy}
                    </StyledTableCell>
                    <StyledTableCell align="right">{growth}%</StyledTableCell>
                  </StyledTableRow>
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
  width: 100%;
`;

const TableTitle = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  padding: 24px 24px 24px 24px;
  font-size: 22px;
  font-weight: 800;
  color: white;
  background-color: #377ef9;
  border-radius: 7px 7px 0 0;

  svg:hover {
    cursor: pointer;
  }
`;

const TableHeaderCell = withStyles({
  root: {
    fontSize: '16px',
    color: '#31415F',
    fontWeight: 700,
    borderBottom: '1px solid #efefef',
  },
})(TableCell);

const StyledTableCell = withStyles({
  root: {
    color: '#31415F',
    fontSize: '16px',
    borderBottom: '1px solid #efefef',

    '&:hover': {
      cursor: 'pointer',
      color: 'white',
    },
  },
})(TableCell);

const StyledTableRow = withStyles({
  root: {
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#377ef9',
      fontcolor: 'white',
    },
  },
})(TableRow);
