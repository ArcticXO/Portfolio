import { FiCheckCircle } from 'react-icons/fi';
import styles from './EducationTab.module.css';
import { DEGREES, CERTIFICATIONS } from '../../data/education';

export default function EducationTab() {
  const coursework = [
    'Java Programming',
    'Internet & Cloud Computing',
    'Algorithms & Data Structures',
    'Advanced Programming',
    'Operating Systems & Networking',
    'Databases & Domain Modelling',
  ];

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Degrees</h2>
        <div className={styles.degreeList}>
          {DEGREES.map((degree) => (
            <div key={degree.id} className={styles.degreeCard}>
              <div className={styles.degreeHeader}>
                <div className={styles.degreeMain}>
                  <div className={styles.badgeRow}>
                    <span className={styles.degreeBadge}>First-Class Honours</span>
                  </div>
                  <h3 className={styles.degreeTitle}>{degree.title}</h3>
                  <p className={styles.university}>{degree.university}</p>
                </div>
                <span className={styles.degreeYear}>{degree.year}</span>
              </div>

              <div className={styles.courseworkWrapper}>
                <span className={styles.courseworkLabel}>Relevant Modules & Coursework:</span>
                <div className={styles.courseworkList}>
                  {coursework.map((course, idx) => (
                    <span key={idx} className={styles.courseworkBadge}>
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Certifications</h2>
        <div className={styles.certGrid}>
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.id} className={styles.certCard}>
              <FiCheckCircle className={styles.certIcon} aria-hidden="true" />
              <span className={styles.certTitle}>{cert.title}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
