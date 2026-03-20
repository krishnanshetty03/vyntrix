import styles from './HeroSection.module.css';
import BrainGraphic from './BrainGraphic';

/* Inline SVG icon components for performance (no emoji) */
const BoltIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L3 14h9l-1 10 10-12h-9l1-10z" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>
);


const CheckIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

interface HeroSectionProps {
    onOpenContact: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
    return (
        <section className={styles.heroSection}>
            {/* Subtle background grid */}
            <div className={styles.bgGrid} />

            <div className={styles.heroInner}>
                {/* Left column */}
                <div className={styles.heroLeft}>
                    {/* Badge */}
                    <div className={styles.badge}>
                        <span className={styles.badgeIcon}><BoltIcon /></span>
                        Agentic AI Systems
                    </div>

                    {/* Heading */}
                    <h1 className={styles.heading}>
                        We Build AI That
                        <br />
                        <span className={styles.headingGold}>Works For You.</span>
                    </h1>

                    {/* Gold bar */}
                    <div className={styles.headingBar} />

                    {/* Description */}
                    <p className={styles.description}>
                        Vyntrix Innovations is an Agentic AI Automation Studio helping
                        businesses replace repetitive work with intelligent AI agents,
                        workflows, and cognitive systems.
                    </p>

                    {/* CTA Buttons */}
                    <div className={styles.ctaGroup}>
                        <button className={styles.btnPrimary} onClick={onOpenContact}>
                            Build My AI System <ArrowRightIcon />
                        </button>
                    </div>

                    {/* Features */}
                    <div className={styles.features}>
                        <div className={styles.featureItem}>
                            <span className={styles.featureCheck}><CheckIcon /></span>
                            24/7 Automation
                        </div>
                        <div className={styles.featureItem}>
                            <span className={styles.featureCheck}><CheckIcon /></span>
                            Seamless Integration
                        </div>
                        <div className={styles.featureItem}>
                            <span className={styles.featureCheck}><CheckIcon /></span>
                            Custom Architecture
                        </div>
                    </div>
                </div>

                {/* Right column */}
                <div className={styles.heroRight}>
                    <BrainGraphic />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
