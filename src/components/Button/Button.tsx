import { ButtonEl, Props } from './styles';

interface ButtonProps extends Props {
  text: string;
}

export const Button = (({ textColor, borderColor, backgroundColor, text }: ButtonProps) => {
  return (
    <>
      <ButtonEl textColor={textColor} borderColor={borderColor} backgroundColor={backgroundColor}>{text}</ButtonEl>
    </>
  );
});