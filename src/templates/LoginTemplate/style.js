import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #f6f8fa;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 18rem;
  height: 23rem;
  padding: 4rem 3rem;
  background-color: #ffffff;
  border: 1px solid #ff505f;
  border-radius: 1rem;
  justify-content: space-around;
  align-items: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  & > * {
    width: 100%;
  }
  gap: 1rem;
  justify-content: space-evenly;
`;

export const Line = styled.div`
  width: 60%;
  height: 2px;
  background-color: #dfdfdf;
  margin: 1rem 0;
`;
