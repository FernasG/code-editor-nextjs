import styled from 'styled-components';

export type AlertTypes = 'error' | 'success' | 'warning';

interface Props {
  show: boolean;
  type: AlertTypes;
}

const Colors: Readonly<{ [x: string]: string }> = { error: 'cinnabar', success: 'jade', warning: 'jonquil' };

const ColorMap = ((type: AlertTypes) => {
  const color = Colors[type];

  return `var(--${color})`;
})

export const Container = styled.div<Props>`
  min-width: 150px;
  min-height: 70px;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  display: flex;
  padding: 10px;
  background: ${(props) => ColorMap(props.type)};
  transform: translate(-50%, 500%);
  transition: opacity 500ms ease-in-out;
  align-items: center;
  font-weight: bold;
  justify-content: center;
  opacity: ${(props) => props.show ? '1' : '0'};
`;