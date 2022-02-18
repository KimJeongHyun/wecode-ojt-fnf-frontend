import React from 'react';
import styled from 'styled-components';
import TopSummary from './StyleRankingTableContents/TopSummary';
import SearchResult from './StyleRankingTableContents/SearchResult';
import TotalResult from './StyleRankingTableContents/TotalResult';

export default function StyleRankingTable() {
  return (
    <RankingTableWrapper>
      <TopSummary />
      <SearchResult />
      <TotalResult />
    </RankingTableWrapper>
  );
}

const RankingTableWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-basis: 75%;
  text-align: center;
  // flex-basis:56%;
`;
