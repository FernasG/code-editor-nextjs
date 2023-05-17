import { Props, SignInBox, TitleBox, Title } from './styles';
import { Input, Link, Button } from '..';

export const SignIn = (({ width, height }: Props): JSX.Element => {
  return (
    <>
      <SignInBox width={width} height={height}>
        <TitleBox>
          <Title>Sign In</Title>
        </TitleBox>

        <div>
          <Input labelText={'Email'} inputType={'email'}></Input>
          <Input labelText={'Password'} inputType={'password'}></Input>
          <Link text={'Not registered yet? Sign Up.'} color={'--second-color'}></Link>

          {/* <Button text={'Sign In'} textColor={'#FFFFF'}></Button> */}
        </div>
      </SignInBox>
    </>
  );
});