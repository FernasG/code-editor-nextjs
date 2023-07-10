import styled from 'styled-components';

export const Container = styled.section`
  width: 60%;
  min-height: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--layer-02);
  padding: 20px 40px;
  border-radius: 10px;
`;

export const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  & > * {
    width: 50%;
  }
`;

export const PanelButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  width: 145px;
  height: 35px;
  background: var(--neon-blue);
  color: var(--text-color);
  padding: 5px;
  font-weight: bold;
  border-radius: 50px;
  transition: all 500ms;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  &:hover {
    background: var(--dark-neon-blue);
  }
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const Title = styled.h1``;