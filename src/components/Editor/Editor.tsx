import Monaco from '@monaco-editor/react';
import { useEffect, useState } from 'react';
import { Codespaces } from '@libraries';
import { Container, Section } from './styles';
import { Alert, Terminal, Toolbar } from '@components';

interface Props {
  id: string;
  source: string;
  language: string;
}

export const Editor = (({ id, source, language }: Props): JSX.Element => {
  const [code, setCode] = useState('');
  const [show, setShow] = useState(false);
  const [type, setType] = useState<any>('');
  const [message, setMessage] = useState('');
  const [codeBefore, setCodeBefore] = useState('');
  const [request, setRequest] = useState<{ id: string; code_output: string }>();

  const handleEditorChange = ((value: string | undefined, e: any) => {
    if (value) setCode(value);
  });

  const handleSaveCode = (async () => {
    const { error, data: { message } } = await Codespaces.save(id, code);

    if (!error) {
      setType('success');
      setCodeBefore(code);
    } else setType('error');

    setMessage(message);
    setShow(true);
  });

  const handleRunCode = (async () => {
    if (code !== codeBefore) {
      setType('warning');
      setMessage('Save code before running.');
      setShow(true);
      return;
    }

    const { error, data: { request, message } } = await Codespaces.run(id);

    setType(error ? 'error' : 'success');
    setMessage(message);
    setShow(true);

    if (!error) {
      setRequest(request);

      const interval = setInterval(async () => {
        const { data } = await Codespaces.findRequest(id, request.id);

        if (data) {
          setRequest(data);

          if (data.code_output) clearInterval(interval);
        }

      }, 1000);
    }
  });

  useEffect(() => { 
    setCode(source);
    setCodeBefore(source); 
  }, []);

  return (
    <>
      <Container>
        <Toolbar runOnClick={handleRunCode} saveOnClick={handleSaveCode} />
        <Section>
          <Monaco
            width={'50%'}
            theme={'vs-dark'}
            defaultLanguage={language}
            onChange={handleEditorChange}
            value={source}
          />
          <Terminal text={request?.code_output} />
        </Section>
      </Container>
      {show && <Alert setShow={setShow} show={show} text={message} type={type} />}
    </>
  );
});