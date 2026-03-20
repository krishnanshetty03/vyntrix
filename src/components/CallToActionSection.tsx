import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './CallToActionSection.module.css';

interface CallToActionProps {
    onOpenContact: () => void;
}

const CallToActionSection: React.FC<CallToActionProps> = ({ onOpenContact }) => {
    return (
        <section className={styles.section} id="cta">
            <div className={styles.container}>

                <div className={styles.header}>
                    <div className={styles.subtitle}>READY TO AUTOMATE?</div>
                    <h2 className={styles.title}>Let's Build Your AI System.</h2>
                    <p className={styles.description}>
                        Stop paying for inefficiency. Transform your manual workflows into intelligent, autonomous assets.
                    </p>
                </div>

                <div className={styles.comparisonContainer}>
                    {/* Traditional Employee Card */}
                    <div className={styles.traditionalCard}>
                        <div className={styles.cardHeader}>TRADITIONAL EMPLOYEE</div>
                        <div className={styles.strikethroughPrice}>
                            <span>₹50k - ₹60k</span>
                        </div>
                        <div className={styles.cardSub}>/ Month (Limited hours)</div>
                    </div>

                    {/* VS Badge */}
                    <div className={styles.vsBadge}>VS</div>

                    {/* Vyntrix AI System Card */}
                    <div className={styles.vyntrixCard}>
                        <div className={styles.vyntrixHeader}>VYNTRIX AI SYSTEM</div>
                        <div className={styles.vyntrixPrice}>
                            ₹10k - ₹12k
                        </div>
                        <div className={styles.vyntrixSub}>/ Month (24/7 Execution)</div>
                    </div>
                </div>

                <div className={styles.actionArea}>
                    <p className={styles.actionText}>
                        Tell us your workflow. We'll design the AI system.
                    </p>
                    <button className={styles.ctaButton} onClick={onOpenContact}>
                        START YOUR AUTOMATION JOURNEY
                        <ArrowRight size={20} />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default CallToActionSection;
