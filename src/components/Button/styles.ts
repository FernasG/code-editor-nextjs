import styled from 'styled-components';

export interface Props {
  width: string;
  textColor: string;
  borderColor: string;
  backgroundColor: string;
  hoverTextColor?: string;
  hoverBorderColor?: string;
  hoverBackgroundColor?: string;
}

export const ButtonBox = styled.button<Props>`
  border: 2px solid;
  cursor: pointer;
  padding: 7.5px;
  width: ${({ width }) => width};
  font-weight: bolder;
  font-size: 0.9em;
  border-radius: 5px;
  color: ${({ textColor }) => textColor};
  background: ${({ backgroundColor }) => backgroundColor};
  border-color: ${({ borderColor }) => borderColor};
  transition: all 500ms;

  &:hover {
    color: ${(props) => props.hoverTextColor ? props.hoverTextColor : props.textColor};
    background: ${(props) => props.hoverBackgroundColor ? props.hoverBackgroundColor : props.backgroundColor};
    border-color: ${(props) => props.hoverBorderColor ? props.hoverBorderColor : props.borderColor};
  }
`;