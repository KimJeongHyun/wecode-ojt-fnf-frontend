import React, { useContext } from 'react';

import { HierarchyContext } from '../StyleRanking';

import styled from 'styled-components';

import CategoryDomain from './CategoryDomain/CategoryDomain';
import ItemSeason from './ItemSeason/ItemSeason';
import useTreeChecked from '../hook/useTreeChecked';

export const TreeContext = React.createContext();

export default function StyleHierarchyTree() {
  const { isExpand, handleTreeExpand, expandCondition } =
    useContext(HierarchyContext);

  const { treeCheckMethods } = useTreeChecked();

  return (
    <TreeWrapper isExpand={expandCondition}>
      <TreeContext.Provider value={{ treeCheckMethods }}>
        <CategoryDomainWrapper isExpand={isExpand}>
          {isExpand['카테고리'] ? (
            <CategoryDomain />
          ) : (
            <ItemExpand name="카테고리" onClick={handleTreeExpand}>
              카테고리
            </ItemExpand>
          )}
        </CategoryDomainWrapper>
        <ItemSeasonWrapper isExpand={isExpand}>
          {isExpand['아이템시즌'] ? (
            <ItemSeason />
          ) : (
            <ItemExpand name="아이템시즌" onClick={handleTreeExpand}>
              아이템 / 시즌
            </ItemExpand>
          )}
        </ItemSeasonWrapper>
      </TreeContext.Provider>
    </TreeWrapper>
  );
}

const TreeWrapper = styled.section`
  display: flex;
  flex-basis: ${props => (props.isExpand ? '22%' : '3%')};
  //flex-basis:22%;
`;

const TreeVerticalBar = styled.div`
  border: 1px solid #adadad;

  background-color: #fff;
`;

const CategoryDomainWrapper = styled(TreeVerticalBar)`
  ${props =>
    props.isExpand['카테고리']
      ? !props.isExpand['아이템시즌']
        ? 'flex-basis:95%;'
        : 'flex-basis:50%;'
      : ''}
`;

const ItemSeasonWrapper = styled(TreeVerticalBar)`
  ${props =>
    props.isExpand['아이템시즌']
      ? !props.isExpand['카테고리']
        ? 'flex-basis:95%;'
        : 'flex-basis:50%;'
      : ''}
`;

const ItemExpand = styled.span`
  writing-mode: vertical-lr;
  height: 100%;
  padding: 4px;
  &:hover {
    background-color: #ddd;
  }
  cursor: pointer;
`;
