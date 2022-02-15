import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: calc(20% - 2rem);
  flex-direction: column;
  padding: 1rem;
  gap: 0.2rem;
  border-right: 1px solid #E6E6E8;
  background-color: #FFFFFF;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
`;

export const Title = styled.span`
`;

export const Button = styled.button`
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  background-color: #E6E6E8;
  opacity: 0.5;
  cursor: pointer;

  img {
    width: 0.9rem;
    height: 0.9rem;
    filter: invert(52%) sepia(13%) saturate(0%) hue-rotate(306deg) brightness(100%) contrast(98%); // #888888
  }

  &:hover {
    opacity: 1;
  }
`;
