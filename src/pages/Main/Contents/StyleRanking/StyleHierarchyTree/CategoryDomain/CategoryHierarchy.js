import { useState, useEffect } from 'react';

import { checkedFilters } from '../../../../../../atom/staticData';
import { useSetRecoilState } from 'recoil';

import CommonCheckTree from '../CommonStyledComponent/CommonCheckTree';
import { DATA } from './CategoryDomainData';

export default function CategoryHierarchy() {
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const setCheckedFilters = useSetRecoilState(checkedFilters);

  useEffect(() => {
    const newList = [];
    DATA.categories.forEach(item =>
      Object.entries(item)[2][1].map(item => newList.push(item.value))
    );
    setChecked(newList);
  }, []);

  const handleChecked = checked => {
    setChecked(checked);

    const prevList = [...checked];
    const newList = prevList.map(item => item.replace('child', ''));
    setCheckedFilters(current => {
      const newObj = { ...current };
      newObj.category = newList;
      return newObj;
    });
  };

  const checkExpandObj = {
    checked: checked,
    expanded: expanded,
    setChecked: handleChecked,
    setExpanded: setExpanded,
  };

  return (
    <CommonCheckTree
      name="카테고리"
      data={DATA}
      checkExpandObj={checkExpandObj}
    />
  );
}
