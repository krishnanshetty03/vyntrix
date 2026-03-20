import React from 'react';
import { Rocket, Briefcase, Building2, Fingerprint } from 'lucide-react';
import styles from './TargetAudienceSection.module.css';

const TargetAudienceSection: React.FC = () => {
    return (
        <section className={styles.section} id="target-audience">
            <div className={styles.container}>

                <div className={styles.header}>
                    <div className={styles.subtitle}>TARGET CLIENT SEGMENTS</div>
                    <h2 className={styles.title}>
                        Who We <span className={styles.highlight}>Work With</span>
                    </h2>
                    <p className={styles.description}>
                        We partner with forward-thinking organizations ready to replace manual bottlenecks with autonomous intelligence.
                    </p>
                </div>

                <div className={styles.grid}>

                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <Rocket size={28} />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Growth-Stage Startups</h3>
                            <p className={styles.cardDesc}>
                                Agile teams needing to scale operations rapidly without linearly increasing headcount or overhead costs.
                            </p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <Briefcase size={28} />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Service-Based Agencies</h3>
                            <p className={styles.cardDesc}>
                                Marketing, HR, and consulting firms looking to automate client fulfillment, reporting, and lead nurturing.
                            </p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <Building2 size={28} />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Mid-Scale Enterprises</h3>
                            <p className={styles.cardDesc}>
                                Established organizations seeking operational efficiency to reduce manpower dependency and error rates.
                            </p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <Fingerprint size={28} />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Visionary Founders</h3>
                            <p className={styles.cardDesc}>
                                Entrepreneurs building scalable systems from day one, focusing on strategy rather than repetitive execution.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default TargetAudienceSection;
