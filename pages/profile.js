import React, { useEffect } from 'react';
import styles from '../pageStyles/resume.module.css';
// import { headers } from '../utils/resumeText';
// import { WhatsAppIcon } from '@mui/icons-material';
// import ResumeLayouts from '../layouts/resume';

export default function ResumePage() {
	// const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		window.location.href = '/';
	}, []);

	// useEffect(() => {
	// 	if (window.innerWidth < 750) setIsMobile(true);
	// }, []);

	return (
		<div className={styles.rootContainer}>
			{/* <div className={styles.sectionFlexContainer}>
				<div className={styles.imgContainer}>
					<img className={styles.profileImg} alt='a'
						src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw">
					</img>
				</div>
				<div className={styles.bioContainer}>
					<div className={styles.textHeader}>{headers.aboutMe}</div>
					<div className={styles.textContent}>Software developer with 2.5+ years of experience working in
					full-stack web development technologies, primarily in javascript-based technologies, including hands-on experience in end-to-end
					development processes. Also, experienced in managing clients and teams in multiple projects.
					Interested to work on innovative projects utilising cutting-edge technologies.</div>
				</div>
			</div>
			<ResumeLayouts.Education isMobile={isMobile} />
			<ResumeLayouts.Achievements isMobile={isMobile} />
			<ResumeLayouts.SoftSkills isMobile={isMobile} />
			<ResumeLayouts.TechLayout isMobile={isMobile} />
			<ResumeLayouts.Connect /> */}
		</div>
	);
}