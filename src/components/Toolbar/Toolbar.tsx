import { Bar, OptionsArea, RunButton, SaveButton, Title, TitleArea } from './styles';
import { BsFillPlayFill } from 'react-icons/bs';
import { AiFillSave } from 'react-icons/ai';

interface Props {
  saveOnClick: (() => any);
  runOnClick: (() => any);
}

export const Toolbar = (({ saveOnClick, runOnClick }: Props): JSX.Element => {
  return (
    <>
      <Bar>
        <TitleArea>
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