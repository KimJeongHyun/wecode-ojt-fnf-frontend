import { useState } from 'react';

export default function useTreeToggle() {
  const [isExpand, setIsExpand] = useState({
    카테고리: false,
    아이템시즌: false,
  });

  const expandCondition = Object.entries(isExpand).some(
    item => item[1] === true
  );

  const handleTreeExpand = e => {
    const name = e.target.getAttribute('name');

    setIsExpand(current => {
      const newObj = { ...current };
      newObj[name] = !newObj[name];
      return newObj;
    });
  };

  return { isExpand, handleTreeExpand, expandCondition };
}
