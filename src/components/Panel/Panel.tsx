import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BiPlus, BiLogoPython, BiLogoJavascript } from 'react-icons/bi';
import { Body, Button, Card, CardBody, CardTitle, Container, Header, PanelButtons, Title } from './styles';
import { Codespaces } from '@libraries';

interface Codespace {
  id: string;
  name: string;
  language: string;
  updated_at: string;
}

export const Panel = ((): JSX.Element => {
  const { push } = useRouter();
  const [codespaces, setCodespaces] = useState<Codespace[]>([]);

  const getCodespaces = (async () => {
    const response = await Codespaces.findAll().catch(err => []);
    setCodespaces(response.data);
  });

  useEffect(() => { getCodespaces() });

  const handleOnClick = ((id: string) => push(`codespaces?id=${id}`));

  return (
    <>
      <Container>
        <Header>
          <Title>Codespaces</Title>
          <PanelButtons>
            <Button>
              <span>Add Codespace</span>
              <BiPlus size={'15pt'} fontWeight={'bold'} />
            </Button>
          </PanelButtons>
        </Header>
        <Body>
          {
            codespaces.map(codespace => {
              return (
                <>
                  <Card onClick={() => handleOnClick(codespace.id)}>
                    <CardTitle>
                      <span>{codespace.name}</span>
                      {codespace.language === 'python' ? <BiLogoPython size={'15pt'} /> : <BiLogoJavascript size={'15pt'} />}
                    </CardTitle>
                    <CardBody>Atualizado em: {new Date(codespace.updated_at).toLocaleString('pt-br', { dateStyle: 'medium' })}</CardBody>
                  </Card>
                </>
              );
            })
          }
        </Body>
      </Container>
    </>
  );
});