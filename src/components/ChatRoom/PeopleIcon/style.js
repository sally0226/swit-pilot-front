import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding: 0.5rem;
  gap: 0.5rem;
  cursor: pointer;
  img {
    filter: invert(52%) sepia(13%) saturate(0%) hue-rotate(306deg) brightness(100%) contrast(98%); // #888888
  }

  &:hover {
    background-color: #E6E6E8;
  }
`;
