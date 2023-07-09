import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '../../styles/Codespaces.module.css';
import { Navbar, Panel } from '@components';

const inter = Inter({ subsets: ['latin'] });

export default function Codespaces() {
  return (
    <>
      <Head>
        <title>Code Editor - Codespaces</title>
      </Head>
      <main className={`${styles.container} ${inter.className}`}>
        <Navbar></Navbar>
        <Panel></Panel>
      </main>
    </>
  );
}