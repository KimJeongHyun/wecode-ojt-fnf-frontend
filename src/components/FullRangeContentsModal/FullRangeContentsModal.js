import styled from 'styled-components';

import ContentClose from '../ContentToggle/ContentClose';

export default function FullRangeContentModal({
  clickedContent,
  isZoomInClicked,
}) {
  return (
    <FullModalWrapper isZoomInClicked={isZoomInClicked}>
      <ContentClose />
      {clickedContent}
    </FullModalWrapper>
  );
}

const FullModalWrapper = styled.div`
  ${props =>
    props.isZoomInClicked
      ? 'display:block; ~div{display:none;}'
      : 'display:none; '}
  width: 100%;
  height: 95%;
  background-color: white;
  border-radius: 10px;
  padding: 5px;
  transition: opacity 0.5s ease;
`;
