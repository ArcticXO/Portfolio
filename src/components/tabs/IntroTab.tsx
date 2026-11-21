import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import styles from './IntroTab.module.css';
import { INTRO_DATA, CORE_SKILLS, HIGHLIGHT_STATS } from '../../data/intro';
import ProfilePicture from '../ProfilePicture';
import CtaButton from '../CtaButton';

export default function IntroTab() {
  return (
    <div className={styles.introContainer}>
      <div className={styles.heroSection}>
        <div className={styles.bioContent}>
          <div className={styles.badgeRow}>
            <span className={styles.locationBadge}>
              <FiMapPin className={styles.badgeIcon} aria-hidden="true" />
              <span>Manchester │ London, UK</span>
            </span>
          </div>

          <p className={styles.paragraph}>
            {INTRO_DATA.paragraph1}{' '}
            {INTRO_DATA.highlightUrl ? (
              <a
                href={INTRO_DATA.highlightUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.highlightLink}
              >
                <span>{INTRO_DATA.highlight}</span>
                <FiArrowUpRight className={styles.highlightIcon} aria-hidden="true" />
              </a>
            ) : (
              <span className={styles.highlight}>{INTRO_DATA.highlight}</span>
            )}
            .
          </p>

          <p className={styles.paragraphSmall}>{INTRO_DATA.paragraph2}</p>

          <div className={styles.actionContainer}>
            <div className={styles.ctaGroup}>
              <CtaButton href={`mailto:${INTRO_DATA.email}`}>
                <FiMail aria-hidden="true" />
                <span>Let's Talk</span>
              </CtaButton>
              <CtaButton
                href={INTRO_DATA.cvUrl}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View CV</span>
                <FiArrowUpRight aria-hidden="true" />
              </CtaButton>
            </div>

            <div className={styles.linksContainer}>
              {INTRO_DATA.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={styles.link}
                  title={link.label}
                >
                  {link.icon === 'github' && (
                    <FiGithub className={styles.linkIcon} aria-hidden="true" />
                  )}
                  {link.icon === 'linkedin' && (
                    <FiLinkedin className={styles.linkIcon} aria-hidden="true" />
                  )}
                  {link.icon === 'mail' && (
                    <FiMail className={styles.linkIcon} aria-hidden="true" />
                  )}
                  {link.icon === 'arrow-up-right' && (
                    <FiArrowUpRight className={styles.linkIcon} aria-hidden="true" />
                  )}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <ProfilePicture />
      </div>

      <div className={styles.statsGrid}>
        {HIGHLIGHT_STATS.map((stat, i) => (
          <div key={i} className={styles.statCard}>
            <span className={styles.statLabel}>{stat.label}</span>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statSub}>{stat.sub}</span>
          </div>
        ))}
      </div>

      <div className={styles.skillsSection}>
        <h3 className={styles.skillsHeading}>Core Stack & Tooling</h3>
        <div className={styles.skillsList}>
          {CORE_SKILLS.map((skill, i) => (
            <span key={i} className={styles.skillChip}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
