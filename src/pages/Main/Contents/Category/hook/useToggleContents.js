import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { selectedSideMenu } from '../../../../../atom/sideMenu';

export default function useToggleContents() {
  const userSelectedSideMenu = useRecoilValue(selectedSideMenu);
  const [toggleContents, setToggleContents] = useState(false);

  const toggleContentsAnimate = () => {
    setTimeout(() => {
      setToggleContents(false);
    }, 100);
  };

  useEffect(() => {
    setToggleContents(true);
  }, [userSelectedSideMenu]);

  useEffect(() => {
    toggleContents && toggleContentsAnimate();

    return () => {
      clearTimeout(toggleContentsAnimate);
    };
  }, [toggleContents]);

  return { toggleContents, userSelectedSideMenu };
}
