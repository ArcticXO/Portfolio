import { FiArrowUpRight, FiCalendar } from 'react-icons/fi';
import styles from './ExperienceTab.module.css';
import { EXPERIENCE_DATA } from '../../data/experience';
import { INTRO_DATA } from '../../data/intro';

export default function ExperienceTab() {
  return (
    <div className={styles.container}>
      <div className={styles.experienceList}>
        {EXPERIENCE_DATA.map((job) => (
          <article key={job.id} className={styles.item}>
            <div className={styles.header}>
              <div className={styles.titleArea}>
                <h3 className={styles.title}>
                  <span className={styles.roleName}>{job.role}</span>
                  <span className={styles.separator}>·</span>
                  <span className={styles.companyName}>{job.company}</span>
                </h3>
              </div>
              <span className={styles.dateBadge}>
                <FiCalendar className={styles.dateIcon} aria-hidden="true" />
                <span className={styles.date}>{job.date}</span>
              </span>
            </div>

            <ul className={styles.list}>
              {job.bullets.map((bullet, index) => (
                <li key={index} className={styles.listItem}>
                  <span className={styles.bulletDot} aria-hidden="true" />
                  <span className={styles.bulletText}>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className={styles.cvFooter}>
        <a
          href={INTRO_DATA.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cvLink}
        >
          <span>View Full CV</span>
          <FiArrowUpRight className={styles.cvIcon} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
