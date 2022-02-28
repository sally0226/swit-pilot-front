import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: calc(100% - 2rem);
  height: 2rem;
  padding: 0.75rem 1rem;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #E6E6E8;
  background-color: #FFFFFF;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SettingIcon = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  img {
    filter: invert(52%) sepia(13%) saturate(0%) hue-rotate(306deg) brightness(100%) contrast(98%); // #888888
  }

  &:hover {
    img {
      filter: invert(0%) sepia(100%) saturate(17%) hue-rotate(53deg) brightness(95%) contrast(100%);
    }
  }
`;

export const ExitIcon = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  img {
    width: 1.5rem;
    filter: invert(52%) sepia(13%) saturate(0%) hue-rotate(306deg) brightness(100%) contrast(98%);
  }
  &:hover {
    img {
      filter: invert(0%) sepia(100%) saturate(17%) hue-rotate(53deg) brightness(95%) contrast(100%);
    }
  }
`;

export const Title = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
`;
