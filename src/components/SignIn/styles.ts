import styled from 'styled-components';

export interface Props {
  width: string;
  height: string;
}

export const Container = styled.div<Props>`
  width: ${(props) => props.width};
  min-height: ${(props) => props.height};
  background: var(--layer-01);
  user-select: none;
  border-radius: 10px;
`;

export const SignInBox = styled(Container)`
  top: 50%;
  left: 50%;
  padding: 10px;
  position: absolute;
  transform: translate(-50%, -50%);
`;

export const TitleBox = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
`;