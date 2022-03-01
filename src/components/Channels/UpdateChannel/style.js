import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  width: 100%;
  padding: 0.5rem 0;
`;

export const Input = styled.input`
  display: flex;
  width: calc(100% - 2px - 1rem);
  height: 2rem;
  padding: 0.5rem;
  border: 1px solid #E6E6E8;
  border-radius: 5px;
  
  &:focus-visible {
    outline: none;
    border-color: #888888;
  }
`;
