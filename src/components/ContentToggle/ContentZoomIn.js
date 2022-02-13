import React, { useContext } from 'react';
import { AllCategoryContext } from '../../pages/Main/Contents/Category/AllCategoryArea/AllCategoryArea';

import styled from 'styled-components';
import { BiZoomIn } from 'react-icons/bi';

import useMouseOverShow from '../../hook/useMouseHoverShow';

export default function ContentZoomIn({ name }) {
  const { isMouseOver, handleZoomEnter, handleZoomOut } = useMouseOverShow();

  const { setIsZoomInClicked, setClickedContent } =
    useContext(AllCategoryContext);

  const handleZoomInStatus = () => {
    setClickedContent(name);
    setIsZoomInClicked(true);
  };

  return (
    <ZoomInWrapper>
      <ZoomInIcon
        onClick={handleZoomInStatus}
        onMouseEnter={handleZoomEnter}
        onMouseLeave={handleZoomOut}
      />
      <IconText isMouseOver={isMouseOver}>확대</IconText>
    </ZoomInWrapper>
  );
}

const ZoomInWrapper = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 3;
`;

const ZoomInIcon = styled(BiZoomIn)`
  cursor: pointer;
  zoom: 1.5;
`;

const IconText = styled.span`
  transition: opacity 0.2s ease;
  opacity: ${props => (props.isMouseOver ? '1' : '0')};
  margin-left: 2px;
`;
