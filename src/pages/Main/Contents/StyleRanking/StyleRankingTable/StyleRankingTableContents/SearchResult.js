import React, { useRef, useState } from 'react';
import 'react-tabulator/lib/styles.css';
import 'react-tabulator/css/bootstrap/tabulator_bootstrap.min.css'; // use Theme(s)

import { GrDocumentDownload } from 'react-icons/gr';

import { ReactTabulator } from 'react-tabulator';

import styled from 'styled-components';

const columns = [
  {
    title: 'Name',
    field: 'name',
    headerHozAlign: 'center',
    hozAlign: 'center',
  },
  {
    title: 'Age',
    field: 'age',
    headerHozAlign: 'center',
    hozAlign: 'center',
    formatter: 'progress',
    width: 150,
  },
  {
    title: 'Favourite Color',
    field: 'color',
    headerHozAlign: 'center',
    hozAlign: 'center',
  },
  {
    title: 'Date Of Birth',
    field: 'dob',
    headerHozAlign: 'center',
    hozAlign: 'center',
  },
  {
    title: 'Rating',
    field: 'rating',
    headerHozAlign: 'center',
    hozAlign: 'center',
    formatter: 'star',
    width: 150,
  },
  {
    title: 'Passed?',
    field: 'passed',
    headerHozAlign: 'center',
    hozAlign: 'center',
    formatter: 'tickCross',
  },
];
const data = [
  {
    id: 1,
    name: 'Oli Bob',
    age: '12',
    color: 'red',
    dob: '01/01/1980',
    rating: 5,
    passed: true,
    pets: ['cat', 'dog'],
  },
  {
    id: 2,
    name: 'Mary May',
    age: '1',
    color: 'green',
    dob: '12/05/1989',
    rating: 4,
    passed: true,
    pets: ['cat'],
  },
  {
    id: 5,
    name: 'Margret Marmajuke',
    age: '16',
    color: 'yellow',
    dob: '07/01/1999',
    rating: 4,
    passed: false,
  },
  {
    id: 6,
    name: 'Van Ng',
    age: '37',
    color: 'green',
    dob: '06/10/1982',
    rating: 4,
    passed: true,
    pets: ['dog', 'fish'],
  },
  {
    id: 7,
    name: 'Duc Ng',
    age: '37',
    color: 'yellow',
    dob: '10/10/1982',
    rating: 4,
    passed: true,
    pets: ['dog'],
  },

  {
    id: 7,
    name: 'Duc Ng',
    age: '37',
    color: 'yellow',
    dob: '10/10/1982',
    rating: 4,
    passed: true,
    pets: ['dog'],
  },
  {
    id: 7,
    name: 'Duc Ng',
    age: '37',
    color: 'yellow',
    dob: '10/10/1982',
    rating: 4,
    passed: true,
    pets: ['dog'],
  },
  {
    id: 7,
    name: 'Duc Ng',
    age: '37',
    color: 'yellow',
    dob: '10/10/1982',
    rating: 4,
    passed: true,
    pets: ['dog'],
  },
  {
    id: 7,
    name: 'Duc Ng',
    age: '37',
    color: 'yellow',
    dob: '10/10/1982',
    rating: 4,
    passed: true,
    pets: ['dog'],
  },
  {
    id: 7,
    name: 'Duc Ng',
    age: '37',
    color: 'yellow',
    dob: '10/10/1982',
    rating: 4,
    passed: true,
    pets: ['dog'],
  },
  {
    id: 7,
    name: 'Duc Ng',
    age: '37',
    color: 'yellow',
    dob: '10/10/1982',
    rating: 4,
    passed: true,
    pets: ['dog'],
  },
  {
    id: 7,
    name: 'Duc Ng',
    age: '37',
    color: 'yellow',
    dob: '10/10/1982',
    rating: 4,
    passed: true,
    pets: ['dog'],
  },
  {
    id: 7,
    name: 'Duc Ng',
    age: '37',
    color: 'yellow',
    dob: '10/10/1982',
    rating: 4,
    passed: true,
    pets: ['dog'],
  },
];

export default function SearchResult() {
  const [selectedRowItem, setSelectedRowItem] = useState('');

  let tableRef = useRef(null);
  const options = {
    downloadReady: (fileContents, blob) => blob,
    selectable: 1,
  };

  const downloadData = () => {
    tableRef.current.download('csv', 'data.csv');
  };

  const rowClick = (e, row) => {
    const { _row } = row;

    setSelectedRowItem(_row.data.name);
  };

  return (
    <SearchResultWrapper>
      <SearchResultHeader>
        <WhiteSpace />
        <SearchResultTitle>선택된 필터별 실적</SearchResultTitle>
        <GetCSVBtnWrapper>
          <GetCSVBtn onClick={downloadData}>
            Download CSV
            <GrDocumentDownload />
          </GetCSVBtn>
        </GetCSVBtnWrapper>
      </SearchResultHeader>
      <ReactTabulator
        onRef={ref => (tableRef = ref)}
        data={data}
        columns={columns}
        options={options}
        events={{ rowClick: rowClick }}
        layout="fitData"
      />
    </SearchResultWrapper>
  );
}

const SearchResultWrapper = styled.div`
  height: 100%;
  flex: 1;
  border-right: 1px solid #adadad;
  background-color: #fff;

  overflow: hidden;

  .tabulator {
    height: 95%;
    margin: 0;
    .tabulator-tableholder {
      overflow: auto;
    }
  }
`;

const SearchResultHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: #ccc;
  border-bottom: 1px solid #adadad;
  height: 5%;
`;

const WhiteSpace = styled.div`
  flex-basis: 33%;
`;

const SearchResultTitle = styled.div`
  flex-basis: 34%;
  font-weight: 600;
`;

const GetCSVBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  flex-basis: 33%;
`;

const GetCSVBtn = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
`;
