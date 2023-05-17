import { LabelEl } from './styles';

interface Props {
  text: string;
}

export const Label = (({ text }: Props): JSX.Element => {
  return (
    <>
      <LabelEl>{text}</LabelEl>
    </>
  );
});