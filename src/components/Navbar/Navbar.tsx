import { StorageService } from '@libraries';
import { ButtonUsername, Nav, OptionsArea, Title, TitleArea, UserButton } from './styles';
import { BiSolidUserCircle } from 'react-icons/bi';
import { useEffect, useState } from 'react';

export const Navbar = ((): JSX.Element => {
  const [username, setUsername] = useState('');
  useEffect(() => {
    const username = StorageService.get('username') as string;
    const [firstName] = username.split(' ');
    setUsername(firstName);
  });

  return (
    <>
      <Nav>
        <TitleArea>
          <Title>Code Editor</Title>
        </TitleArea>
        <OptionsArea>
          <UserButton>
            <ButtonUsername>{username}</ButtonUsername>
            <BiSolidUserCircle size={'15pt'} />
          </UserButton>
        </OptionsArea>
      </Nav>
    </>
  );
});