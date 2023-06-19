import styled from 'styled-components';

export const StyledSearchBar = styled.div`
  height: 54px;
  padding: 12px 24px;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;

  gap: 2.6rem;

  h3 {
    font-family: Barlow;
  }

  p {
    font-size: 14px;
    font-weight: 300;
    margin-top: 5px;
    color: var(--text-secondary);
  }

  div {
    flex-grow: 1;
  }
`;
