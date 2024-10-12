import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import styles from '../../pageStyles/resume.module.css';
import { headers } from '../../utils/resumeText';

export function Education({ isMobile = false }) {
	const [expand, setExpand] = useState(false);

	return (
		<div className={styles.sectionContainer}>
			<div>
				<div className={styles.textHeader} onClick={() => setExpand(!expand)}>{headers.education}
					{isMobile ? <span style={{display: 'inline-block', float: 'right'}}>{expand ? <ExpandLessIcon /> : <ExpandMoreIcon />}</span> : <></>}
				</div>
				{!isMobile || expand ?
					<div className={styles.textContent}>
						<ul style={{margin: '0'}}>
							<li>2018 - B.Tech., Aerospace Engineering, IIT Kanpur - 6.7/10 CPI</li>
							<li>2014 - AISSCE (Class XII), DPS Bokaro - 93.8%</li>
							<li>2012 - AISSE (Class X), Goethal’s Public School, Bhagalpur - 10/10 CGPA</li>
						</ul>
					</div>
					: <></>}
			</div>
		</div>
	);
}