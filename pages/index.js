import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeadingBand from "./components/heading-band";
import Dashboard from "./components/dashboard/dashboard";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lens Dashboard</title>
        <meta
          name="description"
          content="One Place for all the social media content"
        />
        <link rel="icon" href="/lens-dashboard.png" />
      </Head>

      <main>
        <HeadingBand />
        <Dashboard />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
