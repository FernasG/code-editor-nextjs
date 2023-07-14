import styled from 'styled-components';

export interface Props {
  width: string;
  height: string;
}

export const Div = styled.div<Props>`
  width: ${(props) => props.width};
  min-height: ${(props) => props.height};
`;