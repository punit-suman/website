import React from 'react';
import styles from '../../pageStyles/resume.module.css';
import { headers } from '../../utils/resumeText';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export function Contact({ showHeader = true }) {
	return (
		<div id="contact" className={styles.sectionContainer}>
			<div>
				{showHeader && <div className={styles.textHeader}>{headers.connect}</div>}
				<div className={styles.textContent}>
					<div className={styles.connectSectionFlexContainer}>
						<div className={styles.connectSectionCard}>
							<a href='tel:7061972084' target='_blank' rel="noreferrer">
								<div className={styles.connectCardContainer}>
									<div>
										<CallIcon />
										{/* <a href="https://wa.me/7061972084?text=Hi" target='_blank' rel="noreferrer">
											<WhatsAppIcon />
										</a> */}
									</div>
									<div>+91-7061972084</div>
								</div>
							</a>
						</div>
						<div className={styles.mobileViewMarginTop25}>
							<a href="mailto:punit.suman1707@gmail.com" target='_blank' rel="noreferrer">
								<div className={styles.connectCardContainer}>
									<div><EmailIcon /></div>
									<div>punit.suman1707@gmail.com</div>
								</div>
							</a>
						</div>
						<div className={styles.mobileViewMarginTop25}>
							<a href="https://www.linkedin.com/in/punit-suman/" target='_blank' rel="noreferrer">
								<div className={styles.connectCardContainer}>
									<div><LinkedInIcon /></div>
									<div>linkedin/punit-suman</div>
								</div>
							</a>
						</div>
					</div>
					{/* <div>
						https://github.com
					</div> */}
				</div>
			</div>
		</div>
	);
}