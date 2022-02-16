import React from 'react';

import styled from 'styled-components';
import HorizonNav from '../../../../components/Nav/HorizonNav';
import AxiosPerCondition from './AxiosPerCondition/AxiosPerCondition';
import useTreeToggle from './hook/useTreeToggle';
import StyleHierarchyTree from './StyleHierarchyTree/StyleHierarchyTree';
import StyleRankingTable from './StyleRankingTable/StyleRankingTable';

export const HierarchyContext = React.createContext();

export default function StyleRanking() {
  const { isExpand, handleTreeExpand, expandCondition } = useTreeToggle();

  return (
    <>
      <HorizonNav />
      <StyleRankingWrapper>
        <HierarchyContext.Provider
          value={{ isExpand, handleTreeExpand, expandCondition }}
        >
          <StyleHierarchyTree />
          <StyleRankingTable />
          <AxiosPerCondition />
        </HierarchyContext.Provider>
      </StyleRankingWrapper>
    </>
  );
}

const StyleRankingWrapper = styled.section`
  width: 100%;
  height: 94.8vh;
  display: flex;
  padding: 0 1vw;
`;
