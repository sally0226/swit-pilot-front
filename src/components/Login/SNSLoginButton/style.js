import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  width: calc(100% - 1rem);
  height: 2rem;
  padding: 0 0.5rem;
  img {
    width: 1.2rem;
    height: 1.2rem;
  }
  border: 1px solid #a1a1a1;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  cursor: pointer;

  &:hover {
    background-color: #dfdfdf;
  }

  &:active {
    opacity: 0.5;
  }

  transition: all 0.2s ease-in-out;
`;
