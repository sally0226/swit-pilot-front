import styled from 'styled-components';
import { COLOR } from '../../utils/constant';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: ${(props) => `${props.size}rem`};
  min-width: ${(props) => `${props.size}rem`};
  max-width: ${(props) => `${props.size}rem`};
  height: ${(props) => `${props.size}rem`};
  background-color: ${(props) => COLOR[props.color]};
  color: ${(props) => props.color > 4 ? '#FFFFFF' : '#000000'};
`;
