import { LabelBox } from './styles';

interface Props {
  text: string;
}

export const Label = (({ text }: Props): JSX.Element => {
  return (
    <>
      <LabelBox>{text}</LabelBox>
    </>
  );
});