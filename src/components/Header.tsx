import { FiMoon, FiSun } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import type { Tab } from '../types';
import { TABS } from '../types';
import styles from './Header.module.css';

interface HeaderProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

export default function Header({ activeTab, setActiveTab, isDark, setIsDark }: HeaderProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % TABS.length;
      const nextTab = TABS[nextIndex];
      setActiveTab(nextTab);
      document.getElementById(`tab-${nextTab.toLowerCase()}`)?.focus();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + TABS.length) % TABS.length;
      const prevTab = TABS[prevIndex];
      setActiveTab(prevTab);
      document.getElementById(`tab-${prevTab.toLowerCase()}`)?.focus();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.identity}>
          <div className={styles.titleRow}>
            <h1 className={styles.title}>Ali Al-Abdullah</h1>
            <div className={styles.statusBadge} title="Available for opportunities">
              <span className={styles.statusDot} aria-hidden="true" />
              <span className={styles.statusText}>Available for opportunities</span>
            </div>
          </div>
          <p className={styles.roleSub}>Automation & Software Engineer</p>
        </div>

        <motion.button
          onClick={() => setIsDark(!isDark)}
          className={styles.themeToggle}
          aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isDark ? 'dark' : 'light'}
              initial={{ y: -16, opacity: 0, rotate: -90 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 16, opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className={styles.themeIconWrapper}
            >
              {isDark ? (
                <FiSun className={styles.themeIcon} aria-hidden="true" />
              ) : (
                <FiMoon className={styles.themeIcon} aria-hidden="true" />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>

      <nav className={styles.navWrapper} role="tablist" aria-label="Portfolio sections">
        <div className={styles.navContainer}>
          {TABS.map((tab, index) => (
            <button
              key={tab}
              id={`tab-${tab.toLowerCase()}`}
              role="tab"
              aria-selected={activeTab === tab}
              aria-controls={`panel-${tab.toLowerCase()}`}
              tabIndex={activeTab === tab ? 0 : -1}
              onClick={() => setActiveTab(tab)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`${styles.tabButton} ${
                activeTab === tab ? styles.tabButtonActive : styles.tabButtonInactive
              }`}
            >
              <span className={styles.tabText}>{tab}</span>
              {activeTab === tab && (
                <motion.span
                  layoutId="activeTabIndicator"
                  className={styles.activeIndicator}
                  transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                />
              )}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
