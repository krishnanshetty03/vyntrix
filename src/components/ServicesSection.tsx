import React from 'react';
import { Bot, Network, Brain } from 'lucide-react';
import styles from './ServicesSection.module.css';

const ServicesSection: React.FC = () => {
    return (
        <section className={styles.servicesSection} id="services">
            <div className={styles.header}>
                <div className={styles.subtitle}>OUR CORE EXPERTISE</div>
                <h2 className={styles.title}>
                    What We <span className={styles.highlight}>Do</span>
                </h2>
                <div className={styles.divider} />

                <div className={styles.description}>
                    <p>
                        At Vyntrix Innovations, we design and deploy custom AI agents that automate operations,
                        customer interactions, internal workflows, and decision systems.
                    </p>
                    <p>
                        We don't sell tools. We build intelligent systems that think, respond, and execute.
                    </p>
                </div>
            </div>

            <div className={styles.grid}>
                {/* Card 1: AI Agents */}
                <div className={styles.card}>
                    <div className={`${styles.bracket} ${styles.tl}`} />
                    <div className={`${styles.bracket} ${styles.tr}`} />
                    <div className={`${styles.bracket} ${styles.bl}`} />
                    <div className={`${styles.bracket} ${styles.br}`} />

                    <div className={styles.iconWrapper}>
                        <Bot size={32} strokeWidth={2} />
                    </div>
                    <h3 className={styles.cardTitle}>AI Agents</h3>
                    <p className={styles.cardDescription}>
                        Autonomous digital workers capable of executing complex tasks and handling 24/7 interactions.
                    </p>
                </div>

                {/* Card 2: Workflow Automation */}
                <div className={styles.card}>
                    <div className={`${styles.bracket} ${styles.tl}`} />
                    <div className={`${styles.bracket} ${styles.tr}`} />
                    <div className={`${styles.bracket} ${styles.bl}`} />
                    <div className={`${styles.bracket} ${styles.br}`} />

                    <div className={styles.iconWrapper}>
                        <Network size={32} strokeWidth={2} />
                    </div>
                    <h3 className={styles.cardTitle}>Workflow Automation</h3>
                    <p className={styles.cardDescription}>
                        Seamless process optimization that eliminates manual bottlenecks and ensures error-free execution.
                    </p>
                </div>

                {/* Card 3: Cognitive Systems */}
                <div className={styles.card}>
                    <div className={`${styles.bracket} ${styles.tl}`} />
                    <div className={`${styles.bracket} ${styles.tr}`} />
                    <div className={`${styles.bracket} ${styles.bl}`} />
                    <div className={`${styles.bracket} ${styles.br}`} />

                    <div className={styles.iconWrapper}>
                        <Brain size={32} strokeWidth={2} />
                    </div>
                    <h3 className={styles.cardTitle}>Cognitive Systems</h3>
                    <p className={styles.cardDescription}>
                        Intelligent decision-making engines that analyze patterns, predict outcomes, and adapt strategies.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
