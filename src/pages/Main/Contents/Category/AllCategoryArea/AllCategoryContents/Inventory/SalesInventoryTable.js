import React, { useContext } from 'react';
import Scrollbars from 'react-custom-scrollbars';

import { AllCategoryContext } from '../../AllCategoryArea';

import styled, { ThemeContext } from 'styled-components';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import ContentZoomIn from '../../../../../../../components/ContentToggle/ContentZoomIn';
import RepeatedTableCells from './RepeatedTableCells/RepeatedTableCells';

export default function UserTable({ selfComp, data }) {
  const { isZoomInClicked } = useContext(AllCategoryContext);

  // eslint-disable-next-line no-unused-vars
  const themeContext = useContext(ThemeContext);

  return (
    <Scrollbars autoHide autoHideTimeout={200}>
      {!isZoomInClicked && <ContentZoomIn name={selfComp} />}
      <TableWrapper>
        <Table>
          <TableHead>
            <TableRow>
              <CustomTableCellSticky align="center">Date</CustomTableCellSticky>
              <CustomTableCellHead align="center">
                판매량 당해
              </CustomTableCellHead>
              <CustomTableCellHead align="center">
                판매량 전년
              </CustomTableCellHead>
              <CustomTableCellHead align="center">
                판매량 2년전
              </CustomTableCellHead>
              <CustomTableCellHead align="center">
                입고예정(한국)
              </CustomTableCellHead>
              <CustomTableCellHead align="center">
                입고수량(한국)
              </CustomTableCellHead>
              <CustomTableCellHead align="center">
                재고수량(한국)
              </CustomTableCellHead>
              <CustomTableCellHead align="center">
                검색량 당해
              </CustomTableCellHead>
              <CustomTableCellHead align="center">
                검색량 전년
              </CustomTableCellHead>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(item => (
              <TableRow key={item.end_dt + 'inventory'}>
                <CustomTableCellSticky align="center">
                  {item.end_dt}
                </CustomTableCellSticky>
                <RepeatedTableCells item={item} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    </Scrollbars>
  );
}

const TableWrapper = styled.section`
  width: 100%;
  height: 100%;
`;
const CustomTableCellSticky = styled(TableCell)`
  position: sticky;
  left: 0;
  z-index: 1;
  background-color: #ccc;
`;

const CustomTableCell = styled(TableCell)`
  font-size: 11px !important;
  word-break: keep-all !important;
`;

const CustomTableCellHead = styled(CustomTableCell)`
  background-color: ${props => props.theme.cardColors.borderSmoke};
`;
