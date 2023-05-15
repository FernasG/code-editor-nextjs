import Head from 'next/head';
import { Inter } from 'next/font/google';
import { SignBox } from '../components';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Code Editor</title>
      </Head>
      <main className={'container'}>
        <SignBox></SignBox>        
      </main>
    </>
  );
}