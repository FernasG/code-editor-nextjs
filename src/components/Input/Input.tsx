import { InputBox, Props } from './styles';

export const Input = ((props: Props): JSX.Element => {
  return (
    <>
      <InputBox type={props.inputType} placeholder={props.inputPlaceholder}></InputBox>
    </>
  );
});