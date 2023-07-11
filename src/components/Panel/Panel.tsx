import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { Body, Button, Container, Header, PanelButtons, Title } from './styles';
import { Card, Modal } from '@components';
import { Codespaces } from '@libraries';

interface Props {
  setCodespace: any;
}
interface Codespace {
  id: string;
  name: string;
  language: string;
  updated_at: string;
}

export const Panel = (({ setCodespace }: Props): JSX.Element => {
  const { push } = useRouter();
  const [codespaces, setCodespaces] = useState<Codespace[]>([]);

  const getCodespaces = (async () => {
    const response = await Codespaces.findAll().catch(err => []);
    setCodespaces(response.data);
  });

  useEffect(() => { getCodespaces(); }, []);

  const handleOnClick = (async (id: string) => {
    push(`codespaces?id=${id}`);
    const response = await Codespaces.findOne(id).catch(err => { });
    if (response) setCodespace(response.data);
  });

  return (
    <>
      <Modal></Modal>
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
            codespaces.map(({ id, name, language, updated_at }) => {
              return (
                <Card
                  id={id}
                  name={name}
                  language={language}
                  updated_at={updated_at}
                  onClick={(() => handleOnClick(id))}
                />
              );
            })
          }
        </Body>
      </Container>
    </>
  );
});