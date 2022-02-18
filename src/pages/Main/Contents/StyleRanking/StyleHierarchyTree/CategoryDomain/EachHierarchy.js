import { useState, useContext } from 'react';

import CommonCheckTree from '../CommonStyledComponent/CommonCheckTree';
import useTreeInit from '../hook/useTreeInit';

import { TreeContext } from '../StyleHierarchyTree';

const TREENAME_KOR = {
  categories: '카테고리',
  domains: '도메인',
  seasons: '시즌',
  items: '아이템',
  adult_kids: '성인/키즈',
};

export default function EachHierarchy({ name }) {
  const { allTreeData } = useContext(TreeContext);

  const treeName = {
    categories: allTreeData.categories,
    domains: allTreeData.domains,
    seasons: allTreeData.seasons,
    items: allTreeData.items,
    adult_kids: allTreeData.adult_kids,
  };

  const data = treeName[name];

  const { checked, setChecked } = useTreeInit(name, data);
  const [expanded, setExpanded] = useState([]);

  const checkExpandObj = {
    checked: checked,
    expanded: expanded,
    setChecked: setChecked,
    setExpanded: setExpanded,
  };

  return (
    <CommonCheckTree
      name={TREENAME_KOR[name]}
      data={data}
      checkExpandObj={checkExpandObj}
    />
  );
}
