import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Props, SignInBox, TitleBox, Title, BodyBox, FooterBox } from './styles';
import { Alert, Link, Input, Button } from '@components';
import { Users } from '@libraries';

export const SignIn = (({ width, height }: Props): JSX.Element => {
  const { push } = useRouter();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [type, setType] = useState<any>('');
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (async () => {
    const loginRequest = await Users.signIn(email, password);

    if (loginRequest.statusCode === 200) {
      push('/codespaces');

      setType('success');
      setMessage('Login successful.');
    } else {
      const { data: { message } } = loginRequest;

      setType('error');
      setMessage(message);
    }

    setShow(true);
  });

  useEffect(() => { }, [message]);

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
      {show && <Alert text={message} show={show} setShow={setShow} type={type} />}
    </>
  );
});