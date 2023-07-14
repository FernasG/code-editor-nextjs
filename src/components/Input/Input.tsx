import { InputBox, Props } from './styles';

export const Input = ((props: Props): JSX.Element => {
  const { onChange, value } = props;
  const handleOnChange = ((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  });

  return (
    <>
      <InputBox
        type={props.inputType}
        placeholder={props.inputPlaceholder}
        onChange={handleOnChange}
        value={value}
      ></InputBox>
    </>
  );
});