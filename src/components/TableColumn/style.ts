import styled from 'styled-components';

export const StyledTableColumn = styled.div`
  background-color: var(--light-gray);
  border-collapse: collapse;
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3px;
  text-align: end;
  color: var(--text-secondary);
  /* position: relative; */

  .arrow-container {
    display: flex;
    flex-direction: column;
    align-items: end;
    font-size: 0.8em;

    & i {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      font-size: 1em;
    }

    & i:first-child {
      align-self: end;
    }

    & i:hover {
      color: #a3a3a3;
      cursor: pointer;
    }

    & .active {
      color: #5a71e4;

      .arrow-container {
        position: initial;
      }
    }

    & .active:hover {
      color: #5a71e4;
    }
  }

  h4 {
    padding: 16px 28px;
    display: flex;
    align-items: center;
    justify-content: end;
    /* justify-content: end; */
    gap: 0.4em;
    text-align: end;
    position: relative;
  }

  h4.first {
    justify-content: start;
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
