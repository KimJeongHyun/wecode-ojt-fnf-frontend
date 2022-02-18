import styled from 'styled-components';

export const HideTree = styled.p`
  padding: 4px;
  background-color: #aaa;
  font-weight: 700;

  &:hover {
    background-color: #bbb;
  }
`;

export const CategoryDomainHierWrapper = styled.div`
  flex-basis: 50%;
  border-bottom: 2px solid #ddd;
  padding: 5px;
`;

export const TreeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const TreeInnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 1px 0;
  flex-basis: ${props =>
    props.name === '카테고리'
      ? '50%;'
      : props.name === '시즌'
      ? '25%;'
      : props.name === '아이템'
      ? '60%;'
      : props.name === '성인' && '15%'};
  border-bottom: 2px solid #ddd;

  overflow-y: auto;
  .rct-node-icon {
    color: #6666cc;
  }
  .rct-collapse,
  .rct-checkbox,
  .rct-title {
    font-size: 0.7em;
    padding: 0;
  }

  .rct-text {
    label {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  ol ol {
    padding-left: 5px !important;
  }
`;
