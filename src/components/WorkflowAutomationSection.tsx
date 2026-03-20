import React, { useEffect, useRef, useState } from 'react';
import {
    Filter,
    RefreshCw,
    BarChart2,
    Users,
    LayoutDashboard,
    Scale,
    UserPlus,
    Cpu,
    CheckCircle2,
    ArrowRight
} from 'lucide-react';
import styles from './WorkflowAutomationSection.module.css';

const WorkflowAutomationSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section className={styles.workflowSection} id="workflow">
            <div 
                ref={sectionRef}
                className={`${styles.container} ${isVisible ? styles.isVisible : ''}`}
            >

                {/* Header */}
                <div className={styles.header}>
                    <div>
                        <div className={styles.subtitle}>OUR SERVICES</div>
                        <h2 className={styles.title}>
                            AI Workflow <span className={styles.highlight}>Automation</span>
                        </h2>
                    </div>
                    
                </div>

                {/* Content Grid */}
                <div className={styles.content}>

                    {/* Left Column: Capabilities */}
                    <div className={styles.capabilitiesCard}>
                        <h3 className={styles.capabilitiesTitle}>Capabilities</h3>
                        <div className={styles.divider} />

                        <div className={styles.list}>
                            <div className={styles.listItem}>
                                <Filter className={styles.listIcon} size={20} />
                                <span>Lead management automation</span>
                            </div>
                            <div className={styles.listItem}>
                                <RefreshCw className={styles.listIcon} size={20} />
                                <span>Follow-up systems</span>
                            </div>
                            <div className={styles.listItem}>
                                <BarChart2 className={styles.listIcon} size={20} />
                                <span>Sales pipelines</span>
                            </div>
                            <div className={styles.listItem}>
                                <Users className={styles.listIcon} size={20} />
                                <span>HR automation</span>
                            </div>
                            <div className={styles.listItem}>
                                <LayoutDashboard className={styles.listIcon} size={20} />
                                <span>Reporting dashboards</span>
                            </div>
                        </div>

                        {/* Efficiency Card */}
                        <div className={styles.efficiencyCard}>
                            <div className={styles.effHeader}>
                                <Scale className={styles.effIcon} size={16} />
                                COST EFFICIENCY COMPARISON
                            </div>
                            <div className={styles.effCompare}>
                                <div className={styles.effOld}>
                                    Replace a <span className={styles.amountRed}>₹50,000-₹60,000</span> monthly employee
                                </div>
                                <div className={styles.effNew}>
                                    With a ₹10,000-₹12,000 AI workflow
                                </div>
                            </div>
                            <div className={styles.effFooter}>
                                <div className={styles.smallDot} />
                                Works 24/7 without breaks
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Visualization */}
                    <div className={styles.visualCard}>
                        <div className={styles.visualBadge}>
                            <div className={styles.smallDot} />
                            LIVE WORKFLOW VISUALIZATION
                        </div>

                        <div className={styles.visualContent}>
                            <div className={styles.flowDiagram}>

                                {/* Step 1 */}
                                <div className={styles.stepNode}>
                                    <UserPlus className={styles.stepIcon} size={32} />
                                    <div className={styles.stepTitle}>Lead Capture</div>
                                    <div className={styles.stepDesc}>Form / Chat / Email</div>
                                </div>

                                <div className={styles.flowArrow}>
                                    <ArrowRight size={24} />
                                </div>

                                {/* Step 2 (Active) */}
                                <div className={`${styles.stepNode} ${styles.active}`}>
                                    <div className={styles.aiCoreBadge}>AI Core</div>
                                    <Cpu className={styles.stepIcon} size={32} />
                                    <div className={styles.stepTitle}>Intelligent Process</div>
                                    <div className={styles.stepDesc}>Qualify & Categorize</div>
                                </div>

                                <div className={styles.flowArrow}>
                                    <ArrowRight size={24} />
                                </div>

                                {/* Step 3 */}
                                <div className={styles.stepNode}>
                                    <CheckCircle2 className={styles.stepIcon} size={32} />
                                    <div className={styles.stepTitle}>Conversion</div>
                                    <div className={styles.stepDesc}>Booking / Sale / Handover</div>
                                </div>

                            </div>
                        </div>

                        {/* Decorative dashed arcs */}
                        <div className={styles.dashedCurve} />
                        <div className={styles.dashedCurve2} />

                        <div className={styles.visualFooter}>
                            <div className={styles.statusIndicators}>
                                <div className={styles.statusItem}>
                                    <div className={styles.statusDotGreen} />
                                    SYSTEM_ACTIVE
                                </div>
                                <div className={styles.statusItem}>
                                    <div className={styles.smallDot} />
                                    LATENCY: 45ms
                                </div>
                            </div>
                            <div>V.1.0.4</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WorkflowAutomationSection;
