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

export const Card = styled.div`
  width: 100%;
  min-height: 60px;
  background: var(--layer-03);
  border: 2.5px solid var(--neon-blue);
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  transition: all 500ms;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    border-color: var(--turquoise);
  }
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > :first-child {
    font-weight: bold;
    font-size: 1.2em;
  }
`;

export const CardBody = styled.div`
  font-size: 0.9em;
  color: var(--second-color);
`;