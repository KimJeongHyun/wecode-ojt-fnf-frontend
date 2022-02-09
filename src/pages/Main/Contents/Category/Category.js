import styled from 'styled-components';
import useToggleContents from './hook/useToggleContents';

const SELECTED_COMPONENTS = {
  all: 'all',
  검색량: 'search',
  판매재고: 'inventory',
  유통채널: 'channel',
  초기화: 'init',
};

export default function Category() {
  const { toggleContents, userSelectedSideMenu } = useToggleContents();

  return (
    <CategoryWrapper toggleContents={toggleContents}>
      {SELECTED_COMPONENTS[userSelectedSideMenu]}
    </CategoryWrapper>
  );
}

const CategoryWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => (props.toggleContents ? 0 : 1)};
  transition: ${props => (props.toggleContents ? '' : 'opacity 0.1s ease')};
`;
