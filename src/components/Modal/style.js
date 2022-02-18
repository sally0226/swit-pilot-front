import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 30%;
  max-height: 70%;
  border-radius: 1rem;
  padding: 2rem;
  z-index: 1;
  background: #FFFFFF;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: 2rem;
  width: 100%;
`;

export const Title = styled.span`
  font-size: 1.5rem;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
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

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;
