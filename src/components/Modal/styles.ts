import styled, { css } from 'styled-components';

interface Props {
  show: boolean;
}

export const Overlay = styled.div<Props>`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: ${(props) => props.show ? 'block' : 'none'};
  z-index: 1;
`;

export const Container = styled.div<Props>`
  position: absolute;
  z-index: 2;
  width: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background: var(--layer-02);
  display: ${(props) => props.show ? 'block' : 'none'};
  & > * {
    width: 100%;
  }
`;

export const ModalHeader = styled.div`
  height: 50px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  width: 94%;
  font-size: 1.3em;
`;

export const HeaderOptions = styled.div`
  width: 6%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 500ms;

  &:hover {
    color: var(--cinnabar);
  }
`;

export const ModalBody = styled.div`
  /* min-height: 240px; */
  border-top: 1px solid var(--gray);
  border-bottom: 1px solid var(--gray);
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

export const InputField = styled.div`
  width: 90%;
  display: block;
  display: flex;
  position: relative;
  margin-bottom: 10px;
  flex-direction: column;
`;

const InputBaseCSS = css`
  all: unset;
  width: calc(100% - 13px);
  position: relative;
  height: 35px;
  outline: none;
  padding: 0 5px;
  background: var(--layer-08);
  border-radius: 3px;
  border: 2px solid var(--neon-blue);
`;

export const Input = styled.input`
  ${InputBaseCSS};
`;

export const Label = styled.label`
  margin-bottom: 2px;
  color: var(--second-color);
`;

export const TextArea = styled.textarea`
  ${InputBaseCSS};
  padding: 5px;
  min-height: 80px;
`;

export const Select = styled.select`
  ${InputBaseCSS};
  display: flex;
  align-items:center;
`;

export const Option = styled.option``;

export const ModalFooter = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Button = styled.button`
  border: 2px solid;
  cursor: pointer;
  padding: 7.5px;
  width: 70px;
  height: 30px;
  font-weight: bolder;
  font-size: 0.9em;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
  transition: all 500ms;
`;

export const CreateButton = styled(Button)`
  border-color: var(--jade);

  &:hover {
    background: var(--jade);
    color: var(--text-color);
  }
`;

export const CancelButton = styled(Button)`
  border-color: var(--cinnabar);
  background: var(--cinnabar);
`;