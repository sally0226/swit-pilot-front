import styled from 'styled-components';
import { COLOR } from '../../../../utils/constant';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 3rem;
  min-width: 3rem;
  max-width: 3rem;
  height: 3rem;
  background-color: ${(props) => COLOR[props.color]};
  color: ${(props) => props.color > 4 ? '#FFFFFF' : '#000000'};
`;
