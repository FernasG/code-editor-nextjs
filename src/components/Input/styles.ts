import styled from "styled-components";

type Types = 'number' | 'text' | 'password' | 'email';

export interface Props {
  labelText: string;
  inputType: Types;
}

export const InputBox = styled.input`
  all: unset;
  width: 80%;
  height: 35px;
  outline: none;
  padding: 0 5px;
  background: var(--layer-08);
  border-radius: 3px;
  border: 2px solid #8447FF;
`;