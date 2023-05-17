import Head from 'next/head';
import { Inter } from 'next/font/google';
import { SignIn } from '@/components';
import styles from '../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Code Editor</title>
      </Head>
      <main className={`${styles.container} ${inter.className}`}>
        <SignIn width='400px' height='200px'></SignIn>
      </main>
    </>
  );
}