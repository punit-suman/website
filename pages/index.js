import Head from 'next/head'
import Image from 'next/image'
import CodeBlock from '../components/CodeBlock'
import styles from '../styles/Home.module.css'

export default function Home() {
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
