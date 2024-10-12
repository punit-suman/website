import styles from '../pageStyles/resume.module.css';

export const TechCard = ({ tech }) => {
	return (
		<span className={styles.techCard}>
			<div className={styles.techCardContainer}>
				<div>
					<img className={styles.profileImg} width='40' height='40' alt={tech.name} src={tech.src}></img>
				</div>
				<div>{tech.name}</div>
			</div>
		</span>
	);
};