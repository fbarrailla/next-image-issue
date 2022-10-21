import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reproduce issue with Next/Image</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          alt="🐶"
          width={346}
          height={433}
          src="https://images.unsplash.com/photo-1587402092301-725e37c70fd8"
          style={{ border: '1px solid red!important' }}
        />
      </main>
    </div>
  );
};

export default Home;
