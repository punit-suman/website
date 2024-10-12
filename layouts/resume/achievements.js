import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import styles from '../../pageStyles/resume.module.css';
import { headers } from '../../utils/resumeText';

export function Achievements({ isMobile = false }) {
	const [expand, setExpand] = useState(false);

	return (
		<div className={styles.sectionContainer}>
			<div>
				<div className={styles.textHeader} onClick={() => setExpand(!expand)}>{headers.scholastic}
					{isMobile ? <span style={{display: 'inline-block', float: 'right'}}>{expand ? <ExpandLessIcon /> : <ExpandMoreIcon />}</span> : <></>}</div>
				{!isMobile || expand ?
					<div className={styles.textContent}>
						<ul style={{margin: '0'}}>
							<li>AIR - 6473, JEE-ADVANCED, 2014</li>
							<li>AIR - 18095, JEE-MAIN, 2014</li>
							<li>Received Certificate of Merit for securing A1 grade in all the subjects in Class 10th, CBSE, 2012</li>
							<li>Obtained 99.3273 percentile in Quantitative Reasoning in Problem Solving Assessment, Class 11th, CBSE, 2013</li>
							<li>International Rank - 249, National Science Olympiad, 2012</li>
							<li>International Rank - 870, National Science Olympiad, 2013</li>
						</ul>
					</div>
					: <></>}
			</div>
		</div>
	);
}