import styled from 'styled-components';

export default function PageTitle({ title }) {
  return <Title>{title}</Title>;
}

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.2vh;
  font-size: 24px;
`;
