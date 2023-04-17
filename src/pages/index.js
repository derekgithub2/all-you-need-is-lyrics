import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {


  const [albumID, getAlbumID] = useState([])

  return (
    <div className={styles.homepageContainer}>
      <Head>
        <title>All You Need Is Lyrics</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1>🎶All You Need Is... Lyrics🎶</h1>
        </header>
        <h4 className={styles.intro}>Pick An Album!</h4>
        <div className={styles.grid}>
          <Link href="/quiz/21119938">
            <img src="https://lastfm.freetls.fastly.net/i/u/770x0/9f5df98d096f18e393177402081dc255.jpg#9f5df98d096f18e393177402081dc255" className={styles.card} alt="abbey-road-cover"/>
          </Link>
          <Link href="/quiz/32540723">
            <img src="https://lastfm.freetls.fastly.net/i/u/770x0/deaec2d4735bea0d1c45fc75261624ae.jpg#deaec2d4735bea0d1c45fc75261624ae" className={styles.card} alt="revolver-cover"/>
          </Link>
          <Link href="/quiz/30108649">
            <img src="https://lastfm.freetls.fastly.net/i/u/770x0/14e1e3d0b3a44c738d5ef6047be59e7e.jpg#14e1e3d0b3a44c738d5ef6047be59e7e" className={styles.card} alt="white-album-cover"/>
          </Link>          
          <Link href="/quiz/21097920">
            <img src="https://lastfm.freetls.fastly.net/i/u/770x0/d7882cf00830fb67337656824b294227.jpg#d7882cf00830fb67337656824b294227" className={styles.card} alt="stg-peppers-cover"/>
          </Link>          
          <Link href="/quiz/21196039">
            <img src="https://lastfm.freetls.fastly.net/i/u/770x0/a152d53917b94c968087513a71d6ab3e.jpg#a152d53917b94c968087513a71d6ab3e" className={styles.card} alt="let-it-be-cover"/>
          </Link>
          <Link href="/quiz/21156542">
            <img src="https://lastfm.freetls.fastly.net/i/u/770x0/473e3d1fde794405a28470fa3399b7d8.jpg#473e3d1fde794405a28470fa3399b7d8" className={styles.card} alt="please-please-me-cover"/>
          </Link>
        </div>
      </main>
    </div>
  )
}