import { Bar, OptionsArea, RunButton, SaveButton, Title, TitleArea } from './styles';
import { BsFillPlayFill } from 'react-icons/bs';
import { AiFillSave } from 'react-icons/ai';
import { useRouter } from 'next/router';

interface Props {
  saveOnClick: (() => any);
  runOnClick: (() => any);
}

export const Toolbar = (({ saveOnClick, runOnClick }: Props): JSX.Element => {
  const { push } = useRouter();

  return (
    <>
      <Bar>
        <TitleArea onClick={(() => { push('codespaces'); window.location.reload(); })}>
          <Title>Code Editor</Title>
        </TitleArea>
        <OptionsArea>
          <SaveButton onClick={saveOnClick}>
            <span>Save</span>
            <AiFillSave />
          </SaveButton>
          <RunButton onClick={runOnClick}>
            <span>Run</span>
            <BsFillPlayFill />
          </RunButton>
        </OptionsArea>
      </Bar>
    </>
  );
});