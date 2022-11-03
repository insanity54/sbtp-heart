import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SBTP.XYZ</title>
        <meta name="description" content="English-focused Prememo TCG Collection Checklist" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://sbtp.xyz/">SBTP.XYZ!</a>
        </h1>

        <p className={styles.description}>
          Precious Memories TCG Collection Assistant
        </p>

        <div className={styles.grid}>
          <Link href="/setlist" className={styles.card}>
            <h2>Setlist &rarr;</h2>
            <p>A list of all the sets in Precious Memories</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <Link
          href="https://www.ebay.com/str/sakurablossomtradingpost"
          target="_blank"
          rel="noreferrer"
        >
          eBay Store
        </Link>
        <Link
          href="https://twitter.com/ebay_sbtp"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </Link>
        <Link
          href="mailto:chris@sbtp.xyz"
          target="_blank"
          rel="noreferrer"
        >
          E-Mail
        </Link>
      </footer>
    </div>
  )
}
