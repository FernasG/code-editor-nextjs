import Head from 'next/head';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Editor, Navbar, Panel } from '@components';
import styles from '../../styles/Codespaces.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Codespaces() {
  const [codespace, setCodespace] = useState<{ id: string; code: string; language: string; } | null>(null);
  const { push } = useRouter();

  useEffect(() => {
    if (!codespace) push('codespaces'); 
  }, [codespace]);

  return (
    <>
      <Head>
        <title>Code Editor - Codespaces</title>
      </Head>
      <main className={`${styles.container} ${inter.className}`}>
        {
          !codespace ? (<><Navbar /><Panel setCodespace={setCodespace} /></>) :
            <Editor id={codespace.id} source={codespace.code} language={codespace.language} />
        }
      </main>
    </>
  );
}