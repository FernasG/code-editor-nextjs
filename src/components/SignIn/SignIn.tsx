import { useState } from 'react';
import { Props, SignInBox, TitleBox, Title, BodyBox, FooterBox } from './styles';
import { Link, Input, Button } from '..';
import { Users } from '@libraries';
import { useRouter } from 'next/navigation';

export const SignIn = (({ width, height }: Props): JSX.Element => {
  const { push } = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (async () => {
    const loginRequest = await Users.signIn(email, password);

    if (loginRequest) push('/codespaces');
  });

  return (
    <>
      <SignInBox width={width} height={height}>
        <TitleBox>
          <Title>Sign In</Title>
        </TitleBox>

        <BodyBox>
          <Input
            inputPlaceholder={'Email'}
            inputType={'email'}
            onChange={setEmail}
            value={email}
          ></Input>
          <Input
            inputPlaceholder={'Password'}
            inputType={'password'}
            onChange={setPassword}
            value={password}
          ></Input>
        </BodyBox>

        <FooterBox>
          <Link text={'Not registered yet? Sign Up.'} color={'--second-color'}></Link>
          <Button
            onClick={handleSignIn}
            width='100px' text={'Sign In'} textColor={'var(--white)'}
            backgroundColor={'var(--neon-blue)'} borderColor={'var(--neon-blue)'}
            hoverBackgroundColor={'var(--dark-neon-blue)'} hoverBorderColor={'var(--dark-neon-blue)'}
          ></Button>
        </FooterBox>
      </SignInBox>
    </>
  );
});