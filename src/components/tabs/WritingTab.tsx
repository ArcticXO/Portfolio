import { FiArrowUpRight } from 'react-icons/fi';
import styles from './WritingTab.module.css';
import { WRITING_DATA } from '../../data/writing';

export default function WritingTab() {
  return (
    <div className={styles.container}>
      <div className={styles.headerArea}>
        <p className={styles.sectionSubtitle}>
          Technical articles, security observations, and engineering notes published on{' '}
          <a
            href="https://medium.com/@alabdullah.ali"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.inlineLink}
          >
            Medium
          </a>
          .
        </p>
      </div>

      <div className={styles.list}>
        {WRITING_DATA.map((article) => (
          <a
            key={article.id}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.item}
          >
            <div className={styles.meta}>
              <span className={styles.date}>{article.date}</span>
              <span className={styles.dot}>·</span>
              <span className={styles.readTime}>{article.readTime}</span>
            </div>

            <div className={styles.titleLink}>
              <h3 className={styles.title}>
                <span>{article.title}</span>
                <FiArrowUpRight className={styles.icon} aria-hidden="true" />
              </h3>
            </div>

            <p className={styles.description}>{article.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
