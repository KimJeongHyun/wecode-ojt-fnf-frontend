import styled from 'styled-components';
import { TableCell } from '@material-ui/core';

export default function RepeatedTableCells({ item }) {
  const itemArray = [
    item.sale_qty_kor_ttl,
    item.sale_qty_kor_ttl_py,
    item.sale_qty_kor_ttl_py2,
    item.os,
    item.stor_qty_kor,
    item.stock_qty_kor,
    item.search_qty_cy,
    item.search_qty_py,
  ];

  return (
    <>
      {itemArray.map(item => (
        <CustomTableCell key={item} align="center">
          {item}
        </CustomTableCell>
      ))}
    </>
  );
}

const CustomTableCell = styled(TableCell)`
  font-size: 11px !important;
  word-break: keep-all !important;
`;
