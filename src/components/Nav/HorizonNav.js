import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { clickBoolean } from '../../utils/Functions';
import { HorizonNavTri } from '../../styles/icons';
import ChartRange from '../SearchCondition/Conditions/ChartRange';
import WeeklyPerformance from '../SearchCondition/Conditions/WeeklyPerformance';
import CheckOptions from '../SearchCondition/Conditions/CheckOptions';
import SelectButton from '../Buttons/SelectButton';

import { useRecoilState } from 'recoil';
import { filterSelect } from '../../atom/filterSelect';
import {
  staticData,
  isDataLoaded,
  dataLoadedCount,
} from '../../atom/staticData';

import useMakeQuery from '../../components/Nav/HorizonNavContents/hook/useMakeQuery';
import {
  FILTERINFO,
  API,
  DATANAME,
} from '../Nav/HorizonNavContents/contants/api';

const HorizonNav = () => {
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [filterOptions, setFilterOptions] = useState({});
  const [selectedFilterOptions] = useRecoilState(filterSelect);
  const [statData, setStatData] = useRecoilState(staticData);
  const [, setDataLoaded] = useRecoilState(isDataLoaded);
  const [, setDataLoadedCount] = useRecoilState(dataLoadedCount);
  const { queryString } = useMakeQuery();

  const showFilter = () => {
    clickBoolean(setShowFilterOptions);
  };

  useEffect(() => {
    axios.get(FILTERINFO).then(result => {
      setFilterOptions(result.data);
    });
  }, []);

  async function getStatistics() {
    const prevStat = { ...statData };

    setDataLoaded(false);
    setDataLoadedCount(0);

    // eslint-disable-next-line no-unused-vars
    const messageObject = await API.reduce(async (promise, url, idx) => {
      // 누산값 받아오기 (2)
      let result = await promise;
      // 누산값 변경 (3)
      result = await axios
        .get(`http://${url}?brand=M&adult-kids=성인&${queryString}`)
        .then(res => {
          setStatData(prev => {
            prevStat[DATANAME[idx]] = res.data;
            return { ...prevStat };
          });
          setDataLoadedCount(current => {
            return current + 1;
          });
        })
        .catch(err => alert(err));
      // 다음 Promise 리턴
      return result;
    }, {}).then(() => {
      setDataLoaded(true);
      setDataLoadedCount(0);
    });
  }

  return (
    <NavContainer>
      <NavExpBtnContainer
        showFilterOptions={showFilterOptions}
        onClick={showFilter}
      >
        <HorizonNavTri />
      </NavExpBtnContainer>
      <ShrinkFilter showFilterOptions={showFilterOptions}>
        <ChartRange />
        <WeeklyPerformance value="weekly-date" />
        <ProductType>
          {filterOptions.categories && (
            <CheckOptions
              value="categories" //데이터 접근을 위한 표시자
              filterOptions={filterOptions.categories}
            />
          )}
          {filterOptions.subcategories && (
            <CheckOptions
              value="subcategories"
              filterOptions={
                filterOptions.subcategories[selectedFilterOptions.categories]
              }
            />
          )}
        </ProductType>
        <SelectSeason>
          {filterOptions.seasons && (
            <CheckOptions
              value="seasons"
              filterOptions={filterOptions.seasons}
            />
          )}
        </SelectSeason>
        <SelectButton getStatistics={getStatistics} />
      </ShrinkFilter>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5px;
  padding-right: 10px;
  background-color: #eeeeee;
  height: 4.8vh;
`;

const NavExpBtnContainer = styled.div`
  margin-right: 5px;
  cursor: pointer;
  transition: transform 1.5s;
  transform-origin: center;
  transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
  transform: ${props =>
    props.showFilterOptions ? 'rotate(810deg)' : 'rotate(0deg)'};
`;

const ShrinkFilter = styled.div`
  position: relative;
  padding-left: 5px;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
  gap: 40px;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    vertical-align: middle;

    border-radius: 10px;
    background-color: #377ef9;
    transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
    transition: transform 1s;
    transform-origin: right;
    transform: ${props =>
      props.showFilterOptions ? 'scaleX(0)' : 'scaleX(1)'};
    z-index: 5;
  }
`;

const ProductType = styled.div`
  display: flex;
  gap: 5px;
`;

const SelectSeason = styled.div``;

export default HorizonNav;
