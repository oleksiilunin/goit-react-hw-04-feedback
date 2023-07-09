import styled from '@emotion/styled';

const StatisticList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  width: 100%;
  height: 100%;
  max-height: 292px;

  border-radius: 16px;
  border: 1px solid #cececf;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #d2d8db;
`;

const StatisticWrapper = styled.li`
  font-size: 20px;
  font-weight: 500;
  color: #5b5c6c;
`;

const StatisticValue = styled.span`
  font-weight: 600;

  color: #666666;
`;

export { StatisticList, StatisticWrapper, StatisticValue };
