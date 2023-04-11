import Head from 'next/head';
import { Banner } from '@components';
import styles from '@/styles/Home.module.css';
import { Inter } from 'next/font/google';
import BannerImage from '../assets/banner.jpg';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Code Editor</title>
      </Head>
      <main className={styles.container}>
        <Banner heigth={'100vh'} width={'100%'} image={BannerImage}></Banner>
      </main>
    </>
  );
}