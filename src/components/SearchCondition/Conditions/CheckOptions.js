import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { DropdownIcon } from '../../../styles/icons';
import CheckElement from './CheckElement/CheckElement';
import { useRecoilState } from 'recoil';
import { filterSelect } from '../../../atom/filterSelect';
import { dataLoadedCount } from '../../../atom/staticData';

const VALUE_OBJ_KOR = {
  categories: '카테고리',
  subcategories: '서브카테고리',
  seasons: '시즌별',
};

const CheckOptions = ({ filterOptions, value }) => {
  const [selectedFilterOptions, setSelectedFilterOptions] =
    useRecoilState(filterSelect);
  const [expand, setExpand] = useState(false);
  const [allChecked, setAllChecked] = useState(false);
  const [atomDataLoadedCount] = useRecoilState(dataLoadedCount);

  const VALUE_OBJ = {
    categories: selectedFilterOptions.categories,
    subcategories: Array.from(selectedFilterOptions.subcategories).reduce(
      (acc, cur) => {
        return acc + cur + ',';
      },
      ''
    ),
    seasons: Array.from(selectedFilterOptions.seasons).reduce((acc, cur) => {
      return acc + cur + ',';
    }, ''),
  };

  useEffect(() => {
    atomDataLoadedCount === 0 && setExpand(false);
  }, [atomDataLoadedCount]);

  useEffect(() => {
    if (value !== 'categories') {
      if (filterOptions) {
        if (filterOptions.length === selectedFilterOptions[value].size) {
          setAllChecked(true);
        } else {
          setAllChecked(false);
        }
      }
    }
  }, [filterOptions, selectedFilterOptions, value]);

  const allCheckEvent = () => {
    const prevState = { ...selectedFilterOptions };
    if (allChecked) {
      setAllChecked(false);
      setSelectedFilterOptions(() => {
        prevState[value].clear();
        return { ...prevState };
      });
    } else {
      setAllChecked(true);
      setSelectedFilterOptions(() => {
        filterOptions.forEach(element => {
          prevState[value].add(element);
        });
        return { ...prevState };
      });
    }
  };

  const showOptions = () => {
    setExpand(!expand);
  };

  return (
    <MultiSelector value={value}>
      <SelectField onClick={showOptions}>
        <span>
          {VALUE_OBJ[value] === '' ? VALUE_OBJ_KOR[value] : VALUE_OBJ[value]}
        </span>
        <DropDownImg expand={expand} />
      </SelectField>
      <OptionList expand={expand} dataLoadedCount={atomDataLoadedCount}>
        {value !== 'categories' &&
          (filterOptions ? (
            <Section>
              <ElementLabel>
                <Checkbox
                  checked={allChecked ? true : false}
                  onChange={allCheckEvent}
                />
                <ElementText>All</ElementText>
              </ElementLabel>
            </Section>
          ) : (
            <ElementText style={{ color: 'blue', fontWeight: 'bold' }}>
              제품군을 먼저 선택하세요
            </ElementText>
          ))}
        <Section>
          {filterOptions &&
            filterOptions.map((element, idx) => {
              return (
                <CheckElement
                  value={value}
                  allChecked={allChecked}
                  setAllChecked={setAllChecked}
                  selectedFilterOptions={selectedFilterOptions}
                  setSelectedFilterOptions={setSelectedFilterOptions}
                  key={idx}
                  text={element}
                />
              );
            })}
        </Section>
      </OptionList>
    </MultiSelector>
  );
};

const Section = styled.section``;

const MultiSelector = styled.div`
  position: relative;
  width: ${props => (props.value === 'seasons' ? '90px' : '120px')};
  height: 27px;
  z-index: 4;
`;

const SelectField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #aeaeae;
  border-radius: 4px;
  background-color: white;
`;

const DropDownImg = styled(DropdownIcon)`
  transition: transform 0.5s linear;
  transform: ${props => (props.expand ? 'rotate(180deg)' : 'rotate(0deg)')};

  &:hover {
    transition: transform 1s linear;
    transform: rotate(90deg);
  }
`;

const OptionList = styled.div`
  position: absolute;
  top: 30px;
  width: 100%;
  padding: 3px;
  box-shadow: 0 10px 60px rgb(0, 0, 0, 0.1);
  border: 1px solid rgb(156, 156, 156);
  border-radius: 4px;
  display: ${props =>
    props.expand && props.dataLoadedCount < 1 ? 'block' : 'none'};
  background-color: white;
`;

const ElementLabel = styled.label`
  display: block;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })``;

const ElementText = styled.span``;

export default CheckOptions;
