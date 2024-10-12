import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';
import { TagComponent } from '../../components/TagComponent';
// import { TechCard } from '../../components/TechCard';
import styles from '../../pageStyles/resume.module.css';
import { headers, progLangs, webTechs, dbms, cloud, otherTools } from '../../utils/resumeText';

export function TechLayout({ isMobile = false }) {
	const [expand, setExpand] = useState(false);

	return (
		<div className={styles.sectionContainer}>
			<div>
				<div className={styles.textHeader} onClick={() => setExpand(!expand)}>{headers.technical}{isMobile ? <span style={{display: 'inline-block', float: 'right'}}>{expand ? <ExpandLessIcon /> : <ExpandMoreIcon />}</span> : <></>}</div>
				{!isMobile || expand ?
					<div className={styles.textContent}>
						<div className={styles.textSubHeader}>{headers.technicalSub.progLang}</div>
						<div>
							{progLangs.map((t, i) => {
								return (
									<React.Fragment key={i}>
										<TagComponent text={t.name} percent={t.percent} />
									</React.Fragment>
								);
							})}</div>
						<div className={styles.textSubHeader}>{headers.technicalSub.webTech}</div>
						{webTechs.map((t, i) => {
							return (
								<React.Fragment key={i}>
									<TagComponent text={t.name} percent={t.percent} />
								</React.Fragment>
							);
						})}
						<div className={styles.textSubHeader}>{headers.technicalSub.dbms}</div>
						{dbms.map((t, i) => {
							return (
								<React.Fragment key={i}>
									<TagComponent text={t.name} percent={t.percent} />
								</React.Fragment>
							);
						})}
						<div className={styles.textSubHeader}>{headers.technicalSub.cloud}</div>
						{cloud.map((t, i) => {
							return (
								<React.Fragment key={i}>
									<TagComponent text={t.name} percent={t.percent} />
								</React.Fragment>
							);
						})}
						<div className={styles.textSubHeader}>{headers.technicalSub.otherTools}</div>
						{otherTools.map((t, i) => {
							return (
								<React.Fragment key={i}>
									<TagComponent text={t.name} percent={t.percent} />
								</React.Fragment>
							);
						})}
					</div>
					: <></>}
			</div>
		</div>
	);
}