import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  justify-self: baseline;
  left: 20%;
  top: calc(5rem + 20%);
  background-color: #FFFFFF;
  width: 15%;
  border: 1px solid #E6E6E8;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

export const Select = styled.div`
  padding: 0.7rem;
  cursor: pointer;
  &:hover {
    background-color: #F5F5F3;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 0;
`;
