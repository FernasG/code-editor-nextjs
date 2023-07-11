import { Container } from './styles';
import { JetBrains_Mono } from 'next/font/google';

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] });

interface Props {
  text?: string;
}

export const Terminal = (({ text }: Props): JSX.Element => {
  return (
    <>
      <Container className={jetBrainsMono.className}>
        {text}
      </Container>
    </>
  );
});