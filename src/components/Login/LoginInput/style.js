import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Input = styled.input`
  width: 7rem;
  border: none;
	box-shadow: 0px 1px 0px 0px #666;
  height: 1.5rem;
  
  &::placeholder {
		color: #777777;
	}

	&:focus-visible {
		outline: none;
    width: calc(100% - 3rem);
		box-shadow: 0px 2px 0px 0px #888888;
	}

  transition: width 0.3s ease-in-out;
`;

export const Label = styled.span`
  width: 3rem;
  font-size: 1.2rem;
  line-height: 1.5rem;
`;
