import Monaco from '@monaco-editor/react';
import { Codespaces } from '@libraries';
import { Terminal, Toolbar } from '@components';
import { Container, Section } from './styles';
import { useEffect, useState } from 'react';

interface Props {
  id: string;
  source: string;
  language: string;
}

export const Editor = (({ id, source, language }: Props): JSX.Element => {
  const [code, setCode] = useState('');
  const [request, setRequest] = useState<{ id: string; output: string }>();

  const handleEditorChange = ((value: string | undefined, e: any) => {
    if (value) setCode(value);
  });

  const handleSaveCode = (async () => {
    const response = await Codespaces.save(id, code);
    console.log(response);
  });

  const handleRunCode = (async () => {
    const response = await Codespaces.run(id);
    if (response) setRequest(response.data.request);
  });

  useEffect(() => {
    if (request) {
      console.log(request);
      const interval = setInterval(async () => {
        const response = await Codespaces.findRequest(id, request.id);
        if (response) setRequest(response.data);
      }, 1500);

      if (request.output) clearInterval(interval);

      return (() => clearInterval(interval));
    }
  }, [request]);

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
          <Terminal />
        </Section>
      </Container>
    </>
  );
});