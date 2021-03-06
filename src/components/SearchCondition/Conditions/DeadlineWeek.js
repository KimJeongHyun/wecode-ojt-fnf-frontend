import React from 'react';
import styled from 'styled-components';
import CalendarElement from './Calendar/CalendarElement';

export default function DeadlineWeek() {
  return (
    <CalendarBlock>
      <CalendarElement value="deadline-week" />
    </CalendarBlock>
  );
}

const CalendarBlock = styled.div`
  width: 100px;
`;
