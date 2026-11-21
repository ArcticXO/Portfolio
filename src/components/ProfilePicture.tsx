import styles from './ProfilePicture.module.css';

export default function ProfilePicture() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.glowRing} aria-hidden="true" />
      <div className={styles.imageContainer}>
        <img
          src="/assets/profile.jpg"
          alt="Ali Al-Abdullah"
          className={styles.image}
          width={150}
          height={150}
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </div>
  );
}
