/* eslint-disable no-lone-blocks */
import React from 'react';
import styled from 'styled-components';
import { CustomCell } from './Inventory/RepeatCell';
import { Card } from '../../../../../components/ContentCard/ContentCard';

import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

export default function SalesChannelTable({ onlyTable, data }) {
  return (
    <CustomCard onlyTable={onlyTable}>
      <CustomTableContainer component={Paper}>
        <CustomTable>
          <TableHead
            style={{
              backgroundColor: '#377ef9',
            }}
          >
            <TableRow>
              {data.length !== 0 &&
                Object.keys(data[0]).map((key, idx) => {
                  return (
                    <CustomCell className="headCell" align="center" key={idx}>
                      {key}
                    </CustomCell>
                  );
                })}
            </TableRow>
          </TableHead>
          <CustomTableBody>
            {data.map((dataObj, idx1) => {
              {
                return (
                  <TableRow key={idx1}>
                    {data.length !== 0 &&
                      Object.values(dataObj).map((value, idx2) => {
                        if (typeof value === 'string') {
                          return value.includes('http') ? (
                            <CustomCell key={idx2} align="center">
                              <ProductImg src={value} alt="Product" />
                            </CustomCell>
                          ) : (
                            <CustomCell key={idx2} align="center">
                              {value}
                            </CustomCell>
                          );
                        } else {
                          return (
                            <CustomCell key={idx2} align="center">
                              {value}
                            </CustomCell>
                          );
                        }
                      })}
                  </TableRow>
                );
              }
            })}
          </CustomTableBody>
        </CustomTable>
      </CustomTableContainer>
    </CustomCard>
  );
}

const ProductImg = styled.img`
  width: 40px;
`;
const CustomCard = styled(Card)`
  ${props => (props.onlyTable ? `width: 85vw` : `width: 41vw`)};
  /* width: ${props => {
    return props.onlyTable ? '85vw' : '40vw';
  }}; */
  height: 75vh;
  padding: 0;
`;

const CustomTableContainer = styled(TableContainer)`
  && {
    border-radius: 10px !important;
    height: 100%;
    width: 100%;
  }
`;

const CustomTable = styled(Table)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CustomTableBody = styled(TableBody)`
  flex: 1;
`;
