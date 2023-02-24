import styled from '@emotion/styled';

export const StatisticsList = styled.ul`
  background-color: #fff;
  border: 1px dashed #d36b00;
  padding: 20px;
  border-radius: 10px;
`;

export const StatisticsItem = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  & span {
    margin-left: 20px;
  }
  margin-right: 50px;
`;
