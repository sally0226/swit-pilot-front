import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888888;
    border-radius: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background-color: #E6E6E8;
    border-radius: 0.5rem;
  }
`;

export const Description = styled.span`
  width: 100%;
  padding: 0.5rem 0;
  border-bottom: 1px solid #E6E6E8;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 1rem - 2px);
  height: 1.5rem;
  padding: 0.5rem;
  color: #888888;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    background-color: #E6E6E8;
    color: #000000;
    font-weight: 600;
  }
`;
