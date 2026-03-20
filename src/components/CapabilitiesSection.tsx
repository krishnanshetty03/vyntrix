import React from 'react';
import styles from './CapabilitiesSection.module.css';

const CapabilitiesSection: React.FC = () => {
    const capabilities = [
        { num: '01', title: 'AI Workflow Automation' },
        { num: '02', title: 'AI Voice Agents' },
        { num: '03', title: 'AI Avatars' },
        { num: '04', title: 'CRM & SLM Systems' },
    ];

    return (
        <section className={styles.capabilitiesSection} id="capabilities">
            <div className={styles.header}>
                <div className={styles.subtitle}>CORE CAPABILITIES</div>
                <h2 className={styles.title}>
                    Our Systems. <span className={styles.highlight}>Your Outcomes.</span>
                </h2>
                <div className={styles.divider} />

                <div className={styles.description}>
                    <p>
                        Explore our comprehensive suite of intelligent automation solutions
                        designed to transform your business operations.
                    </p>
                </div>
            </div>

            <div className={styles.listContainer}>
                {capabilities.map((item) => (
                    <div key={item.num} className={styles.listItem}>
                        <div className={styles.itemNumber}>{item.num}</div>
                        <div className={styles.itemTitle}>{item.title}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CapabilitiesSection;
