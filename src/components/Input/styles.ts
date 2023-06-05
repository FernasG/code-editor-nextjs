import styled from "styled-components";

type Types = 'number' | 'text' | 'password' | 'email';

export interface Props {
  inputType: Types;
  inputPlaceholder: string;
}

export const InputBox = styled.input`
  all: unset;
  width: calc(100% - 10px);
  height: 35px;
  outline: none;
  padding: 0 5px;
  background: var(--layer-08);
  border-radius: 3px;
  border: 2px solid #2176AE;
`;