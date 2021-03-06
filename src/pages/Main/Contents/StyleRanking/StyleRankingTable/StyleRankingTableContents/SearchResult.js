import React from 'react';

import { LineChart, Line } from 'recharts';

import {
  selectedEachRowNum,
  selectedEachRowName,
} from '../../../../../../atom/filterSelect';
import { useSetRecoilState } from 'recoil';

import { DataGrid, GridToolbar } from '@material-ui/data-grid';

import styled from 'styled-components';

export default function SearchResult({ srdata }) {
  const setSelectedEachRowNum = useSetRecoilState(selectedEachRowNum);
  const setSelectedEachRowName = useSetRecoilState(selectedEachRowName);

  const handleSelectedRow = params => {
    const { row } = params;
    setSelectedEachRowNum(row.대표품번);
    setSelectedEachRowName(row.제품명);
  };

  return (
    <SearchResultWrapper>
      <SearchResultHeader>선택된 필터별 요약</SearchResultHeader>
      <TableWrapper>
        {srdata && (
          <DataGrid
            rows={srdata.data}
            // eslint-disable-next-line no-sparse-arrays
            columns={[
              {
                field: '랭킹',
                width: 120,

                align: 'center',
              },
              {
                field: '상승',
                width: 120,
                renderCell: params => {
                  return !params.formattedValue.indexOf('↑') ? (
                    <span style={{ color: 'red' }}>
                      {params.formattedValue}
                    </span>
                  ) : (
                    <span style={{ color: 'blue' }}>
                      {params.formattedValue}
                    </span>
                  );
                },
              },
              {
                field: '대표품번',
                width: 120,
                minwidth: 120,
              },
              {
                field: '이미지',
                renderCell: params => {
                  return (
                    <img
                      src={params.formattedValue}
                      alt={params.row.대표품번}
                      width="50"
                    />
                  );
                },
                width: 120,
                align: 'center',
              },
              {
                field: '택가',
                width: 120,
                type: 'number',
              },
              {
                field: '할인율',
                width: 120,
                type: 'number',
                valueFormatter: params => {
                  const valueFormatted = Number(params.value).toLocaleString();
                  return `${valueFormatted} %`;
                },
              },
              {
                field: '제품명',
                width: 120,
              },
              {
                field: '추이',
                width: 120,
                renderCell: params => {
                  const paramArray = params.formattedValue.split(',');
                  const convertedParamArray = paramArray.map(item => {
                    const newObj = {};
                    newObj.x = Number(item);
                    return newObj;
                  });
                  return (
                    <LineChart
                      data={convertedParamArray}
                      width={100}
                      height={50}
                    >
                      <Line
                        type="monotone"
                        dataKey="x"
                        stroke="blue"
                        dot={false}
                      />
                    </LineChart>
                  );
                },
              },
              {
                field: '수량',
                width: 120,
                type: 'number',
              },
              {
                field: '국내',
                width: 120,
                type: 'number',
              },
              {
                field: '면세',
                width: 120,
                type: 'number',
              },
              ,
              {
                field: 'RF도매',
                width: 120,
                type: 'number',
              },
              {
                field: '실판',
                width: 120,
                type: 'number',
              },
              {
                field: '판매액',
                width: 120,
              },
              {
                field: '누적판매량',
                width: 120,
                type: 'number',
              },
              {
                field: '누적입고량',
                width: 120,
                type: 'number',
              },
              {
                field: '물류재고',
                width: 120,
                type: 'number',
              },
              {
                field: '총재고',
                width: 120,
                type: 'number',
              },
              {
                field: '재고주수',
                width: 120,
                type: 'number',
              },
              {
                field: '판매율',
                width: 120,
                type: 'number',
                valueFormatter: params => {
                  const valueFormatted = Number(params.value).toLocaleString();
                  return `${valueFormatted} %`;
                },
              },
            ]}
            components={{ Toolbar: GridToolbar }}
            onRowClick={(params, event) => {
              !event.ignore && handleSelectedRow(params);
            }}
          />
        )}
      </TableWrapper>
    </SearchResultWrapper>
  );
}

const SearchResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #fff;
  overflow: hidden;
`;

const TableWrapper = styled.div`
  height: 95%;
  border: 1px solid;
  border-color: transparent #adadad #adadad transparent;
  overflow: hidden;

  .MuiDataGrid-columnHeaderDraggableContainer {
    .MuiDataGrid-columnHeaderTitle {
      text-overflow: inherit;
    }
    .MuiDataGrid-iconButtonContainer {
      display: none;
    }
    .MuiDataGrid-menuIconButton {
      display: none;
    }

    &:hover {
      .MuiDataGrid-columnHeaderTitle {
        text-overflow: ellipsis;
      }
      .MuiDataGrid-iconButtonContainer {
        display: inherit;
      }
      .MuiDataGrid-menuIconButton {
        display: inherit;
      }
    }
  }
`;

const SearchResultHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  border-bottom: 1px solid #adadad;
  height: 5%;
`;
