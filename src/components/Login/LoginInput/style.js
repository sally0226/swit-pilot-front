import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Input = styled.input`
  width: calc(100% - 3rem);
  border: 1px solid #a1a1a1;
  border-radius: 0.2rem;
  height: 1.5rem;
`;

export const Label = styled.span`
  width: 3rem;
  font-size: 1.2rem;
  line-height: 1.5rem;
`;