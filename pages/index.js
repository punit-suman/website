import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import CodeBlock from '../components/CodeBlock'
import styles from '../styles/Home.module.css'
import axios from 'axios'

export default function Home() {
  useEffect(() => {
    const captureVisit = async() => {
      const response = await axios("/api/visits");
      console.log(response.data)
    }
    captureVisit()
  }, [])
 
  return (
    <div className={styles.container}>
      <Head>
        <title>Punit Suman</title>
        <meta name="description" content="Personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <CodeBlock />
      </main>
    </div>
  )
}
