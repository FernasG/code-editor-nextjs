import { AiOutlineClose } from 'react-icons/ai';
import { Dispatch, SetStateAction, useState } from 'react';
import {
  Input,
  Label,
  Select,
  Option,
  Overlay,
  TextArea,
  ModalBody,
  Container,
  InputField,
  HeaderTitle,
  ModalFooter,
  ModalHeader,
  CreateButton,
  CancelButton,
  HeaderOptions
} from './styles';

interface Props {
  show: boolean;
  setShow: any;
  onClickSave: ((name: string, description: string, language: string) => any);
}

type ReactEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
type ReactSetState = Dispatch<SetStateAction<any>>;

export const Modal = (({ show, setShow, onClickSave }: Props): JSX.Element => {
  const [name, setName] = useState('');
  const [language, setLanguage] = useState<string>('python');
  const [description, setDescription] = useState('');

  const handleOnChange = ((e: ReactEvent, setAttribute: ReactSetState) => {
    const { target: { value } } = e;
    setAttribute(value);
  });

  const handleCloseModal = (() => { setShow(false); });

  const handleCreateCodespace = (() => onClickSave(name, description, language));

  return (
    <>
      <Overlay show={show} onClick={handleCloseModal} />
      <Container show={show}>
        <ModalHeader>
          <HeaderTitle>
            Create Codespace
          </HeaderTitle>
          <HeaderOptions onClick={handleCloseModal}>
            <AiOutlineClose fontWeight={'bold'} />
          </HeaderOptions>
        </ModalHeader>
        <ModalBody>
          <InputField>
            <Label>Name</Label>
            <Input
              placeholder={'Name'}
              type={'text'}
              value={name}
              onChange={((e) => handleOnChange(e, setName))}
            />
          </InputField>

          <InputField>
            <Label>Language</Label>
            <Select value={language} onChange={((e) => handleOnChange(e, setLanguage))}>
              <Option disabled>Pick a language</Option>
              <Option value={'python'}>Python</Option>
              <Option value={'javascript'}>JavaScript</Option>
            </Select>
          </InputField>

          <InputField>
            <Label>Description</Label>
            <TextArea
              placeholder={'Description'}
              value={description}
              onChange={((e) => handleOnChange(e, setDescription))}
            />
          </InputField>
        </ModalBody>
        <ModalFooter>
          <CreateButton onClick={handleCreateCodespace}>Create</CreateButton>
          <CancelButton onClick={handleCloseModal}>Cancel</CancelButton>
        </ModalFooter>
      </Container>
    </>
  );
});