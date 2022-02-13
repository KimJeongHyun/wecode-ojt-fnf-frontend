import React from 'react';
import styled from 'styled-components';
import CalendarElement from './Calendar/CalendarElement';

const WeeklyPerformance = ({ value }) => {
  return (
    <CalendarBlock>
      <CalendarElement value={value} />
    </CalendarBlock>
  );
};

const CalendarBlock = styled.div`
  width: 100px;
  z-index: 4;
`;

export default WeeklyPerformance;
