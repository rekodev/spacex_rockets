import styled from 'styled-components';

export const StyledTableRow = styled.tr`
  padding: 16px 28px;
  background-color: #fff;
  border-collapse: collapse;
  overflow: hidden;

  td {
    /* padding: 16px 28px; */
    padding: 16px;
    font-size: 14px;
    color: var(--text-secondary);
    text-align: end;
  }

  td:first-child {
    border-radius: 8px 0 0 8px;
    /* padding-left: 28px; */
    text-align: start;
    padding-left: 28px;
  }

  td:last-child {
    padding-right: 46px;
    border-radius: 0 8px 8px 0;
    /* padding-right: 28px; */
  }
`;
