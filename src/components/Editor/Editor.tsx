import Monaco from '@monaco-editor/react';
import { useState } from 'react';
import { Codespaces } from '@libraries';
import { Terminal, Toolbar } from '@components';
import { Container, Section } from './styles';

interface Props {
  id: string;
  source: string;
  language: string;
}

export const Editor = (({ id, source, language }: Props): JSX.Element => {
  const [code, setCode] = useState('');
  const [request, setRequest] = useState<{ id: string; code_output: string }>();

  const handleEditorChange = ((value: string | undefined, e: any) => {
    if (value) setCode(value);
  });

  const handleSaveCode = (async () => {
    const response = await Codespaces.save(id, code);
    console.log(response);
  });

  const handleRunCode = (async () => {
    const response = await Codespaces.run(id);

    if (response) {
      const { data: { request: req } } = response;
      setRequest(req);

      const interval = setInterval(async () => {
        const { data } = await Codespaces.findRequest(id, req.id);

        if (data) {
          setRequest(data);

          if (data.code_output) clearInterval(interval);
        }

      }, 1000);
    }
  });

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
    </>
  );
});