import { CardContainer, CardBody, CardTitle } from './styles';
import { BiLogoPython, BiLogoJavascript } from 'react-icons/bi';

interface Props {
  id: string;
  name: string;
  language: string;
  updated_at: string;
  onClick: (() => any);
}

export const Card = (({ id, name, language, updated_at, onClick }: Props): JSX.Element => {
  return (
    <>
      <CardContainer key={id} onClick={onClick}>
        <CardTitle>
          <span>{name}</span>
          {language === 'python' ? <BiLogoPython size={'15pt'} /> : <BiLogoJavascript size={'15pt'} />}
        </CardTitle>
        <CardBody>Atualizado em: {new Date(updated_at).toLocaleString('pt-br', { dateStyle: 'medium' })}</CardBody>
      </CardContainer>
    </>
  );
});