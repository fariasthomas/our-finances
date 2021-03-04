import Head from 'next/head'
import { Cards } from '../components/Cards';
import { Header } from '../components/Header';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Our Finances</title>
      </Head>

      <Header />
      <Cards />
    </div>
  )
}
