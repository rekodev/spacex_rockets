import styled from 'styled-components';

export const StyledTable = styled.table`
  /* border-collapse: separate; */
  border-spacing: 0 3px;
  table-layout: fixed;
  width: 100%;

  thead tr th {
    text-align: start;
    padding: 16px 28px;
    color: var(--text-secondary);
    font-size: 14px;
    text-align: end;
  }

  thead tr th:first-child {
    text-align: start;
  }

  thead tr th:last-child {
    padding-right: 46px;
  }
`;
