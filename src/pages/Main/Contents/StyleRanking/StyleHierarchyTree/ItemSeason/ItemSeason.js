import { useContext } from 'react';
import { HierarchyContext } from '../../StyleRanking';

import { HideTree, TreeWrapper } from '../CommonStyledComponent/CommonStyle';

import Age from './Age';
import Item from './Item';
import Season from './Season';

export default function ItemSeason() {
  const { handleTreeExpand } = useContext(HierarchyContext);
  return (
    <TreeWrapper>
      <HideTree name="아이템시즌" onClick={handleTreeExpand}>
        아이템시즌
      </HideTree>
      <Season />
      <Item />
      <Age />
    </TreeWrapper>
  );
}
