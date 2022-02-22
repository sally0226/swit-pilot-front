import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
`;

export const RoomContainer = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 4rem); // 4rem: chat header
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
