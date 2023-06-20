import styled from 'styled-components';

export const StyledTableColumn = styled.div`
  /* padding: 16px 28px; */

  background-color: var(--light-gray);
  border-collapse: collapse;
  overflow: hidden;
  display: flex;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3px;
  text-align: end;
  color: var(--text-secondary);

  h4 {
    padding: 16px 28px;
  }

  p {
    padding: 16px 28px;
    background-color: #fff;
  }

  :first-child {
    text-align: start;

    p {
      border-radius: 8px 0 0 8px;
    }
  }

  :last-child p {
    border-radius: 0 8px 8px 0;
  }
`;
