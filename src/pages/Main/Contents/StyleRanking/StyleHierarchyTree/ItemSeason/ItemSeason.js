import { useContext } from 'react';
import { HierarchyContext } from '../../StyleRanking';

import { HideTree, TreeWrapper } from '../CommonStyledComponent/CommonStyle';

import AgeHierarchy from './AgeHierarchy';

import ItemHierarchy from './ItemHierarchy';

import SeasonHierarchy from './SeasonHierarchy';

export default function ItemSeason() {
  const { handleTreeExpand } = useContext(HierarchyContext);
  return (
    <TreeWrapper>
      <HideTree name="아이템시즌" onClick={handleTreeExpand}>
        아이템시즌
      </HideTree>
      <SeasonHierarchy />
      <ItemHierarchy />
      <AgeHierarchy />
    </TreeWrapper>
  );
}
