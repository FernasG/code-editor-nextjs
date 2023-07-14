import styled from 'styled-components';

export interface Props {
  color?: string;
}

export const Anchor = styled.a<Props>`
  color: ${(props) => `var(${props.color ? props.color : '--text-color'})`};
  cursor: pointer;
  text-decoration: underline;
`;