import styled from 'styled-components';

export const StyledSearchInput = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50px;
  padding: 10px 15px;
  position: relative;
  overflow: hidden;
  height: 35px;

  .search-icon {
    width: 14px;
    height: 14px;
    position: absolute;
    top: 10px;
    left: 15px;
  }

  input {
    background-color: #f5f5fa;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    font-size: 1rem;
    padding-left: 42px;
    padding: 11px 0 9px 42px;
    display: flex;
    align-items: center;
    font-family: Roboto;
  }

  input::placeholder {
    color: #9b9eac;
    letter-spacing: 0.5px;
  }
`;
