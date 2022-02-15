import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import axios from 'axios';
import { convertKey } from '../../../../../utils/Functions';

import { keyValue } from './constants/key';
import SalesChannelTable from './SalesChannelTable';
import SalesChannelChart from './SalesChannelChart';
import { useRecoilState } from 'recoil';
import { staticData } from '../../../../../atom/staticData';

export default function SalesChannelStatus() {
  const [fullData] = useRecoilState(staticData);
  const [data, setData] = useState();
  const [renderedData, setRenderedData] = useState('서브카테고리');
  const contentType = {
    서브카테고리: 'weeklySubcategory',
    도메인: 'weeklyDomain',
    스타일: 'weeklyStyle',
    채널: 'weeklyChannel',
    유통: 'weeklyDistribution',
  };

  // useEffect(() => {
  //   axios
  //     .get('./data/mockData.json')
  //     .then(res => {
  //       return convertKey(res.data, keyValue);
  //     })
  //     .then(res => {
  //       setData({ ...res });
  //     })
  //     .catch(err => console.log(err));
  // }, []); // 의존성 배열은 전역상태로 변경하기

  useEffect(() => {
    let temp = convertKey(fullData, keyValue);
    setData({ ...temp });
  }, [fullData]); // 의존성 배열은 전역상태로 변경하기

  const changeDisplayData = event => {
    setRenderedData(event.target.value);
  };

  return (
    <OuterContainer>
      <PageTitle>
        <TitleSpan>주간 판매 현황</TitleSpan>
      </PageTitle>
      <ContentOptionBox>
        {Object.keys(contentType).map((option, idx) => {
          return (
            <ContentBtn
              key={idx}
              renderedData={renderedData}
              onClick={changeDisplayData}
              value={option}
            >
              {option}
            </ContentBtn>
          );
        })}
      </ContentOptionBox>
      {data &&
        (contentType[renderedData] !== 'weeklyStyle' ? (
          <InnerContainer>
            <SalesChannelTable
              data={data[[contentType[renderedData]] + 'Table']}
            />
            <SalesChannelChart
              data={data[[contentType[renderedData]] + 'Timeseries']}
            />
          </InnerContainer>
        ) : (
          <InnerContainer>
            <SalesChannelTable
              onlyTable={true}
              data={data[[contentType[renderedData]] + 'Table']}
            />
          </InnerContainer>
        ))}
    </OuterContainer>
  );
}

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 94.8vh;
  width: 90vw;
  overflow-y: scroll;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1vw;
`;

const ContentOptionBox = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0;
  padding-left: 2vw;
`;

const PageTitle = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.pointColors.blue};
  height: 7vh;
  width: 86.5vw;
  padding-left: 2vw;
  border-radius: 10px;
`;

const TitleSpan = styled.span`
  display: block;
  font-size: 30px;
  font-weight: bold;
  color: white;
`;

const ContentBtn = styled.button`
  width: max-content;
  padding: 10px 20px;
  border-radius: 7px;
  font-size: 18px;
  font-weight: 700;
  ${props =>
    props.renderedData === props.value
      ? `color: white; background-color: #89ba16`
      : `color: black; background-color: white`};

  &:hover {
    color: white;
    background-color: #c1d82f;
  }
`;
