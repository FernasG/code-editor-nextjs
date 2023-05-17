import { Anchor, Props } from './styles';

interface LinkProps extends Props {
  text: string;
  href?: string;
}

export const Link = (({ text, color, href }: LinkProps): JSX.Element => {
  return (
    <>
      <Anchor color={color} href={href}>{text}</Anchor>
    </>
  );
});