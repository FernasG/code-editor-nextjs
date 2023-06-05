import { Props, SignInBox, TitleBox, Title, BodyBox, FooterBox } from './styles';
import { Link, Input, Button } from '..';

export const SignIn = (({ width, height }: Props): JSX.Element => {
  return (
    <>
      <SignInBox width={width} height={height}>
        <TitleBox>
          <Title>Sign In</Title>
        </TitleBox>

        <BodyBox>
          <Input inputPlaceholder={'Email'} inputType={'email'}></Input>
          <Input inputPlaceholder={'Password'} inputType={'password'}></Input>
        </BodyBox>

        <FooterBox>
          <Link text={'Not registered yet? Sign Up.'} color={'--second-color'}></Link>
          <Button
            width='100px'
            text={'Sign In'}
            textColor={'var(--white)'}
            backgroundColor={'var(--neon-blue)'}
            borderColor={'var(--neon-blue)'}
          ></Button>
        </FooterBox>
      </SignInBox>
    </>
  );
});