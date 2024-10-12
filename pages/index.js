// HOLD: import { Tooltip } from '@mui/material';
import axios from 'axios';
import Head from 'next/head';
// HOLD: import Link from 'next/link';
import React, { useEffect, useState } from 'react';
// HOLD: import ContactIcon from '../assets/contact.png';
// HOLD: import ResumeIcon from '../assets/resume.png';
import CodeBlock from '../components/CodeBlock';
import ResumeLayouts from '../layouts/resume';
import styles from '../pageStyles/home.module.css';

export default function Home() {
	const [showContact, setShowContact] = useState(false);

	useEffect(() => {
		const captureVisit = async() => {
			await axios("/api/visits");
		};
		captureVisit();
		setTimeout(() => {
			setShowContact(true);
		}, 21000);
	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>Punit Suman</title>
				<meta name="description" content="Personal website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				{/* HOLD:
				<div style={{display: 'flex', justifyContent: 'center', padding: '1rem 1rem 3rem 1rem', width: '75%', margin: 'auto'}}>
					<div style={{display: 'flex', justifyContent: 'space-around'}}>
						<div style={{cursor: 'pointer', margin: '0 20%'}}>
							<Link href='/profile'>
								<Tooltip title='Profile'>
									<img src={ResumeIcon.src} height={35} width={35} alt='profile' />
								</Tooltip>
							</Link>
						</div>
						<div style={{cursor: 'pointer', margin: '0 20%'}}>
							<Link href='/resume/#contact'>
								<Tooltip title='Contact'>
									<img src={ContactIcon.src} height={35} width={35} alt='resume' />
								</Tooltip>
							</Link>
						</div>
					</div>
				</div> */}
				<div className={styles.pageContent}>
					<CodeBlock />
					<div className={`${styles.contactContainer} ${showContact ? '' : styles.contactHidden}`}>
						<ResumeLayouts.Connect showHeader={false} />
					</div>
				</div>
			</main>
		</div>
	);
}
