import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Button = styled.button`
  background-color: #ffffff;
  width: 100%;
  height: 2rem;
  border: 1px solid #ff505f;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #efefef;
  }

  &:active {
    opacity: 0.5;
  }

  transition: all 0.2s ease-in-out;
`;
