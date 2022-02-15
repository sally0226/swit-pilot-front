import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  &:hover {
    background-color: #F1F1F1;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Contents = styled.pre`
  width: 100%;
`;
