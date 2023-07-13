import { useEffect } from 'react';
import { AlertTypes, Container } from './styles';

interface Props {
  text: string;
  type: AlertTypes;
  show: boolean;
  setShow: any;
}

export const Alert = (({ text, type, show, setShow }: Props): JSX.Element => {
  useEffect(() => {
    const timeout = setTimeout(() => setShow(false), 2500);

    return (() => clearTimeout(timeout));
  }, [text]);

  return (<Container show={show} type={type}>{text}</Container>);
});