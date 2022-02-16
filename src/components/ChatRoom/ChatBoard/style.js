import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background-color: #F6F8FA;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888888;
    border-radius: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: none;
  }
`;
