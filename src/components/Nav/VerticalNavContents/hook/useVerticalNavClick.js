import { useState } from 'react';

import { selectedArea } from '../../../../atom/area';
import { useRecoilValue } from 'recoil';

export default function useVerticalNavClick() {
  const userSelectedArea = useRecoilValue(selectedArea);

  const [isBtnClicked, setIsBtnClicked] = useState(
    userSelectedArea === 'category'
      ? {
          all: true,
          검색량: false,
          판매재고: false,
          유통채널: false,
          초기화: false,
        }
      : {}
  );

  const handleBtnClick = e => {
    const name = e.target.getAttribute('name');

    name === '초기화'
      ? initBtns()
      : setIsBtnClicked(current => {
          const initObj = { ...current };
          const keys = Object.keys(current);

          for (let i = 0; i < keys.length; i++) {
            initObj[keys[i]] = false;
          }

          initObj[name] = true;
          return initObj;
        });
  };

  const initBtns = () => {
    const prevObj = { ...isBtnClicked };
    const initObj = Object.fromEntries(
      Object.entries(prevObj).map(item => {
        const objEach = item;
        objEach[0] === 'all' ? (objEach[1] = true) : (objEach[1] = false);
        return objEach;
      })
    );

    setIsBtnClicked(initObj);
  };

  return { isBtnClicked, handleBtnClick };
}
