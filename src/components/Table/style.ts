import styled from 'styled-components';

export const StyledTable = styled.div`
  /* height: 213px; */
  overflow-x: auto;
`;

export const StyledTableContainer = styled.div`
  /* border-collapse: separate; */
  min-width: 1100px;
  display: flex;

  div:first-child {
    background-color: none;
  }
`;

export const StyledNoResultsParagraph = styled.div`
  padding: 20px 28px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--text-secondary);

  p {
    font-weight: 300;
  }
`;
