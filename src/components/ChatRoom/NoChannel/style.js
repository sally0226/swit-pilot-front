import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0.3;
  gap: 1rem;
  img {
    width: 10%;
  }
`;

export const Description = styled.span`
  font-size: 1.5rem;
`;
