import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useSetRecoilState } from 'recoil';
import { selectedSideMenu } from '../../../../atom/sideMenu';

const BTN_CLICKED_STATUS = {
  '/category': {
    all: true,
    검색량: false,
    판매재고: false,
    유통채널: false,
    초기화: false,
  },
};

export default function useVerticalNavClick() {
  const location = useLocation();

  const [isBtnClicked, setIsBtnClicked] = useState(
    BTN_CLICKED_STATUS[location.pathname]
  );

  const setSelectedSideMenu = useSetRecoilState(selectedSideMenu);

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
    setSelectedSideMenu('all');
  };

  const updateBtnClicked = name => {
    setIsBtnClicked(current => {
      const initObj = { ...current };
      const keys = Object.keys(current);

      for (let i = 0; i < keys.length; i++) {
        initObj[keys[i]] = false;
      }

      initObj[name] = true;
      return initObj;
    });

    setSelectedSideMenu(name);
  };

  const handleBtnClick = e => {
    const name = e.target.getAttribute('name');

    name === '초기화' ? initBtns() : updateBtnClicked(name);
  };

  return { isBtnClicked, handleBtnClick };
}
