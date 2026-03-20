import styles from './BrainGraphic.module.css';

const BrainGraphic: React.FC = () => {
    return (
        <div className={styles.brainWrapper}>
            {/* Ambient glow */}
            <div className={styles.ambientGlow} />

            <div className={styles.brainContainer}>
                {/* Brain image — generated to match reference exactly */}
                {/* Brain graphic using CSS mask to apply brand color */}
                <div
                    className={styles.brainSvg}
                    role="img"
                    aria-label="AI Brain"
                />

                {/* Floating card: Agents Active */}
                <div className={`${styles.floatingCard} ${styles.cardAgents}`}>
                    <div className={`${styles.cardIcon} ${styles.cardIconGold}`}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="10" rx="2" />
                            <circle cx="12" cy="5" r="2" />
                            <path d="M12 7v4" />
                            <circle cx="8" cy="16" r="1" fill="currentColor" />
                            <circle cx="16" cy="16" r="1" fill="currentColor" />
                        </svg>
                    </div>
                    <div>
                        <div className={styles.cardLabel}>Agents Active</div>
                        <div className={styles.cardValue}>24/7</div>
                    </div>
                </div>

                {/* Floating card: Efficiency */}
                <div className={`${styles.floatingCard} ${styles.cardEfficiency}`}>
                    <div className={`${styles.cardIcon} ${styles.cardIconDark}`}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                            <polyline points="17 6 23 6 23 12" />
                        </svg>
                    </div>
                    <div>
                        <div className={styles.cardLabel}>Efficiency</div>
                        <div className={styles.cardValue}>+300%</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrainGraphic;
