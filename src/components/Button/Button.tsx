import { ButtonBox, Props } from './styles';

interface ButtonProps extends Props {
  text: string;
  onClick: (() => void);
}

export const Button = ((props: ButtonProps): JSX.Element => {
  return (
    <>
      <ButtonBox
        width={props.width} textColor={props.textColor}
        borderColor={props.borderColor} backgroundColor={props.backgroundColor}
        hoverBorderColor={props.hoverBorderColor} hoverTextColor={props.hoverTextColor}
        hoverBackgroundColor={props.hoverBackgroundColor} onClick={props.onClick}
      >
        {props.text}
      </ButtonBox>
    </>
  );
});