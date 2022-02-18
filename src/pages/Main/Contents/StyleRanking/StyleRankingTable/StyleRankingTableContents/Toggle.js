import React, { useState } from 'react';
import 'react-tabulator/lib/styles.css';
import 'react-tabulator/css/bootstrap/tabulator_bootstrap.min.css'; // use Theme(s)

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

export default function Toggle({ name }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggler = e => {
    setIsOpen(!isOpen);
  };
  return (
    <ToggleWrapper isOpen={isOpen}>
      <ToggleBtn isOpen={isOpen} onClick={handleToggler}>
        {name}
      </ToggleBtn>
      <TogglePage isOpen={isOpen}>
        <ReactTabulator data={data} columns={columns} layout="fitData" />
      </TogglePage>
    </ToggleWrapper>
  );
}

const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: ${props => (props.isOpen ? '20%' : '3%')};
  width: 100%;
  height: 50%;
  background-color: #fff;
  overflow: hidden;
`;

const ToggleBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  flex-basis: ${props => (props.isOpen ? '15%' : '100%')};
  border: 1px solid;
  border-color: #adadad #adadad #adadad transparent;
  background-color: ${props => (props.isOpen ? '#ccc' : '#ddd')};
  font-weight: ${props => (props.isOpen ? '700' : '400')};
  cursor: pointer;
`;

const TogglePage = styled.div`
  width: 100%;
  height: 100%;
  flex-basis: ${props => (props.isOpen ? '85%' : '0%')};
  display: ${props => (props.isOpen ? 'block' : 'none')};
  border: 1px solid;
  border-color: transparent #adadad #adadad transparent;
  overflow: hidden;

  .tabulator {
    height: 100%;
    margin: 0;
    .tabulator-tableholder {
      overflow: auto;
    }
  }
`;
