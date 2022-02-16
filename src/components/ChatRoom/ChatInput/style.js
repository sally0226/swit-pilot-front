import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 2rem);
  margin: 0 1rem 1rem 1rem;
  height: 3rem;
  border: 1px solid #E6E6E8;
`;

export const Input = styled.input`
  padding: 0.25rem 0.5rem;
  width: calc(100% - 1rem);
  height: calc(100% - 0.5rem);
  border: none;
  &:focus-visible {
    outline: none;
  }
  &::placeholder {
    color: #888888;
  }
`;

export const Button = styled.button`
  border: none;
  background: #E6E6E8;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  img {
    filter: invert(100%);
  }
`;
