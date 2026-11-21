import { FiArrowUpRight } from 'react-icons/fi';
import styles from './WorkTab.module.css';
import { WORK_DATA } from '../../data/work';

export default function WorkTab() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {WORK_DATA.map((work) => {
          const techList = work.tech.split('·').map((t) => t.trim());
          return (
            <article key={work.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.titleArea}>
                  {work.category && <span className={styles.categoryBadge}>{work.category}</span>}
                  <h3 className={styles.title}>
                    {work.link ? (
                      <a
                        href={work.link}
                        target={work.link.startsWith('http') ? '_blank' : undefined}
                        rel={work.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={styles.titleLink}
                      >
                        <span>{work.title}</span>
                        <FiArrowUpRight className={styles.icon} aria-hidden="true" />
                      </a>
                    ) : (
                      <span className={styles.titleStatic}>{work.title}</span>
                    )}
                  </h3>
                </div>
                <span className={styles.date}>{work.date}</span>
              </div>

              <p className={styles.description}>{work.description}</p>

              <div className={styles.techContainer}>
                {techList.map((t, idx) => (
                  <span key={idx} className={styles.techBadge}>
                    {t}
                  </span>
                ))}
              </div>

              {work.link && (
                <div className={styles.cardFooter}>
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.actionLink}
                  >
                    <span>View Repository & Details</span>
                    <FiArrowUpRight aria-hidden="true" />
                  </a>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
