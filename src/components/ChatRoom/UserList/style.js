import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  background-color: #FFFFFF;
  border-left: 1px solid #E6E6E8;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Header = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  width: calc(100% - 2rem);
  height: 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-bottom: 1px solid #E6E6E8;
`;

export const CloseIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  background-color: #FFFFFF;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  img {
    width: 1rem;
    height: 1rem;
    filter: invert(52%) sepia(13%) saturate(0%) hue-rotate(306deg) brightness(100%) contrast(98%);
  }
  opacity: 0.7;

  &:hover {
    opacity: 1.0;
    background-color: #EDEDED;
  }
`;