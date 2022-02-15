import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  height: 2rem;
  border-radius: 10px;
  font-weight: ${(props) => props.isHere ? '700' : '500'};
  background-color: ${(props) => props.isHere ? '#E6E6E8' : '#FFFFFF'};

  &:hover {
    background-color: ${(props) => props.isHere ? '#E6E6E8' : '#F5F5F3'};
  }
`;
