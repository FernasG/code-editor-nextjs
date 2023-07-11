import styled from 'styled-components';

interface Props {
  show: boolean;
}

export const Overlay = styled.div<Props>`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  visibility: ${(props) => props.show ? '1' : '0'};
  z-index: 1;
`;

export const Container = styled.div`
  position: absolute;
  z-index: 2;
  width: 500px;
  height: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background: var(--layer-02);
`;