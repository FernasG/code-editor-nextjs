import styled from 'styled-components';

export interface Props {
  textColor: string;
  borderColor: string;
  backgroundColor: string;
}

export const ButtonEl = styled.button<Props>`
  border: 2px solid;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  color: ${({ textColor }) => `var(${textColor})`};
  background: ${({ backgroundColor }) => `var(${backgroundColor})`};
  border-color: ${({ borderColor }) => `var(${borderColor})`};
`;