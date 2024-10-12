import { useState } from 'react';
import styles from '../../pageStyles/resume.module.css';
import { headers } from '../../utils/resumeText';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { TagComponent } from '../../components/TagComponent';

export function SoftSkills({ isMobile = false }) {
    const [expand, setExpand] = useState(false)
    const softSkills = ['Communication', 'Self-awareness',
        'Problem-solving',
        'Collaborative approach',
        'Time management',
        'Accountability',
        'Adaptability']
    return (
        <div className={styles.sectionContainer}>
            <div>
                <div className={styles.textHeader} onClick={() => setExpand(!expand)}>{headers.softSkills}
                    {isMobile ? <span style={{display: 'inline-block', float: 'right'}}>{expand ? <ExpandLessIcon /> : <ExpandMoreIcon />}</span> : <></>}
                </div>
                {!isMobile || expand ?
                    <div className={styles.textContent}>
                            {softSkills.map(s => {
                                return (
                                    <TagComponent text={s} />
                                )
                            })}
                    </div>
                : <></>}
            </div>
        </div>
    )
}