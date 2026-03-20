import React from 'react';
import {
    Database,
    X,
    ArrowRight,
    Link,
    Tag,
    Bot,
    Activity,
    Trophy,
    Eye
} from 'lucide-react';
import styles from './CaseStudyCrmDashboard.module.css';

const CaseStudyCrmDashboard: React.FC = () => {
    return (
        <section className={styles.caseStudySection} id="case-study-crm">
            <div className={styles.container}>

                {/* Header */}
                <div className={styles.header}>
                    <div>
                        <div className={styles.subtitle}>CASE STUDY 03</div>
                        <h2 className={styles.title}>
                            AI CRM <span className={styles.highlight}>Dashboard</span>
                        </h2>
                    </div>
                    
                </div>

                {/* Content Structure */}
                <div className={styles.content}>
                    {/* Vertical Divider */}
                    <div className={styles.dividerVertical}>
                        <div className={styles.dividerHighlight} />
                    </div>

                    {/* LEFT COLUMN: The Challenge */}
                    <div>
                        <div className={styles.challengeBadge}>THE CHALLENGE</div>
                        <h3 className={styles.columnTitle}>Fragmented Data Silos</h3>

                        <div className={styles.challengeCard}>
                            <div className={styles.challengeMainText}>
                                <Database className={styles.challengeIcon} size={28} />
                                <div className={styles.challengeText}>
                                    Sales data is buried in isolated spreadsheets, emails, and sticky notes, leading to lost context and missed revenue opportunities.
                                </div>
                            </div>

                            <div className={styles.challengeList}>
                                <div className={styles.challengeListItem}>
                                    <X className={styles.crossIcon} size={18} />
                                    <span>Disorganized contact lists</span>
                                </div>
                                <div className={styles.challengeListItem}>
                                    <X className={styles.crossIcon} size={18} />
                                    <span>Missed follow-up deadlines</span>
                                </div>
                                <div className={styles.challengeListItem}>
                                    <X className={styles.crossIcon} size={18} />
                                    <span>Zero pipeline visibility</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.metricsRow}>
                            <div className={styles.metricBox}>
                                <div className={styles.metricLabel}>PIPELINE VISIBILITY</div>
                                <div className={styles.metricValueRed}>Blind</div>
                                <div className={styles.metricSub}>Manual Tracking</div>
                            </div>

                            <ArrowRight className={styles.arrowRight} size={24} />

                            <div className={styles.metricBox}>
                                <div className={styles.metricLabel}>DEAL SLIPPAGE</div>
                                <div className={styles.metricValueWhite}>Critical</div>
                                <div className={styles.metricSub}></div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: The Solution */}
                    <div className={styles.solutionColumn}>
                        <div className={styles.solutionBadge}>THE SOLUTION</div>
                        <h3 className={styles.columnTitle}>Automated Relationship Management</h3>

                        <div className={styles.stepsContainer}>

                            <div className={styles.stepCard}>
                                <div className={styles.stepNumber}>01</div>
                                <Link className={styles.stepIcon} size={20} />
                                <div className={styles.stepContent}>
                                    <div className={styles.stepTitle}>Data Centralization</div>
                                    <div className={styles.stepDesc}>Syncs emails, calls, and calendar notes instantly</div>
                                </div>
                            </div>

                            <div className={styles.stepCard}>
                                <div className={styles.stepNumber}>02</div>
                                <Tag className={styles.stepIcon} size={20} fill="currentColor" />
                                <div className={styles.stepContent}>
                                    <div className={styles.stepTitle}>Smart Auto-Tagging</div>
                                    <div className={styles.stepDesc}>Categorizes leads by warmth, intent, and stage</div>
                                </div>
                            </div>

                            <div className={styles.stepCard}>
                                <div className={styles.stepNumber}>03</div>
                                <Bot className={styles.stepIcon} size={20} />
                                <div className={styles.stepContent}>
                                    <div className={styles.stepTitle}>Intelligent Triggers</div>
                                    <div className={styles.stepDesc}>Auto-schedules follow-ups based on lead behavior</div>
                                </div>
                            </div>

                            <div className={styles.stepCard}>
                                <div className={styles.stepNumber}>04</div>
                                <Activity className={styles.stepIcon} size={20} />
                                <div className={styles.stepContent}>
                                    <div className={styles.stepTitle}>Live Reporting</div>
                                    <div className={styles.stepDesc}>Real-time analytics on conversion & pipeline health</div>
                                </div>
                            </div>

                        </div>

                        <div className={styles.resultCard}>
                            <div className={styles.resultContent}>
                                <div className={styles.resultHeader}>
                                    <Trophy size={16} />
                                    KEY RESULT
                                </div>
                                <div className={styles.resultTitle}>
                                    360° Pipeline Visibility
                                </div>
                            </div>
                            <div className={styles.resultChartIcon}>
                                <Eye size={24} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudyCrmDashboard;
