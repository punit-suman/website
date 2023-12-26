import axios from 'axios';
import Head from 'next/head';
import React, { useEffect } from 'react';
import CodeBlock from '../components/CodeBlock';
import styles from '../styles/Home.module.css';

export default function Home() {
	useEffect(() => {
		const captureVisit = async() => {
			await axios("/api/visits");
		};
		captureVisit();
	}, []);

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
	);
}
