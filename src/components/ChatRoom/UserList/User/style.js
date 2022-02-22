import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: calc(100% - 2rem);
  height: 1.5rem;
  padding: 1rem;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 1.3rem;
    filter: invert(52%) sepia(13%) saturate(0%) hue-rotate(306deg) brightness(100%) contrast(98%); // #888888
  }
`;
