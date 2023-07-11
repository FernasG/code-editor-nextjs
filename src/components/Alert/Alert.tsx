import { useEffect, useState } from 'react';
import { AlertTypes, Container } from './styles';

interface Props {
  text: string;
  type: AlertTypes;
}

export const Alert = (({ text, type }: Props): JSX.Element => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(false), 2500);

    return (() => clearTimeout(timeout));
  }, [text]);

  return (
    <>
      <Container show={show} type={type}>{text}</Container>
    </>
  );
});