import { BiPlus } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Body, Button, Container, Header, PanelButtons, Title } from './styles';
import { Alert, Card, Modal } from '@components';
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
  const [type, setType] = useState<any>('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);
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

  const handleCreateCodespace = (async (name: string, description: string, language: string) => {
    const response = await Codespaces.create(name, description, language);

    const { error, data: { message, codespace: data } } = response;
    setMessage(message);
    setType(error ? 'error' : 'success');
    setShowAlert(true);

    if (!error) {
      setShowModal(false);
      setCodespaces([...codespaces, data]);
    }
  });


  return (
    <>
      <Modal show={showModal} setShow={setShowModal} onClickSave={handleCreateCodespace} />
      <Container>
        <Header>
          <Title>Codespaces</Title>
          <PanelButtons>
            <Button onClick={((e) => setShowModal(true))}>
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
      {showAlert && <Alert setShow={setShowAlert} show={showAlert} text={message} type={type} />}
    </>
  );
});