import styled from 'styled-components';
import { TableCell } from '@material-ui/core';

export const CustomCell = styled(TableCell)`
  && {
    font-size: 17px;
    font-weight: bold;
    word-break: keep-all !important;

    &&.headCell {
      color: white !important;
      font-weight: 700;
      font-size: 20px !important;
    }
  }
`;
