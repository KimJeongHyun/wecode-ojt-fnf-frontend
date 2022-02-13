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

const useStyles = makeStyles({
  table: {
    maxWidth: '100%',
  },
});

export default function SearchWeeklyTable() {
  const classes = useStyles();
  return (
    <Scrollbars
      autoHideTimeout={1000}
      autoHide
      autoHeight
      autoHeightMin={`${40}vh`}
    >
      <TableWrapper>
        <TableTitle>
          주간
          <CgMenuRight />
        </TableTitle>
        <CustomTable className={classes.table} aria-label="customized table">
          <TableRow>
            <TableRowCell width="15%">브랜드</TableRowCell>
            <TableRowCell align="right">당해검색량</TableRowCell>
            <TableRowCell align="right">전년검색량</TableRowCell>
            <TableRowCell align="right">전년비</TableRowCell>
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
        </CustomTable>
      </TableWrapper>
    </Scrollbars>
  );
}

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CustomTable = styled(Table)`
  position: relative;
  height: 100%;
`;

const TableTitle = styled.div`
  display: flex;
  flex-basis: 10%;
  position: sticky;
  top: 0;
  justify-content: space-between;
  padding: 24px 24px 24px 24px;
  font-size: 22px;
  font-weight: 800;
  color: white;
  background-color: #377ef9;
  border-radius: 7px 7px 0 0;
  z-index: 2;
  svg:hover {
    cursor: pointer;
  }
`;

const TableRowCell = withStyles({
  root: {
    fontSize: '16px',
    color: '#31415F',
    fontWeight: 700,
    borderBottom: '1px solid #efefef',
  },
})(TableCell);

const StyledTableCell = withStyles({
  root: {
    fontSize: '16px',
    color: '#31415F',
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
