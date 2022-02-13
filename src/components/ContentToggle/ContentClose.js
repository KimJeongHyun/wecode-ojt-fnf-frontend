import React, { useContext } from 'react';
import { AllCategoryContext } from '../../pages/Main/Contents/Category/AllCategoryArea/AllCategoryArea';

import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import useMouseOverShow from '../../hook/useMouseHoverShow';

export default function ContentClose() {
  const { isMouseOver, handleZoomEnter, handleZoomOut } = useMouseOverShow();

  const { setIsZoomInClicked, setClickedContent } =
    useContext(AllCategoryContext);

  const handleZoomInStatus = () => {
    setClickedContent('');
    setIsZoomInClicked(false);
  };

  return (
    <CloseWrapper>
      <CloseIcon
        onClick={handleZoomInStatus}
        onMouseEnter={handleZoomEnter}
        onMouseLeave={handleZoomOut}
      />
      <IconText isMouseOver={isMouseOver}>닫기</IconText>
    </CloseWrapper>
  );
}

const CloseWrapper = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 500;
`;

const CloseIcon = styled(AiOutlineCloseCircle)`
  cursor: pointer;
  zoom: 1.5;
`;

const IconText = styled.span`
  transition: opacity 0.2s ease;
  opacity: ${props => (props.isMouseOver ? '1' : '0')};
  margin-left: 2px;
`;
