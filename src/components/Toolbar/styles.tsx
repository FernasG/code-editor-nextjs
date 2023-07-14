import styled from 'styled-components';

export const Bar = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 10%;
  background: var(--layer-04);
  display: flex;
  user-select: none;
  flex-direction: row;
  & > div {
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

export const TitleArea = styled.div``;

export const Title = styled.h1`
  font-size: 1.5em;
  cursor: pointer;
`;

export const OptionsArea = styled.div`
  justify-content: flex-end;
`;

const Button = styled.button`
  width: 95px;
  height: 32.5px;
  color: var(--white);
  font-size: 1em;
  background: var(--layer-04);
  font-weight: bold;
  margin-left: 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  transition: all 500ms;
`;

export const SaveButton = styled(Button)`
  background-color: var(--burnt-sienna);
`;

export const RunButton = styled(Button)`
  background-color: var(--cerulean);
`;